---
title: "redactsql"
link: "https://github.com/PrzemekMalkowski/redactsql"
description: "A local SQL schema anonymizer for MySQL/MariaDB and PostgreSQL — replaces table, column, index, and constraint names with neutral placeholders while preserving structure, so dumps can be shared safely for debugging or bug reports."
subcategories:
  - Security
  - Schema Management & Migration
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

redactsql anonymizes a SQL schema — tables, columns, indexes, constraints, sequences, and types — replacing anything that could leak proprietary naming or business context with generic placeholders, while keeping foreign-key relationships and overall schema topology intact. That makes it possible to share a real dump for debugging, documentation, or a public bug report without exposing what a company's schema actually says about its product or data. Well-known system schemas (`public`, `pg_catalog`, `mysql`, `sys`, and similar) are left untouched.

It handles MySQL/MariaDB (backtick quoting, engine-specific syntax) and PostgreSQL (sequences, custom types, dollar-quoted strings) dialects, auto-detecting which one it's looking at or accepting an explicit `-dialect` flag. Everything runs locally — nothing is transmitted or stored externally — either through a local web UI at `127.0.0.1:8585` or a CLI that reads files or pipes from stdin, with options like `-remove-fk` to strip foreign keys and `-keep-id` (on by default) to leave `id` columns untouched.
