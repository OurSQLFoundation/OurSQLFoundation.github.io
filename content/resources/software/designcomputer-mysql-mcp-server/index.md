---
title: "MySQL MCP Server (DesignComputer)"
link: "https://github.com/designcomputer/mysql_mcp_server"
github: "designcomputer/mysql_mcp_server"
description: "A Model Context Protocol server that gives AI applications controlled, auditable access to MySQL databases — listing tables as resources, running SQL queries, and sampling schema and data through a configurable, allowlist-guarded interface."
subcategories:
  - AI & Ecosystem Skills
compatibility:
  - MySQL
pricing:
  - Open Source
images:
  - logo.png
---

This MCP server, distributed as the `mysql-mcp-server` package on PyPI, lets MCP clients such as Claude Desktop, Claude Code, and other AI hosts explore and query a MySQL database through a controlled interface rather than a raw connection string. It exposes tables as MCP resources, and tools for executing SQL (`execute_sql`), reading schema information (`get_schema_info`), and sampling table data (`get_table_sample`), alongside prompts for guided database exploration. It supports both stdio and Streamable HTTP (SSE) transports, SSH tunneling for remote databases, and an optional multi-database mode.

Database and table identifiers are checked against an allowlist of safe characters before use, credentials and SSH keys are masked in logs, and the README recommends connecting with a dedicated, minimally privileged MySQL user — it notes the SSE transport has no built-in authentication and should sit behind an authenticating reverse proxy if exposed beyond localhost. The project is MIT-licensed and maintained by Dana K. Williams.
