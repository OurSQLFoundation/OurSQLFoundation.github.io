---
title: "DBHub"
link: "https://github.com/bytebase/dbhub"
github: "bytebase/dbhub"
description: "A token-efficient Model Context Protocol server from Bytebase for PostgreSQL, MySQL, MariaDB, SQL Server, Oracle, and SQLite — ships with just two tools by default plus opt-in extras."
subcategories:
  - AI & Ecosystem Skills
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Open Source
images:
  - logo.png
---

DBHub is an MCP server built by the Bytebase team that lets MCP clients (Claude Desktop, Claude Code, Cursor, VS Code, and others) explore and query a database through one interface, across PostgreSQL, MySQL, MariaDB, SQL Server, Oracle, and SQLite. To keep context usage low it exposes only two tools by default — `execute_sql` and `search_objects` — with `explain_sql` and `health_check` available as opt-in extras, plus support for custom parameterized tools defined in a `dbhub.toml` config file.

It supports multiple simultaneous database connections via TOML configuration, read-only mode, row limits and query timeouts as guardrails, and SSH tunneling or SSL/TLS for secure access. It can run via `npx @bytebase/dbhub@latest`, a Docker image, a one-click MCP Bundle, or a Claude Code plugin, and includes a built-in web Workbench for running queries outside of an MCP client.

Released under the MIT license, with around 3.7k stars on GitHub.
