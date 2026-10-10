---
title: "sqlc"
link: "https://github.com/sqlc-dev/sqlc"
github: "sqlc-dev/sqlc"
description: "A command-line compiler that generates fully type-safe code directly from plain SQL — you write the queries, sqlc generates the Go, Kotlin, Python, or TypeScript interfaces to call them, for MySQL, PostgreSQL, and SQLite."
subcategories:
  - Connectors & Drivers
compatibility:
  - MySQL
pricing:
  - Open Source
images:
  - logo.png
---

sqlc inverts the usual ORM workflow: instead of describing a schema through model classes and letting a library generate SQL, you write ordinary SQL queries and point sqlc at them alongside your schema. It parses and type-checks the SQL at build time, then generates idiomatic, fully type-safe code to call those exact queries, catching a typo'd column or a type mismatch before the code ever runs rather than at query time in production.

Code generation for Go, Kotlin, Python, and TypeScript ships as separate plugins alongside the core compiler, and additional languages can be added through the community plugin system. The project is released under the MIT license, is maintained by sqlc-dev (Riza, Inc.), and has around 18k stars on GitHub.
