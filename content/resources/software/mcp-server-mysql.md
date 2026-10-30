---
title: "mcp-server-mysql (benborla)"
link: "https://github.com/benborla/mcp-server-mysql"
github: "benborla/mcp-server-mysql"
description: "A Model Context Protocol server for MySQL that's read-only by default, with opt-in write operations, multi-database support, per-database permissions, PII redaction, and SSH/TLS-secured remote access."
subcategories:
  - AI & Ecosystem Skills
compatibility:
  - MySQL
pricing:
  - Open Source
---

This MCP server gives LLM clients such as Claude Desktop, Claude Code, and Cursor a controlled way to inspect and query a MySQL database. It defaults to read-only access, with insert, update, and delete operations gated behind separate `ALLOW_INSERT_OPERATION`, `ALLOW_UPDATE_OPERATION`, and `ALLOW_DELETE_OPERATION` environment flags. A multi-database mode lets one server instance expose several databases at once, each with its own read/write permissions, and a built-in PII-redaction feature masks sensitive values in query results.

It supports SSH tunneling for reaching databases behind a bastion host, SSL/TLS (including mutual TLS) for the database connection itself, and a remote mode that serves over HTTP with bearer-token authentication for non-local clients. It runs via `npx @benborla29/mcp-server-mysql` against MySQL 5.7+ (8.0+ recommended) and Node.js 20+, and is also installable through Smithery. Released under the MIT license, with around 2.2k stars on GitHub.
