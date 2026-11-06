---
title: "sqlit"
link: "https://github.com/Maxteabag/sqlit"
description: "A keyboard-driven terminal UI for MySQL, MariaDB, and 25+ other database engines — modeled on lazygit — with Docker container auto-discovery, SSH tunnels, and OS-keyring credential storage."
subcategories:
  - Database Management & GUI
compatibility:
  - MySQL
  - MariaDB
  - DuckDB
pricing:
  - Open Source
images:
  - logo.png
---

sqlit is a Python terminal UI (TUI) for browsing and querying databases without leaving the shell, built around the same keyboard-driven, panel-based workflow as lazygit. It connects to MySQL and MariaDB alongside PostgreSQL, SQL Server, SQLite, Oracle, DuckDB, ClickHouse, Snowflake, BigQuery, and a long list of other engines, and can auto-detect database containers running under Docker or browse databases reachable through the Azure, AWS, and GCP CLIs.

Features include a saved-connection manager with credentials stored in the OS keyring, SSH tunnel support, Vim-style modal editing, autocomplete for tables/columns/procedures, searchable per-connection query history, and fuzzy filtering across result sets with millions of rows. It installs via `pipx install sqlit-tui` (also packaged for the Arch User Repository and Nix), requires Python 3.10+, and is released under the MIT license by an independent developer (GitHub handle Maxteabag).
