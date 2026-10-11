---
title: "Maxwell's Daemon"
link: "https://github.com/zendesk/maxwell"
description: "A change data capture application that reads MySQL's binary log and writes each row-level change as JSON to Kafka, Kinesis, or other streaming platforms."
subcategories:
  - Replication & High Availability
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

Maxwell's Daemon connects to a MySQL server the way a replica would and turns binary log events into JSON messages, one per row change, published to a configurable target — Kafka and Kinesis are the primary, best-supported producers. Typical uses include feeding ETL pipelines, building or expiring caches, driving search-index updates, audit logging, and loosely coupling services off a single source of truth without having them query the database directly.

It's built and maintained by Zendesk, released under the Apache License 2.0, and has shipped a steady stream of releases (v1.46.0 as of September 2026) adding support for newer MySQL and MariaDB point releases. The project is widely deployed as a lighter-weight alternative to Debezium or Canal when all that's needed is a binlog-to-JSON bridge rather than a full Kafka Connect platform.
