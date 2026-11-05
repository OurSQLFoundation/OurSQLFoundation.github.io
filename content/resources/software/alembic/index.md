---
title: "Alembic"
link: "https://alembic.sqlalchemy.org"
github: "sqlalchemy/alembic"
description: "A database migrations tool for SQLAlchemy, from the author of SQLAlchemy, with a MySQL dialect implementation."
subcategories:
  - Schema Management & Migration
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Open Source
---

Alembic manages schema changes for SQLAlchemy projects: it emits `ALTER` statements to change the structure of tables and other constructs, and it keeps migrations as versioned scripts that can be applied in order. MySQL-specific DDL handling is built in.

It's written in Python and released under the MIT license.
