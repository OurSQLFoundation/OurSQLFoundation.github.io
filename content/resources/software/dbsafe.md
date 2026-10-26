---
title: "dbsafe"
link: "https://github.com/nethalo/dbsafe"
description: "A read-only command-line tool that performs pre-execution safety analysis on MySQL DDL and DML statements, classifying each as Safe, Caution, or Dangerous before you run it in production."
subcategories:
  - Schema Management & Migration
  - Testing & Benchmarking
compatibility:
  - MySQL
  - Galera
  - Group Replication
  - RDS MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

dbsafe inspects a DDL or DML statement before it runs and never modifies data itself. For schema changes it detects which MySQL algorithm applies (INSTANT, INPLACE, or COPY) based on the target MySQL version, distinguishing cases like a column rename (INPLACE) from a type change (COPY) by checking the live schema. It estimates impact from table size, row count, and replication lag, generates chunked and batched scripts for large DELETE/UPDATE operations, and can produce idempotent stored-procedure wrappers guarded with `IF NOT EXISTS`. Output can be plain text, JSON, or Markdown, with the structured formats aimed at CI/CD pipelines.

It supports MySQL 8.0.x and 8.4 LTS, Amazon RDS MySQL 8.x, Aurora MySQL 3.x, Percona XtraDB Cluster / Galera 8.x, and Group Replication 8.x; it does not support MySQL 5.7 or MariaDB. On Aurora, which is incompatible with gh-ost's storage-layer replication, dbsafe auto-detects the topology and recommends pt-osc instead. dbsafe is released under the Apache License 2.0 and installs via a `curl | sh` script or by building from source with Go 1.23+.
