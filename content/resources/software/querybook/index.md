---
title: "Querybook"
link: "https://github.com/pinterest/querybook"
github: "pinterest/querybook"
description: "A notebook-style Big Data IDE from Pinterest for discovering, querying, and sharing analyses, with MySQL among its built-in query engines alongside Presto, Hive, and others."
subcategories:
  - Data Warehouse & Analytics
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

Querybook combines a DataHub-style metadata catalog with a notebook interface where SQL cells, charts, and written analysis can be mixed on the same page and shared with a team. Its "Query Engines" support list includes MySQL, Presto, Hive, Druid, Snowflake, BigQuery, SQLite, and PostgreSQL, with MySQL also usable as the backing store for Querybook's own results and metadata. It runs self-hosted via Docker — the README's quick-start has Docker as the only prerequisite, with `make` bringing up the stack locally.

Released by Pinterest under the Apache License 2.0, with around 2.3k stars on GitHub.
