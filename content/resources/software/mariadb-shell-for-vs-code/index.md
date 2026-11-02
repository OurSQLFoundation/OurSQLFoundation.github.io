---
title: "MariaDB Shell for VS Code"
link: "https://github.com/mariadb-corporation/vscode-extension"
description: "The official MariaDB Corporation extension that brings MariaDB Shell into VS Code — a Connections view, SQL execution from .sql files with MariaDB-aware highlighting, an editable results grid, and GitHub Copilot integration through MariaDB Shell's MCP plugin."
subcategories:
  - Database Management & GUI
  - AI & Ecosystem Skills
compatibility:
  - MariaDB
pricing:
  - Open Source
images:
  - logo.png
---

The extension drives a MariaDB Shell backend through its Model Context Protocol (MCP) plugin, exposing shell functions to the editor. It adds a Connections view for browsing servers, schemas, and database objects; SQL execution straight from `.sql` files with MariaDB-aware syntax highlighting; and an editable results grid, alongside REST Service and REST Daemon management and dump/load tasks.

It also integrates with GitHub Copilot, adding MariaDB-specific chat skills and an MCP server so Copilot can act on a connected MariaDB Shell session. It requires MariaDB Shell 26.10.3 or newer, with at least one connection configured via `mariadb-shell -- mcp setup` — the extension can install a suitable shell automatically if none is found. It's published by MariaDB Corporation under the GPLv2 license.
