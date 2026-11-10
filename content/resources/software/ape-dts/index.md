---
title: "ApeDTS"
link: "https://github.com/apecloud/ape-dts"
github: "apecloud/ape-dts"
description: "A lightweight Rust binary for snapshot migration, change data capture, and data validation between MySQL, Postgres, Kafka, and analytical engines like ClickHouse, StarRocks, TiDB, and Doris."
subcategories:
  - Replication & High Availability
  - Data Warehouse & Analytics
compatibility:
  - MySQL
  - TiDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

ApeDTS is a standalone data migration and CDC engine built by ApeCloud. It ships as a single ~17 MB Rust binary with no external runtime components or intermediate storage, and is managed through `dtscli`, a local CLI for creating, listing, and stopping tasks.

It covers snapshot migration, continuous (CDC) sync, data validation/correction/review, and in-flight transformation via lightweight Lua scripts, with checkpoint-based recovery and Prometheus-compatible metrics for observability. Validated task paths include `mysql -> mysql`, `mysql -> kafka`, and `mysql -> clickhouse` / `starrocks` / `doris` / `tidb`, alongside equivalent Postgres, MongoDB, and Redis paths. The project is released under the GNU AGPL v3 license.
