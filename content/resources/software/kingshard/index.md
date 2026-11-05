---
title: "kingshard"
link: "https://github.com/flike/kingshard"
description: "A high-performance MySQL proxy written in Go, with read/write splitting, hash, range, and date sharding, and backend high availability."
subcategories:
  - Proxies & Traffic Management
  - Sharding & Horizontal Scaling
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

kingshard sits between applications and MySQL to split read and write statements, limit the number of connections to the database, and handle backend failover, and it shards data across multiple nodes by hash, range, or date.

It's released under the Apache 2.0 license.
