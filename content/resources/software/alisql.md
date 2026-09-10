---
title: "AliSQL"
link: "https://github.com/alibaba/AliSQL"
description: "Alibaba Cloud's open-source MySQL branch, protocol-compatible with MySQL 8.0 and extended with a DuckDB-backed analytical storage engine, native vector search, and flashback queries."
subcategories:
  - Database Software
  - Data Warehouse & Analytics
compatibility:
  - MySQL
  - DuckDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

AliSQL is the MySQL branch maintained by the Alibaba Cloud Database team, built on MySQL 8.0.44 and fully compatible with the standard MySQL client protocol — existing clients and drivers connect without modification. It adds enterprise features developed for Alibaba's own production scale directly into the server, rather than as external tooling.

The most notable addition is a DuckDB-backed columnar storage engine for analytical queries, reported to run over 200x faster than InnoDB on the same workloads, alongside native vector indexes (HNSW, up to 16,383 dimensions, cosine and Euclidean distance) for AI/embedding workloads, and flashback queries (`AS OF TIMESTAMP`) for reading historical InnoDB state without a separate backup restore. It's licensed GPL-2.0, the same as upstream MySQL.
