---
title: "dbmate"
link: "https://github.com/amacneil/dbmate"
github: "amacneil/dbmate"
description: "A lightweight, framework-agnostic database migration tool with a standalone CLI, plain SQL migration files, and explicit MySQL and MariaDB support alongside PostgreSQL, SQLite, and ClickHouse."
subcategories:
  - Schema Management & Migration
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Open Source
---

dbmate keeps a database schema in sync across developers and environments using plain `.sql` migration files instead of a language-specific migration DSL, so it works the same way regardless of which language or framework a project uses. It ships as a single static binary (with an npm package as an alternative install path) and reads the database connection from a `DATABASE_URL` environment variable or `.env` file. The README documents MySQL connection strings, including Unix-socket connections, alongside MariaDB, PostgreSQL, SQLite, and ClickHouse.

Released under the MIT license, with around 7.5k stars on GitHub.
