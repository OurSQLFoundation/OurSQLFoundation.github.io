---
title: "Go-MySQL-Driver"
link: "https://github.com/go-sql-driver/mysql"
github: "go-sql-driver/mysql"
description: "A pure Go implementation of the MySQL client protocol for Go's database/sql package — no C bindings, no libmysqlclient dependency."
subcategories:
  - Connectors & Drivers
compatibility:
  - MySQL
  - MariaDB
  - TiDB
  - Percona Server
pricing:
  - Open Source
images:
  - logo.png
---

Go-MySQL-Driver plugs into Go's standard `database/sql` package as a `driver.Driver` implementation, speaking the MySQL wire protocol natively instead of linking against `libmysqlclient`. It supports connections over TCP/IPv4, TCP/IPv6, and Unix domain sockets, automatic reconnection handling, `context.Context` cancellation, secure `LOAD DATA LOCAL INFILE` with file allowlisting, and zlib compression, among other features expected of a production driver.

It's maintained by the go-sql-driver community as one of the most widely used MySQL drivers in the Go ecosystem, with MySQL 8.0+ and MariaDB 10.11+ officially supported by maintainers, TiDB supported directly by PingCAP, and Percona Server and Google Cloud SQL working but outside the maintainers' support scope. It's released under the Mozilla Public License 2.0.
