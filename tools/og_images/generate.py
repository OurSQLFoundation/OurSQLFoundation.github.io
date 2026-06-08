#!/usr/bin/env python3
"""
OurSQL Foundation — OG image generator
Generates 1200x630 social sharing images for resource sections and the contribute page.

Usage:
    pip install -r requirements.txt
    python tools/og_images/generate.py
"""

import os
import glob
import textwrap
import frontmatter
import yaml
from PIL import Image, ImageDraw, ImageFont

# ── Paths ────────────────────────────────────────────────────────────────────

SCRIPT_DIR   = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT    = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))
CONTENT_DIR  = os.path.join(REPO_ROOT, "content")
ASSETS_DIR   = os.path.join(REPO_ROOT, "assets", "images", "og")
LOGO_PATH    = os.path.join(SCRIPT_DIR, "logo.png")

os.makedirs(ASSETS_DIR, exist_ok=True)

# ── Canvas ───────────────────────────────────────────────────────────────────

W, H = 1200, 630

# ── Colors — dark hero style ─────────────────────────────────────────────────

DARK_BG     = (13,  15,  26)    # #0d0f1a
DARK_BG2    = (20,  22,  41)    # #141629
ACCENT_CYAN = (0,  200, 255)    # #00c8ff
ACCENT_BLUE = (96, 165, 250)    # #60a5fa
ACCENT_PURP = (167,139, 250)    # #a78bfa
TITLE_COLOR = (255, 255, 255)   # white
DESC_COLOR  = (148, 163, 184)   # #94a3b8 — slate-400
TAG_COLOR   = (0,  200, 255)    # accent
URL_COLOR   = (51,  65,  85)    # #334155 — barely visible


def make_background() -> Image.Image:
    """Dark hero background — clean, no corner artefacts."""
    img = Image.new("RGB", (W, H))
    draw = ImageDraw.Draw(img)

    # Vertical dark gradient
    for y in range(H):
        t = y / H
        r = int(DARK_BG[0] + (DARK_BG2[0] - DARK_BG[0]) * t)
        g = int(DARK_BG[1] + (DARK_BG2[1] - DARK_BG[1]) * t)
        b = int(DARK_BG[2] + (DARK_BG2[2] - DARK_BG[2]) * t)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

    # Soft radial glow centred at the top — no corners
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    cx, cy = W // 2, -80
    for radius in range(500, 0, -1):
        a = int(30 * (1 - radius / 500))
        gd.ellipse([cx - radius, cy - radius, cx + radius, cy + radius],
                   fill=(*ACCENT_CYAN, a))
    img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")

    # Bottom accent bar
    draw = ImageDraw.Draw(img)
    draw.rectangle([0, H - 5, W, H], fill=ACCENT_CYAN)

    return img


