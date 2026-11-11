---
title: "Reladiff"
link: "https://reladiff.readthedocs.io"
github: "erezsh/reladiff"
description: "A high-performance tool and library for diffing large datasets across databases, including MySQL, by computing hashes inside the database."
subcategories:
  - Testing & Benchmarking
  - Replication & High Availability
compatibility:
  - MySQL
pricing:
  - Open Source
---

Reladiff finds differences between tables, even across different databases, using a divide-and-conquer algorithm based on matching hashes so only changed segments are downloaded. It supports more than a dozen databases, including MySQL, which makes it useful for validating replication and migrations.

It's written in Python and released under the MIT license.
