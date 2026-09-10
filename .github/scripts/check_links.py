#!/usr/bin/env python3
"""Fail the build on broken local links or missing assets."""
import glob
import html
import os
import re
import sys
import urllib.parse

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.chdir(ROOT)

ATTR = re.compile(r'(?:src|href|poster|data)\s*=\s*["\']([^"\']+)["\']', re.I)
CSSURL = re.compile(r'url\(\s*([^)]+?)\s*\)')
JSPATH = re.compile(r'["\'](assets/[^"\']+)["\']')

SKIP_PREFIX = ("http://", "https://", "mailto:", "tel:", "data:", "//", "#", "javascript:")

errors = []
checked = 0

def check(ref, source):
    global checked
    ref = html.unescape(ref).strip('\'"')
    if not ref or ref.startswith(SKIP_PREFIX):
        return
    path = urllib.parse.unquote(ref.split("?")[0].split("#")[0])
    if not path:
        return
    if path.startswith("/"):
        errors.append(f"{source}: root-relative path '{ref}' breaks on a project Pages subpath")
        return
    checked += 1
    if not os.path.exists(os.path.normpath(path)):
        errors.append(f"{source}: missing '{path}'")

for f in sorted(glob.glob("*.html")):
    text = open(f, encoding="utf-8").read()
    for m in ATTR.findall(text):
        check(m, f)
    for m in CSSURL.findall(text):
        check(m, f)

for f in sorted(glob.glob("*.css")):
    text = open(f, encoding="utf-8").read()
    for m in CSSURL.findall(text):
        check(m, f)

for f in sorted(glob.glob("*.js")):
    text = open(f, encoding="utf-8").read()
    for m in JSPATH.findall(text):
        if "*" in m or "${" in m or m.endswith("/"):
            continue
        check(m, f)

print(f"Checked {checked} local references across HTML, CSS and JS.")
if errors:
    for e in errors:
        print(f"::error::{e}")
    sys.exit(1)
print("No broken local references.")
