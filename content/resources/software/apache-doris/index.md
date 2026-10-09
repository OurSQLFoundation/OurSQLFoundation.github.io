---
title: "Apache Doris"
link: "https://doris.apache.org/"
github: "apache/doris"
description: "An open source, real-time analytics and search database built on MPP architecture, speaking the MySQL wire protocol for fast SQL analytics, lakehouse query acceleration, and hybrid search."
subcategories:
  - Data Warehouse & Analytics
  - Database Software
compatibility:
  - MySQL
deployment:
  - Self-Hosted
  - Kubernetes
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

Apache Doris implements the MySQL network protocol, so standard MySQL clients, JDBC/ODBC drivers, and BI tools connect to it the same way they connect to MySQL — only the host, port (9030 by default), and credentials change. On top of that compatibility it runs an MPP query engine built for sub-second interactive analytics at high concurrency, streaming ingestion with incremental transformation, lakehouse query acceleration over open table formats such as Iceberg, Delta Lake, and Hudi, and hybrid search across structured, full-text, and vector data in one SQL engine.

It supports both compute-storage coupled and compute-storage decoupled deployments, with an official Kubernetes Operator for production clusters and Flink, Spark, and Kafka connectors for data integration. Apache Doris graduated from the Apache Incubator to a Top-Level Project in June 2022 and is released under the Apache License 2.0.
