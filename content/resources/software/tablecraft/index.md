---
title: "TableCraft"
link: "https://tablecraft1.dev/"
github: "tranphucbol/table-craft"
description: "A free, open-source desktop database IDE for macOS, Windows, and Linux in the spirit of JetBrains DataGrip, with schema-aware SQL completion, an editable data grid, EXPLAIN-plan trees, and an MCP server for AI coding agents. MySQL, MariaDB, and TiDB ship in the box."
subcategories:
  - Database Management & GUI
  - AI & Ecosystem Skills
compatibility:
  - MySQL
  - MariaDB
  - TiDB
pricing:
  - Open Source
images:
  - logo.png
---

TableCraft is an Electron app covering connections, a database explorer, SQL consoles with schema-aware completion, a result grid, a table data editor, DDL/SQL generation, query history, and EXPLAIN plans. MySQL, MariaDB, and TiDB are bundled in the box alongside SQLite, while PostgreSQL, Oracle, SQL Server, DuckDB, Redis, and etcd load as plugins on first use. It also draws ER diagrams that flag foreign keys a schema never declared, and can import saved connections from DataGrip, TablePro, MySQL Workbench, or Beekeeper Studio.

For AI coding agents, TableCraft runs an MCP server on the local machine — Claude Code, OpenCode, and Cursor can connect with their own token, and each data source starts off, with a choice of "Ask before reads," "Read only," or "Ask before writes" before any query runs; passwords never leave the app. Each connected data source gets its own Electron utility process, so a slow or crashing driver only takes down that one connection. It's released under the GPL-3.0-or-later license, builds from a TypeScript/Electron workspace, and ships signed-less installers for macOS, Windows, and Linux.
