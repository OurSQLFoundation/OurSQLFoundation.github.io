---
title: "AWS Labs MySQL MCP Server"
link: "https://github.com/awslabs/mcp/tree/main/src/mysql-mcp-server"
github: "awslabs/mcp"
description: "An official AWS Labs Model Context Protocol server that turns natural-language requests into MySQL-compatible SQL and runs them against Aurora MySQL, RDS for MySQL/MariaDB, or self-hosted MySQL/MariaDB."
subcategories:
  - AI & Ecosystem Skills
compatibility:
  - MySQL
  - MariaDB
  - RDS MySQL
deployment:
  - Cloud-Native
pricing:
  - Open Source
images:
  - logo.png
---

AWS Labs' MySQL MCP Server is one of the official servers in the `awslabs/mcp` monorepo, letting MCP clients (such as Amazon Q Developer CLI) convert natural-language requests into SQL and run them against Amazon Aurora MySQL, Amazon RDS for MySQL or MariaDB, or a self-hosted MySQL/MariaDB endpoint. It supports three connection modes — the RDS Data API, the direct MySQL wire protocol, and the wire protocol with IAM authentication — and installs via `uvx` as the `awslabs.mysql-mcp-server` package.

Write queries are disabled by default and only enabled with an explicit `--allow_write_query` flag; the README is explicit that this is "a best-effort SQL-text safeguard, not a security boundary" and recommends pairing it with a least-privilege, read-only database user. The parent `awslabs/mcp` repository is released under the Apache 2.0 license.
