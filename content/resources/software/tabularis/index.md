---
title: "Tabularis"
link: "https://tabularis.dev"
github: "TabularisDB/tabularis"
description: "An open-source desktop SQL workspace with MySQL/MariaDB, PostgreSQL, and SQLite built in, featuring SQL notebooks, a visual query builder, visual EXPLAIN plans, and a built-in MCP server for AI coding agents."
subcategories:
  - Database Management & GUI
  - AI & Ecosystem Skills
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

Tabularis is a desktop SQL client for Windows, macOS, and Linux, built with Tauri. MySQL/MariaDB, PostgreSQL, and SQLite ship as built-in drivers, with more than twenty additional databases — ClickHouse, DuckDB, MongoDB, Redis, SQL Server, Oracle, Cassandra, and others — available as official or community plugins loaded over a JSON-RPC-over-stdio protocol that lets plugins be written in any language.

Beyond a Monaco-based SQL editor, it offers SQL notebooks (SQL and Markdown cells with cross-cell variables and charts), a visual query builder, an interactive ER diagram, a data grid with inline editing, and a visual EXPLAIN view that renders a query plan as a graph. Optional AI features add text-to-SQL using providers such as OpenAI, Anthropic, or a locally run Ollama model, and a built-in MCP server (`tabularis --mcp`) exposes a connected database's schema and query execution to MCP clients like Claude Code, Cursor, and Devin.

Tabularis is released under the Apache License 2.0 and distributed via winget, Homebrew, Snap, Flatpak, AUR, and direct installers for Windows, macOS, and Linux.
