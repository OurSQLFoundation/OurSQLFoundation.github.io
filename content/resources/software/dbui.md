---
title: "dbui"
link: "https://github.com/KenanBek/dbui"
description: "A terminal UI (TUI) database client for MySQL, PostgreSQL, and SQLite, written in Go, for browsing schemas and tables and running ad hoc SQL queries without leaving the terminal."
subcategories:
  - Database Management & GUI
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

dbui is a terminal database client built in Go with the tview library. It connects to multiple data sources and instances at once, lists schemas and tables, previews table contents, and runs custom SQL queries against a selected table or schema, with status/warning/error messaging, full-screen and focus modes, and mouse support. It runs on macOS, Linux, and Windows.

It can be installed via Homebrew (`brew tap kenanbek/dbui && brew install dbui`), `go install github.com/kenanbek/dbui@latest`, `.deb`/`.rpm` packages from its releases page, or built from source. dbui is released under the Apache License 2.0.
