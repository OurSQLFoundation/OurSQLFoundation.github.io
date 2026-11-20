---
title: "mysh"
link: "https://github.com/atani/mysh"
github: "atani/mysh"
description: "A safer MySQL (and PostgreSQL) command-line client for the AI coding era — it manages connection profiles and SSH tunnels, and automatically masks sensitive query output before it reaches a script, terminal, or AI agent."
subcategories:
  - Database Management & GUI
  - AI & Ecosystem Skills
compatibility:
  - MySQL
pricing:
  - Open Source
images:
  - logo.png
---

mysh wraps MySQL connection profiles, SSH tunnels, and query output in one CLI so tools like Claude Code, Cursor, and plain shell scripts can work against production-like databases without seeing raw sensitive values. When it detects a non-interactive context — a script, a non-TTY session, or its own MCP server — it automatically masks fields configured as sensitive, and requesting raw production output instead requires an interactive TTY confirmation that AI tools and scripts can't bypass. It can delegate to the `mysql` or `mycli` client or connect natively over Go's `database/sql` driver (MySQL 4.x+), and it can import existing connections from DBeaver, Sequel Ace, and MySQL Workbench.

A built-in Model Context Protocol server (`mysh mcp`) exposes `mysh_list_connections`, `mysh_query`, `mysh_tables`, and `mysh_ping` as first-class tools for AI agents, applying the same masking rules and refusing raw output over MCP entirely. It also supports PostgreSQL and Supabase connections through a built-in driver. mysh is written in Go, MIT-licensed, and installable via Homebrew, winget, an MSI/standalone Windows binary, or `go install`.
