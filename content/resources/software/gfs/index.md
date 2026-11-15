---
title: "GFS"
link: "https://gfs.guepard.run"
github: "Guepard-Corp/gfs"
description: "Git For database Systems — an open-source CLI that brings Git-style commit, branch, checkout, and diff operations to MySQL, PostgreSQL, and SQLite databases, with an MCP server for AI coding agents."
subcategories:
  - Schema Management & Migration
  - AI & Ecosystem Skills
compatibility:
  - MySQL
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

GFS (Git For database Systems) brings Git-style version control to databases: commit, branch, checkout, and diff schema and data the way Git does for source code. It runs isolated database containers through Docker so an agent or developer can experiment on a branch without touching the primary database, then merge back only the changes that work. Supported databases are MySQL (8.0–8.1), PostgreSQL (13–18), and SQLite.

The project includes an MCP server so AI coding agents — Claude Code, Cursor, Cline, and Windsurf — can create snapshots, roll back a bad migration, and run import/export/query operations without hand-written SQL wrappers. GFS is open source under the MIT license, built by Guepard, Inc.
