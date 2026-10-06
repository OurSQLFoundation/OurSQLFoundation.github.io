---
title: "Diesel"
link: "https://diesel.rs/"
github: "diesel-rs/diesel"
description: "A safe, extensible Rust ORM and query builder with compile-time query verification and a dedicated MySQL/MariaDB backend, alongside PostgreSQL and SQLite."
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

Diesel generates a type-safe Rust representation of a database schema at compile time, so many invalid queries — wrong column types, missing joins, selecting a column that doesn't exist — fail to compile instead of surfacing as runtime errors. Its query builder supports joins, subqueries, and raw-SQL escape hatches, while the `diesel_cli` tool manages schema migrations and keeps the generated schema file in sync.

The MySQL/MariaDB backend is enabled through the `mysql` Cargo feature flag, alongside separate flags for the `postgres` and `sqlite` backends. Diesel is dual-licensed under the MIT and Apache 2.0 licenses and is one of the most widely used database toolkits in the Rust ecosystem.
