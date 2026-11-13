---
title: "DearSQL"
link: "https://dearsql.dev/"
github: "dunkbing/dearsql"
description: "A cross-platform native database client built with Dear ImGui, covering MySQL, MariaDB, PostgreSQL, SQL Server, SQLite, and more from one binary that also runs as a terminal client, a language server, and an MCP server for coding agents."
subcategories:
  - Database Management & GUI
  - AI & Ecosystem Skills
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Free
images:
  - logo.png
---

DearSQL ships a schema browser, an editable data grid, a SQL editor with completion and syntax checks, charts, and a JSON view, running natively on macOS (Metal), Linux (GTK4 + OpenGL), and Windows (DirectX 11). Its query-plan analysis (EXPLAIN/ANALYZE) flags full scans, repeated scans, large sorts, and bad estimates, and the same binary doubles as a terminal client (`--tui`), an MCP server (`--mcp`) for tools like Claude Code and Codex, and a language server (`--lsp`) for SQL completion and hover in editors.

For coding agents, DearSQL exposes saved connections as read-only-by-default tools — schema search, table description, query execution with paging, index review, and schema diffing — with any write requiring explicit approval. It's released under the Functional Source License 1.1 (Apache 2.0 Future License), a source-available license under which each release converts to Apache 2.0 two years after publication.
