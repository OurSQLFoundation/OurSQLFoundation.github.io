---
title: "SeaORM"
link: "https://github.com/SeaQL/sea-orm"
github: "SeaQL/sea-orm"
description: "An async & dynamic relational ORM for Rust, with MySQL and MariaDB support built in alongside PostgreSQL and SQLite, plus a CLI for generating entities and running migrations."
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

SeaORM is an async ORM for Rust built on top of `sqlx`, with entity modeling, a fluent query builder, relation loading, and a `sea-orm-migration` crate for schema migrations. Its `Cargo.toml` exposes dedicated `sqlx-mysql` and `backend-mysql` feature flags, plus a `mariadb-use-returning` flag for MariaDB's `RETURNING` support, alongside the equivalent PostgreSQL and SQLite backends — so MySQL/MariaDB are first-class targets, not an afterthought. A companion `sea-orm-cli` generates entities from an existing database schema.

The project is dual-licensed under the Apache License 2.0 and the MIT license, maintained by the SeaQL organization, and has around 9.9k stars on GitHub.
