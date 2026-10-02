---
title: "Apache ShardingSphere"
link: "https://shardingsphere.apache.org/"
github: "apache/shardingsphere"
description: "A distributed SQL ecosystem that adds data sharding, read/write splitting, encryption, and other enterprise capabilities on top of MySQL and other databases, deployable as an enhanced JDBC driver or as a standalone proxy."
subcategories:
  - Proxies & Traffic Management
  - Database Software
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

ShardingSphere positions itself as "Database Plus": rather than replacing MySQL, it builds a standardized enhancement layer on top of it, adding distributed computing (sharding, read/write splitting, SQL federation), data security (encryption, masking, audit), and traffic control without requiring a new storage engine. It ships two access modes that can be mixed in the same deployment — ShardingSphere-JDBC, a client-side driver that works with any JVM ORM, and ShardingSphere-Proxy, a standalone server that speaks the MySQL wire protocol so any MySQL-compatible client can connect to it directly.

The project became an Apache Software Foundation Top-Level Project in April 2020 and is released under the Apache License 2.0.
