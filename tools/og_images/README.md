# OG Image Generator

Generates 1200×630 social sharing images for OurSQL Foundation resource pages.

## Setup

```bash
cd tools/og_images
pip install -r requirements.txt
```

## Usage

```bash
python tools/og_images/generate.py
```

Generates images for:
- `content/resources/_index.md` (hub page)
- `content/resources/contribute.md`
- `content/resources/*/` (all section `_index.md` files)
- `content/resources/*/*.md` (all individual resources)

Images are saved to `assets/images/og/` and the `image` field is written into each file's front matter automatically. Hugo's `head.html` reads `image` from front matter and uses it for `og:image` and `twitter:image`.

## Requirements

- Python 3.10+
- Pillow, python-frontmatter, PyYAML (see `requirements.txt`)
- Inter or Arial font installed on the system