def gradient_text(x: int, y: int, text: str,
                  font: ImageFont.FreeTypeFont) -> Image.Image:
    """Return an RGBA layer with text in a cyan→blue→purple gradient."""
    # Render white text on transparent layer
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    ld.text((x, y), text, font=font, fill=(255, 255, 255, 255))

    # Full-width horizontal gradient (one row, stretched)
    grad_row = Image.new("RGB", (W, 1))
    for px in range(W):
        t = px / max(W - 1, 1)
        if t < 0.5:
            t2 = t * 2
            r = int(ACCENT_CYAN[0] + (ACCENT_BLUE[0] - ACCENT_CYAN[0]) * t2)
            g = int(ACCENT_CYAN[1] + (ACCENT_BLUE[1] - ACCENT_CYAN[1]) * t2)
            b = int(ACCENT_CYAN[2] + (ACCENT_BLUE[2] - ACCENT_CYAN[2]) * t2)
        else:
            t2 = (t - 0.5) * 2
            r = int(ACCENT_BLUE[0] + (ACCENT_PURP[0] - ACCENT_BLUE[0]) * t2)
            g = int(ACCENT_BLUE[1] + (ACCENT_PURP[1] - ACCENT_BLUE[1]) * t2)
            b = int(ACCENT_BLUE[2] + (ACCENT_PURP[2] - ACCENT_BLUE[2]) * t2)
        grad_row.putpixel((px, 0), (r, g, b))
    grad = grad_row.resize((W, H), Image.NEAREST).convert("RGBA")

    # Use text alpha as mask to blend gradient into transparent layer
    text_alpha = layer.split()[3]
    grad.putalpha(text_alpha)
    return grad


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    """Load Inter or Arial from system, fall back to default."""
    candidates_bold = [
        "/Library/Fonts/Inter-Bold.ttf",
        "/Library/Fonts/Arial Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]
    candidates_regular = [
        "/Library/Fonts/Inter-Regular.ttf",
        "/Library/Fonts/Arial.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]
    candidates = candidates_bold if bold else candidates_regular
    for path in candidates:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


def wrap_text(text: str, font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    """Word-wrap text to fit within max_width pixels, respecting explicit \\n."""
    result = []
    for segment in text.split("\n"):
        words = segment.split()
        lines, current = [], ""
        dummy = Image.new("RGB", (1, 1))
        draw  = ImageDraw.Draw(dummy)
        for word in words:
            test = (current + " " + word).strip()
            w = draw.textbbox((0, 0), test, font=font)[2]
            if w <= max_width:
                current = test
            else:
                if current:
                    lines.append(current)
                current = word
        if current:
            lines.append(current)
        result.extend(lines)
    return result


def fit_title_font(title: str, max_width: int, max_height: int,
                   sizes: list = None) -> tuple[ImageFont.FreeTypeFont, list[str]]:
    """Find the largest font size where the title fits."""
    if sizes is None:
        sizes = [96, 80, 68, 56, 48, 40, 32]
    for size in sizes:
        font = load_font(size, bold=True)
        lines = wrap_text(title, font, max_width)
        dummy = Image.new("RGB", (1, 1))
        draw = ImageDraw.Draw(dummy)
        total_h = sum(draw.textbbox((0, 0), l, font=font)[3] for l in lines) + (len(lines) - 1) * 16
        if total_h <= max_height:
            return font, lines
    font = load_font(28, bold=True)
    return font, wrap_text(title, font, max_width)


def add_logo(img: Image.Image, logo_path: str, x: int, y: int, max_height: int = 44):
    """Paste logo onto image, scaled to max_height."""
    if not os.path.exists(logo_path):
        return
    logo = Image.open(logo_path).convert("RGBA")
    ratio = max_height / logo.height
    new_size = (int(logo.width * ratio), max_height)
    logo = logo.resize(new_size, Image.LANCZOS)
    img.paste(logo, (x, y), logo)


def draw_text_centered(img: Image.Image, draw: ImageDraw.ImageDraw,
                        y: int, text: str, font, color, gradient: bool = False):
    """Draw a single line of text horizontally centered. Returns new img if gradient."""
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    x = (W - tw) // 2
    if gradient:
        layer = gradient_text(x, y, text, font)
        img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")
        return img, ImageDraw.Draw(img)
    draw.text((x, y), text, font=font, fill=color)
    return img, draw


def generate_image(title: str, description: str, label: str, out_path: str):
    """Render a 1200×630 dark hero OG image for section pages."""
    img  = make_background()
    draw = ImageDraw.Draw(img)

    PAD_X  = 80
    PAD_Y  = 48
    TEXT_W = W - PAD_X * 2

    # Logo — centred top
    if os.path.exists(LOGO_PATH):
        logo = Image.open(LOGO_PATH).convert("RGBA")
        lh = 44
        logo = logo.resize((int(logo.width * lh / logo.height), lh), Image.LANCZOS)
        lx = (W - logo.width) // 2
        img.paste(logo, (lx, PAD_Y), logo)
        draw = ImageDraw.Draw(img)

    # Measure all content to vertically centre it
    title_font, title_lines = fit_title_font(title, TEXT_W, 220)
    dummy  = Image.new("RGB", (1, 1))
    dd     = ImageDraw.Draw(dummy)
    line_h = dd.textbbox((0, 0), "Ag", font=title_font)[3] + 16

    desc_font  = load_font(28)
    desc_lines = wrap_text(description, desc_font, TEXT_W)[:2] if description else []

    total_h = (len(title_lines) * line_h
               + (24 if desc_lines else 0)
               + len(desc_lines) * 42)
    y = (H - total_h) // 2 + 8

    # Title — gradient, centred
    for line in title_lines:
        img, draw = draw_text_centered(img, draw, y, line, title_font, None, gradient=True)
        y += line_h
    y += 24

    # Description — centred, muted
    for line in desc_lines:
        img, draw = draw_text_centered(img, draw, y, line, desc_font, DESC_COLOR)
        y += 42

    # URL — centred bottom, visible but subtle
    url_font = load_font(22)
    img, draw = draw_text_centered(img, draw, H - 50, "oursqlfoundation.org",
                                    url_font, (100, 116, 139))

    img.save(out_path, "PNG", optimize=True)
    print(f"  ✓ {os.path.relpath(out_path, REPO_ROOT)}")


def generate_book_image(title: str, authors: list, cover_path: str, out_path: str):
    """Render a 1200×630 OG image for a book with cover on the right."""
    img = make_background()
    draw = ImageDraw.Draw(img)

    PAD_X  = 80
    PAD_Y  = 56
    COVER_MAX_H = 510   # max cover height
    COVER_MAX_W = 300   # max cover width
    GAP    = 60         # gap between text and cover

    # Load and resize cover
    cover = None
    if cover_path and os.path.exists(cover_path):
        cover = Image.open(cover_path).convert("RGBA")
        ratio = min(COVER_MAX_H / cover.height, COVER_MAX_W / cover.width)
        cover = cover.resize(
            (int(cover.width * ratio), int(cover.height * ratio)),
            Image.LANCZOS,
        )

    # Cover x position
    cover_x = W - PAD_X - (cover.width if cover else 0)
    text_w   = cover_x - GAP - PAD_X

    # Logo — top left
    add_logo(img, LOGO_PATH, PAD_X, PAD_Y, max_height=36)

    # Break title at commas for cleaner display
    title_display = title.replace(", ", ",\n")

    # Title — vertically centred in remaining height
    title_font, title_lines = fit_title_font(title_display, text_w, 260)
    dummy = Image.new("RGB", (1, 1))
    dd    = ImageDraw.Draw(dummy)
    line_h = dd.textbbox((0, 0), "Ag", font=title_font)[3] + 10

    author_font   = load_font(34)
    author_text   = ", ".join(authors) if authors else ""
    author_lines  = wrap_text(author_text, author_font, text_w) if author_text else []

    total_h = (
        len(title_lines) * line_h
        + (24 if author_lines else 0)
        + len(author_lines) * 46
    )
    y = (H - total_h) // 2

    for line in title_lines:
        grad_layer = gradient_text(PAD_X, y, line, title_font)
        img = Image.alpha_composite(img.convert("RGBA"), grad_layer).convert("RGB")
        draw = ImageDraw.Draw(img)
        y += line_h
    y += 16
    for line in author_lines:
        draw.text((PAD_X, y), line, font=author_font, fill=DESC_COLOR)
        y += 46

    # Bottom domain
    domain_font = load_font(22)
    draw.text((PAD_X, H - 46), "oursqlfoundation.org", font=domain_font, fill=URL_COLOR)

    # Paste cover (vertically centred)
    if cover:
        cover_y = (H - cover.height) // 2
        if cover.mode == "RGBA":
            img.paste(cover, (cover_x, cover_y), cover)
        else:
            img.paste(cover, (cover_x, cover_y))

        # Subtle shadow behind cover
        shadow = Image.new("RGBA", img.size, (0, 0, 0, 0))
        sd = ImageDraw.Draw(shadow)
        for i in range(12, 0, -1):
            sd.rectangle(
                [cover_x + i, cover_y + i, cover_x + cover.width + i, cover_y + cover.height + i],
                fill=(0, 0, 0, 8),
            )
        img = Image.alpha_composite(img.convert("RGBA"), shadow).convert("RGB")

    img.save(out_path, "PNG", optimize=True)
    print(f"  ✓ {os.path.relpath(out_path, REPO_ROOT)}")


def process_book(bundle_dir: str):
    """Generate OG image for a book leaf bundle."""
    md_path = os.path.join(bundle_dir, "index.md")
    if not os.path.exists(md_path):
        return

    post    = frontmatter.load(md_path)
    title   = str(post.get("title", "")).strip()
    authors = post.get("authors") or []
    if isinstance(authors, str):
        authors = [a.strip() for a in authors.split(",")]

    if not title:
        return

    # Find cover image (first from images field, or any jpeg in dir)
    cover_path = None
    images = post.get("images", [])
    if images:
        cover_path = os.path.join(bundle_dir, images[0])
    if not cover_path or not os.path.exists(cover_path):
        for ext in ("*.jpeg", "*.jpg", "*.png"):
            found = glob.glob(os.path.join(bundle_dir, ext))
            if found:
                cover_path = found[0]
                break

    out_path = os.path.join(bundle_dir, "social_1200x630.png")
    generate_book_image(title, authors, cover_path, out_path)

    # Update front matter — image path relative to leaf bundle
    if post.get("image") != "social_1200x630.png":
        post["image"] = "social_1200x630.png"
        with open(md_path, "wb") as f:
            frontmatter.dump(post, f)


def generate_section_image_with_covers(title: str, description: str, label: str,
                                        cover_paths: list, out_path: str):
    """Section OG image with up to 3 book covers fanned on the right."""
    img = make_background()
    draw = ImageDraw.Draw(img)

    PAD_X = 80
    PAD_Y = 56
    COVER_AREA_W = 340
    GAP = 60
    text_w = W - PAD_X - COVER_AREA_W - GAP - PAD_X

    # Logo
    add_logo(img, LOGO_PATH, PAD_X, PAD_Y, max_height=36)

    # Measure content to vertically centre in left column
    title_font, title_lines = fit_title_font(title, text_w, 200,
                                              sizes=[80, 68, 56, 48, 40, 32])
    dummy  = Image.new("RGB", (1, 1))
    dd     = ImageDraw.Draw(dummy)
    line_h = dd.textbbox((0, 0), "Ag", font=title_font)[3] + 14

    desc_font  = load_font(26)
    desc_lines = wrap_text(description, desc_font, text_w)[:3] if description else []

    total_h = (len(title_lines) * line_h
               + (20 if desc_lines else 0)
               + len(desc_lines) * 40)
    y = (H - total_h) // 2 + 10

    # Title with gradient
    for line in title_lines:
        grad_layer = gradient_text(PAD_X, y, line, title_font)
        img = Image.alpha_composite(img.convert("RGBA"), grad_layer).convert("RGB")
        draw = ImageDraw.Draw(img)
        y += line_h
    y += 20

    # Description
    for line in desc_lines:
        draw.text((PAD_X, y), line, font=desc_font, fill=DESC_COLOR)
        y += 40

    # Domain
    domain_font = load_font(20)
    draw.text((PAD_X, H - 46), "oursqlfoundation.org", font=domain_font, fill=(100, 116, 139))

    # Book covers — fan layout (up to 3, slightly rotated)
    covers = []
    for cp in cover_paths[:3]:
        if os.path.exists(cp):
            try:
                c = Image.open(cp).convert("RGBA")
                ratio = min(420 / c.height, 220 / c.width)
                c = c.resize((int(c.width * ratio), int(c.height * ratio)), Image.LANCZOS)
                covers.append(c)
            except Exception:
                pass

    if covers:
        import math
        angles   = [8, -4, 0][:len(covers)]
        offsets  = [(-30, 20), (20, -10), (5, 0)][:len(covers)]
        base_x   = W - PAD_X - max(c.width for c in covers) - 20
        base_y   = (H - max(c.height for c in covers)) // 2

        for i, (cover, angle, (ox, oy)) in enumerate(zip(covers, angles, offsets)):
            rotated = cover.rotate(angle, expand=True, resample=Image.BICUBIC)
            cx = base_x + ox
            cy = base_y + oy
            if rotated.mode == "RGBA":
                img_rgba = img.convert("RGBA")
                img_rgba.paste(rotated, (cx, cy), rotated)
                img = img_rgba.convert("RGB")
                draw = ImageDraw.Draw(img)
            else:
                img.paste(rotated, (cx, cy))

    img.save(out_path, "PNG", optimize=True)
    print(f"  ✓ {os.path.relpath(out_path, REPO_ROOT)}")


def collect_section_covers(section_dir: str) -> list:
    """Collect cover images from leaf bundles in a section directory."""
    covers = []
    for bundle in sorted(glob.glob(os.path.join(section_dir, "*", ""))):
        md = os.path.join(bundle.rstrip("/"), "index.md")
        if not os.path.exists(md):
            continue
        post = frontmatter.load(md)
        images = post.get("images", [])
        if images:
            cp = os.path.join(bundle.rstrip("/"), images[0])
            if os.path.exists(cp):
                covers.append(cp)
    return covers


def process_file(md_path: str, label: str = "OurSQL Foundation"):
    """Generate OG image for a single Markdown file and update front matter."""
    post = frontmatter.load(md_path)
    title = str(post.get("title", "")).strip()
    description = str(post.get("description", "")).strip()

    if not title:
        return

    # Output path — mirrors content path under assets/images/og/
    rel = os.path.relpath(md_path, CONTENT_DIR)
    slug = rel.replace(os.sep, "-").replace("_index.md", "").replace(".md", "").strip("-")
    out_filename = f"{slug}-1200x630.png"
    out_path = os.path.join(ASSETS_DIR, out_filename)

    # For section _index.md — try to find covers in the section
    section_dir = os.path.dirname(md_path)
    covers = collect_section_covers(section_dir)
    if covers:
        generate_section_image_with_covers(title, description, label, covers, out_path)
    else:
        generate_image(title, description, label, out_path)

    # Update front matter with Hugo asset path
    hugo_path = f"images/og/{out_filename}"
    if post.get("image") != hugo_path:
        post["image"] = hugo_path
        with open(md_path, "wb") as f:
            frontmatter.dump(post, f)


def main():
    print("OurSQL Foundation — OG image generator\n")

    # Only pages that actually render as HTML:
    # 1. Main resources hub
    # 2. Contribute page
    # 3. Section _index.md files (one per resource type)
    targets = [
        os.path.join(CONTENT_DIR, "resources", "_index.md"),
        os.path.join(CONTENT_DIR, "resources", "contribute.md"),
    ]
    targets += glob.glob(os.path.join(CONTENT_DIR, "resources", "*", "_index.md"))

    processed = 0
    for path in sorted(set(targets)):
        if not os.path.exists(path):
            continue
        process_file(path)
        processed += 1

    # ── Book leaf bundles ─────────────────────────────────────────────────────
    print("\nBooks:")
    book_bundles = glob.glob(os.path.join(CONTENT_DIR, "resources", "books", "*", ""))
    for bundle in sorted(book_bundles):
        process_book(bundle.rstrip("/"))
        processed += 1

    print(f"\nDone — {processed} image(s) generated")


if __name__ == "__main__":
    main()
