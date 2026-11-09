---
title: "SOAR"
link: "https://github.com/XiaoMi/soar"
github: "XiaoMi/soar"
description: "A command-line SQL optimizer and rewriter for MySQL-syntax SQL, built on heuristic rules and detailed EXPLAIN interpretation."
subcategories:
  - Testing & Benchmarking
compatibility:
  - MySQL
pricing:
  - Open Source
images:
  - logo.png
---

SOAR (SQL Optimizer And Rewriter) is an automated command-line tool, developed and maintained by Xiaomi's database team, that analyzes and rewrites SQL written in the MySQL dialect. It currently targets MySQL and MySQL-compatible SQL syntax.

Its heuristic rule engine flags and suggests fixes for statement-level issues across SELECT, INSERT, UPDATE, and DELETE queries, including multi-column index opportunities for complex queries. It also gives a detailed, human-readable interpretation of `EXPLAIN` output, can fingerprint, compress, and beautify SQL text, merges multiple `ALTER TABLE` statements against the same table, and lets users define their own rewrite rules. SOAR is written in Go and released under the Apache License 2.0.
