---
title: "ChartDB"
link: "https://github.com/chartdb/chartdb"
github: "chartdb/chartdb"
description: "An open source, web-based database diagram editor that reverse-engineers a schema from a single query and can export AI-generated DDL scripts for migrating between MySQL, MariaDB, PostgreSQL, SQL Server, and other dialects."
subcategories:
  - Schema Management & Migration
  - Database Management & GUI
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

ChartDB visualizes a database's schema as an interactive diagram: running a single "Smart Query" against the live database retrieves its structure as JSON, which ChartDB then renders as an editable entity-relationship diagram — no stored database password and no account required. Diagrams can be fine-tuned, annotated, and exported, and its AI-driven export feature generates DDL scripts in a target dialect, for example translating a MySQL schema to PostgreSQL or a SQLite schema to MariaDB.

It supports MySQL, MariaDB, PostgreSQL, SQL Server, SQLite (including Cloudflare D1), CockroachDB, and ClickHouse, including provider-specific variants such as Supabase and Timescale. ChartDB is currently in public beta, runs self-hosted (`npm run dev`/`build`) or via the published `ghcr.io/chartdb/chartdb` Docker image, and is released under the GNU Affero General Public License v3.0. A free hosted cloud version is also available at chartdb.io.
