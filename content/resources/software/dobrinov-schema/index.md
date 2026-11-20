---
title: "schema"
link: "https://github.com/dobrinov/schema"
github: "dobrinov/schema"
description: "A Rust/WebAssembly CLI and viewer that draws interactive ER diagrams and visual git diffs straight from a MySQL dump, Postgres structure.sql, SQLite schema, or Rails schema.rb — no live database connection needed."
subcategories:
  - Schema Management & Migration
  - AI & Ecosystem Skills
compatibility:
  - MySQL
pricing:
  - Open Source
---

schema reads schema files directly — `mysqldump --no-data` output or hand-written MySQL DDL, Postgres `pg_dump --schema-only`, SQLite's `sqlite3 app.db .schema`, or a Rails `schema.rb` — and renders interactive entity-relationship diagrams without ever connecting to a running database. It can also diff schema versions across git refs (branches, commits, the working tree) and highlight added, removed, and changed tables and columns, with output as SVG, PNG, or a self-contained HTML file. The engine is written in Rust and compiled to WebAssembly so it runs identically from the CLI, in a browser viewer, or embedded in static HTML.

The project ships Claude Code skills (`schema skills install`) that wrap its CLI as agent commands: `/schema-view` to open a diagram for the current working tree, `/schema-diff` to review schema changes between refs and flag risky migrations, `/schema-inspect` to answer schema questions, `/schema-embed` to generate HTML docs with embedded diagrams, and `/schema-design` to sketch and implement schema changes. It's MIT-licensed, distributed via Homebrew or prebuilt binaries for macOS, Linux, and Windows, and was tested against MySQL's sakila, world, and employees sample databases.
