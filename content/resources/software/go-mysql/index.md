---
title: "go-mysql"
link: "https://github.com/go-mysql-org/go-mysql"
description: "A pure Go library for the MySQL network protocol and replication stream, used to build binlog consumers, MySQL-compatible proxies, and sync tools like canal."
subcategories:
  - Connectors & Drivers
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Open Source
images:
  - logo.png
---

go-mysql implements the MySQL client/server wire protocol and binary log replication format directly in Go, with no cgo dependency on `libmysqlclient`. It bundles several building blocks on top of that: a lightweight `client` package for issuing queries, a `driver` package that plugs into Go's `database/sql`, a `replication` package for parsing binlog events as a replica would, a `server` package for implementing MySQL-compatible servers and proxies, and the `canal` package for streaming row-level changes into systems like Elasticsearch or Redis.

It's dual-licensed under MIT and BSD-3-Clause (parts of the replication code are adapted from Vitess), and is maintained by the go-mysql-org community as the successor to the original `siddontang/go-mysql` project. It's a common dependency underneath other Go-based MySQL tooling — including CDC and sync utilities — rather than an end-user application on its own.
