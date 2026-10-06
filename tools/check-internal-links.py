#!/usr/bin/env python3
"""Fail if any internal link in the built site points at a page that doesn't exist.

Usage:  hugo --minify && python3 tools/check-internal-links.py [public]

Checks every href in the generated HTML plus the <loc> URLs in the sitemap
(relative and absolute oursqlfoundation.org links alike).
"""
import collections
import os
import re
import sys
import urllib.parse

ROOT = sys.argv[1] if len(sys.argv) > 1 else "public"
HOSTS = ("oursqlfoundation.org",)


def exists(path):
    cand = os.path.join(ROOT, urllib.parse.unquote(path).lstrip("/"))
    return os.path.isfile(cand) or os.path.isfile(os.path.join(cand, "index.html"))


def normalize(href):
    m = re.match(r"^https?://(?:www\.)?([^/]+)(/.*)?$", href)
    if m:
        return (m.group(2) or "/") if m.group(1) in HOSTS else None
    return href if href.startswith("/") and not href.startswith("//") else None


broken = collections.defaultdict(set)
checked = 0
for dirpath, _, files in os.walk(ROOT):
    for name in files:
        if not name.endswith((".html", ".xml")):
            continue
        path = os.path.join(dirpath, name)
        text = open(path, encoding="utf-8", errors="ignore").read()
        refs = re.findall(r'href="?([^"\s>]+)', text)
        if name.endswith(".xml"):
            refs += re.findall(r"<loc>([^<]+)</loc>", text)
        for raw in refs:
            href = normalize(raw.split("#")[0].split("?")[0])
            if href:
                checked += 1
                if not exists(href):
                    broken[href].add(os.path.relpath(path, ROOT))

print(f"links checked: {checked} | distinct broken: {len(broken)}")
for href, pages in sorted(broken.items()):
    print(f"  {href}  <- {len(pages)} page(s), e.g. {sorted(pages)[0]}")
sys.exit(1 if broken else 0)
