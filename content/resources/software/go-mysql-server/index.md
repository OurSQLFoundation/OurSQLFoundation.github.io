---
title: "go-mysql-server"
link: "https://github.com/dolthub/go-mysql-server"
description: "A pure Go, MySQL wire-protocol-compatible SQL query engine that lets any Go program expose its own data as a MySQL server — the engine underneath DoltHub's Dolt."
subcategories:
  - Database Software
compatibility:
  - MySQL
pricing:
  - Open Source
images:
  - logo.png
---

go-mysql-server implements the MySQL wire protocol and a large subset of MySQL's SQL dialect entirely in Go, with no dependency on the MySQL server itself. Developers plug in their own storage backend by implementing a small set of Go interfaces for tables, databases, and indexes, and the engine handles SQL parsing, query planning, and execution on top of it — so any existing MySQL client, driver, or ORM can connect to it unmodified.

It's maintained by DoltHub, the same team behind Dolt, where it serves as Dolt's underlying query engine. It's also used standalone to add a MySQL-compatible SQL interface to custom data sources, or as a lightweight in-memory MySQL server for testing. Released under the Apache 2.0 license.
