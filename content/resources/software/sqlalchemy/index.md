---
title: "SQLAlchemy"
link: "https://github.com/sqlalchemy/sqlalchemy"
github: "sqlalchemy/sqlalchemy"
description: "The Python SQL toolkit and Object Relational Mapper, with a dedicated MySQL dialect for connecting through drivers such as mysqlclient and PyMySQL."
subcategories:
  - Connectors & Drivers
compatibility:
  - MySQL
pricing:
  - Open Source
images:
  - logo.png
---

SQLAlchemy gives Python applications two layers on top of a database: Core, a SQL expression language and schema/connection toolkit, and the ORM, which maps Python classes to tables on top of Core. Both layers work against MySQL through SQLAlchemy's own `mysql` dialect, which sits in the project's `dialects/` package alongside its PostgreSQL, Oracle, SQL Server, and SQLite dialects and talks to the database through a separate DBAPI driver (such as `mysqlclient` or `PyMySQL`) rather than connecting directly.

The project is released under the MIT license and is maintained on GitHub with a long-running, active commit history (over 18,000 commits as of 2026).
