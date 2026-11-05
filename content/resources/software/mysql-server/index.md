---
title: "MySQL Server"
link: "https://www.mysql.com"
github: "mysql/mysql-server"
description: "The original open-source relational database, developed by the MySQL team at Oracle, with the InnoDB transactional storage engine, built-in replication, and InnoDB Cluster for high availability."
subcategories:
  - Database Software
  - Replication & High Availability
compatibility:
  - MySQL
  - Group Replication
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

MySQL Server is the database at the center of this ecosystem: the engine that MariaDB, Percona Server, and many of the other projects in this directory were forked from, extend, or stay wire-compatible with. It uses InnoDB as its default transactional storage engine and covers the features expected of a modern relational database, including common table expressions, window functions, a native JSON type, and a `VECTOR` type.

Replication options range from classic asynchronous and semi-synchronous replication to Group Replication, which underpins InnoDB Cluster together with MySQL Shell and MySQL Router. The Community Edition is released under GPLv2 and developed by Oracle, with source published on GitHub, and Oracle sells a commercial Enterprise Edition alongside it.
