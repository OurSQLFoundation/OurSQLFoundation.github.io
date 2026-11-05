---
title: "myanon"
link: "https://ppomes.github.io/myanon/"
github: "ppomes/myanon"
description: "A fast anonymizer for MySQL dumps that processes `mysqldump` output as a stream, with deterministic hashing that preserves foreign key relationships."
subcategories:
  - Security
compatibility:
  - MySQL
pricing:
  - Open Source
---

myanon sits in a pipeline after `mysqldump` and rewrites sensitive columns according to a configuration file, with no intermediate storage. Built-in HMAC-SHA256 rules always produce the same output for the same input, so foreign keys stay consistent, and a JSON-aware parser handles fields inside JSON columns.

It's written in C and released under a modified BSD license.
