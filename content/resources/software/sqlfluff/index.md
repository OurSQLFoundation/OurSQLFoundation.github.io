---
title: "SQLFluff"
link: "https://github.com/sqlfluff/sqlfluff"
github: "sqlfluff/sqlfluff"
description: "A modular, open-source SQL linter and auto-formatter with a dedicated MySQL and MariaDB dialect, built to catch style and syntax issues in SQL (including templated SQL used with dbt/Jinja) before it ships."
subcategories:
  - DevOps & Deployment
  - Testing & Benchmarking
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Open Source
images:
  - logo.png
---

SQLFluff parses and lints SQL files against a configurable rule set, flagging formatting and style problems and auto-fixing most of them from the command line. It understands templated SQL written with Jinja or used with dbt, so it can lint queries that aren't valid SQL until the template is rendered — a common case in analytics engineering pipelines.

MySQL and MariaDB are two of its roughly thirty supported dialects, alongside PostgreSQL, SQLite, Snowflake, BigQuery, and others; support for any individual dialect may not be complete. The project is released under the MIT license and has around 10k stars on GitHub.
