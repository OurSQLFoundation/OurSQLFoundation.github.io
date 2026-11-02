---
title: "GORM"
link: "https://gorm.io"
github: "go-gorm/gorm"
description: "A full-featured ORM for Go, with first-class MySQL and MariaDB support through its official `gorm.io/driver/mysql` driver (built on go-sql-driver/mysql), alongside associations, hooks, transactions, auto-migrations, and a SQL builder."
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

GORM is a developer-friendly ORM for Go covering associations (has one, has many, belongs to, many-to-many, polymorphism), hooks for before/after create, save, update and delete, eager loading with `Preload` and `Joins`, transactions and nested transactions with save points, prepared-statement and dry-run modes, batch inserts, a SQL builder with upsert and locking support, composite primary keys, and auto-migrations.

Its official `gorm.io/driver/mysql` driver connects through `go-sql-driver/mysql` and adds MySQL-specific configuration — default string sizing, datetime precision handling (including a flag for pre-5.6 MySQL, which lacks datetime precision), and dialect-specific DDL for `AutoMigrate`. A `DBResolver` plugin on top of the core library adds multiple-database support and read/write splitting.

Maintained by the go-gorm organization as the actively developed successor to the original `jinzhu/gorm`, it's released under the MIT license and has around 39.7k stars on GitHub.
