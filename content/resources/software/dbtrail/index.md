---
title: DBTrail
link: https://www.dbtrail.com/
github: dbtrail/dbtrail
description: A zero-ETL analytical replica for MySQL — it reads the binlog like a replica, keeps a Parquet copy you query with DuckDB, and adds time travel and row-level undo.
subcategories:
- Data Warehouse & Analytics
- Backup & Recovery
compatibility:
- MySQL
- MariaDB
- Percona Server
- RDS MySQL
- DuckDB
deployment:
- Self-Hosted
- Docker
pricing:
- Open Source
images:
- logo.png
---

DBTrail keeps your MySQL tables as Parquet files you own, a few minutes behind the source, so heavy reports run against the copy instead of your production server. It connects over the replication protocol the way a replica does, so nothing is installed in MySQL — no plugin, agent, or triggers — which is also why Amazon RDS and Aurora work. The copy lives in a local folder, an S3 bucket, or both: the first pass reads your tables, and after that DBTrail folds the binlog into a new snapshot on a schedule you set, from every few minutes to once a day.

You query the copy with DuckDB through a generated `views.sql` that gives you one view per table, and Metabase or any other tool that runs DuckDB can sit in front of it for dashboards. The files are plain Parquet rather than a proprietary format, but reading them directly, without `views.sql`, can miss recent changes — for Spark, Trino, or Athena, a table can be exported to Iceberg instead. An optional MySQL-protocol port, off by default, lets a `mysql` client run read-only SQL on the copy; the statements run in DuckDB, not MySQL.

From the same binlog stream it keeps a history. Every change is stored with its before and after image and is searchable in the web interface, with deletes surfaced first. When a bad `UPDATE` or `DELETE` hits some rows, DBTrail drafts the reversal SQL for just those rows, which you review and run yourself; the same recovery is available from the web interface, the `bintrail recover` command line, or Claude through an MCP server. You can also ask for a row, or a whole table, as it looked at an earlier moment, and `AS OF` queries work over the MySQL port. Row history lasts 48 hours unless you give it an S3 bucket.

The project is upfront about its limits. It is not high availability — your application never points at the copy — and it is not a backup: history starts the day you install it, so keep your physical backups. It is minutes behind, not seconds, and it needs a `ROW` binlog with full row images and tables with primary keys on InnoDB. Some schema changes, such as adding or dropping a column or a `TRUNCATE`, make it read that table again, and that read takes a lock; and before MySQL 9.6, rows removed by a foreign-key cascade never reach the binlog. You run it yourself, including the small MySQL that holds its change index.

It supports MySQL 8.0 and 8.4 and Percona Server (including RDS and Aurora), MariaDB 10.11 and later (tested on 10.11, 11.4, 11.8, and 12.3), and PostgreSQL 14 and later in beta, where the scheduled Parquet copy doesn't exist yet. It runs as a Docker Compose stack — DBTrail, its web interface, and the index — started by a one-line installer, with a guide for running it on Amazon ECS and a demo container for trying time travel without connecting anything of your own.

DBTrail is written in Go, created by [Daniel Guzmán Burgos](/resources/member-directory/people/daniel-guzman-burgos/), who presents it in the [MySQL Time Travel webinar](/community/webinars/mysql-time-travel-row-level-recovery/). It is released under the Apache-2.0 license, free for any use including commercial and production, and is under active development — release v0.100.0 came out in October 2026. Official binaries send metadata-only usage statistics, on by default, which one setting turns off.
