---
title: "Confluent Cloud MySQL CDC Source Connector"
link: "https://docs.confluent.io/cloud/current/connectors/cc-mysql-source-cdc-v2-debezium/cc-mysql-source-cdc-v2-debezium.html"
description: "A fully managed Debezium-based connector on Confluent Cloud that snapshots MySQL tables and then streams every row-level change into Apache Kafka topics."
subcategories:
  - Migration & Replication SaaS
cloud-providers:
  - Multi-Cloud
pricing:
  - Pay-as-you-go
compatibility:
  - MySQL
images:
  - logo.png
---

The MySQL CDC Source V2 (Debezium) connector runs the Debezium engine as a fully managed service inside Confluent Cloud. It takes an initial snapshot of existing data and then reads the binary log to stream every insert, update, and delete into Kafka, with one topic per table.

It supports incremental snapshots that can be paused, resumed, filtered by table regular expressions, or limited with SQL predicates, and writes records as Avro, JSON Schema, Protobuf, or schemaless JSON. The V2 connector supports MySQL 8.0 and replaces the original V1 connector, which has reached end of life. Private networking for managed connectors needs to be set up in advance.
