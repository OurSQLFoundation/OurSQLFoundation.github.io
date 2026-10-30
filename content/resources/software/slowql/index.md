---
title: "SlowQL"
link: "https://github.com/slowql/slowql"
github: "slowql/slowql"
description: "An offline, Rust-built static analyzer for SQL files and application code, with MySQL-aware rules for SQL injection, missing indexes, unbounded queries, and compliance issues, run from the CLI or CI with no database connection."
subcategories:
  - Security
  - Testing & Benchmarking
compatibility:
  - MySQL
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

SlowQL scans `.sql` files and application source code for SQL-related security, performance, reliability, cost, and compliance problems without connecting to a database. It's dialect-aware across 14 database engines, including MySQL, with 107 dialect-specific rules and 175 universal ones out of 282+ total, and it automatically classifies scanned files as application code, migrations, tests, seeds, framework internals, or documentation so rules are filtered by context.

Findings are split into three confidence levels — `proven` (structurally verified), `contextual` (accurate given schema/usage context), and `advisory` (style hints) — so a CI gate can run in `proven` mode while a manual code review adds the other two. It installs from source with Cargo or runs via a published Docker image, and integrates with CI through a GitHub Actions output format and a configurable failure threshold. SlowQL is licensed under AGPL-3.0.
