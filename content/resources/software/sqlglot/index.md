---
title: "SQLGlot"
link: "https://github.com/tobymao/sqlglot"
description: "A no-dependency Python SQL parser, transpiler, optimizer, and query-building engine that converts SQL between 30+ dialects — including an officially maintained MySQL dialect — and can parse, format, analyze, and programmatically build SQL."
subcategories:
  - Schema Management & Migration
compatibility:
  - MySQL
pricing:
  - Open Source
images:
  - logo.png
---

SQLGlot parses SQL into an expression tree that can be traversed, analyzed, and rebuilt programmatically, then regenerates it as valid SQL in any of its 30-plus supported target dialects — useful for migrating queries and DDL between database engines, or for building SQL programmatically without string concatenation. It also formats SQL and flags common syntax errors, such as unbalanced parentheses or misused reserved keywords.

MySQL is one of the dialects the core SQLGlot team maintains as "Official," meaning its bug fixes and feature additions get priority alongside dialects like PostgreSQL, BigQuery, Snowflake, and Trino. The project has no runtime dependencies, is written in Python, is released under the MIT license, and has around 9.7k stars on GitHub.
