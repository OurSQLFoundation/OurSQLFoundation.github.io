---
title: "VillageSQL MCP Extension"
link: "https://github.com/villagesql/vsql-mcp"
description: "A VillageSQL Server extension that exposes a database as a Model Context Protocol server, so AI agents can discover the schema and run governed queries."
subcategories:
  - AI & Ecosystem Skills
compatibility:
  - MySQL
pricing:
  - Open Source
images:
  - logo.png
---

vsql-mcp runs an MCP server inside [VillageSQL](/resources/software/villagesql/) on a background worker, served over the Streamable HTTP transport, so MCP clients such as Claude Code and IDE agents can connect without a sidecar process. Access is governed through database users, such as a SELECT-only account for agents.

It's an early preview extension released under GPLv2.
