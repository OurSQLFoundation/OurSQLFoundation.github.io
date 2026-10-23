---
title: "jOOQ"
link: "https://www.jooq.org/"
github: "jOOQ/jOOQ"
description: "A Java library that generates a type-safe DSL from your database schema, so SQL — including MySQL- and MariaDB-specific syntax — can be written and checked by the compiler instead of assembled as strings."
subcategories:
  - Connectors & Drivers
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source & Open Core
images:
  - logo.png
---

jOOQ reads an existing database schema and generates Java classes representing its tables, columns, and keys, which are then used to build SQL queries through a fluent, type-safe API — the generated code fails to compile if a query no longer matches the schema. It's developed by Data Geekery GmbH and maintained on GitHub at `jOOQ/jOOQ`.

The jOOQ Open Source Edition is free and dual-licensed under the Apache License 2.0 for use with open-source databases, including MySQL and MariaDB (alongside PostgreSQL, SQLite, and others) — with no license fee, payment, or renewal required for that edition. Separate commercial editions, priced per floating developer workstation per year, add support for proprietary databases such as Oracle and SQL Server plus some commercial-only features, but are not required to use jOOQ against MySQL or MariaDB.
