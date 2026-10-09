---
title: "Flink CDC"
link: "https://github.com/apache/flink-cdc"
github: "apache/flink-cdc"
description: "A streaming data integration tool built on Apache Flink, with MySQL, TiDB, and Vitess binlog source connectors for full-database sync, schema evolution, and data transformation into warehouses and lakehouses."
subcategories:
  - Replication & High Availability
  - Data Warehouse & Analytics
compatibility:
  - MySQL
  - TiDB
  - Vitess
pricing:
  - Open Source
images:
  - logo.png
---

Flink CDC runs on top of Apache Flink and captures row-level changes from a source database's binlog, streaming them into one or more sinks with exactly-once semantics. It offers three API layers: a no-code YAML Pipeline API for declaring source, sink, routing, and transformation rules and submitting them via the `flink-cdc.sh` CLI, a Flink SQL API for defining CDC sources with SQL DDL, and a DataStream API for Java/Scala pipelines. Built-in features include whole-database and sharded-table synchronization, automatic schema evolution as the source schema changes, and on-the-fly data transformation (projections and filters) during the sync.

Its available source connectors include MySQL, TiDB, Vitess, PostgreSQL, Oracle, SQL Server, MongoDB, OceanBase, and Db2, with pipeline sinks for Doris, StarRocks, Iceberg, Hudi, Paimon, Elasticsearch, and Kafka, among others. It's built on top of Apache Flink and released under the Apache 2.0 license.
