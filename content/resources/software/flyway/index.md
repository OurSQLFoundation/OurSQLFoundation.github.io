---
title: "Flyway"
link: "https://flywaydb.org"
github: "flyway/flyway"
description: "Version-controlled database migrations — Flyway applies versioned, repeatable SQL or Java scripts and tracks what's been applied in a metadata table, so every environment's schema stays in sync."
subcategories:
  - Schema Management & Migration
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source & Open Core
images:
  - logo.png
---

Flyway migrates a database schema by running ordered SQL (or Java-based) migration scripts against it and recording each one in a schema history table, so it always knows exactly what state a given database is in. It's built around six core commands — Migrate, Info, Validate, Baseline, Repair, and Clean — and ships as a standalone CLI, a Docker image, and plugins for Maven and Gradle, alongside official support for MySQL, MariaDB, PostgreSQL, Oracle, SQL Server, and dozens of other engines.

The Community edition is free and open source under the Apache License 2.0. Flyway was originally created by Boxfuse and has been maintained by Redgate since 2019, which also offers paid Teams and Enterprise editions that add features like schema drift detection, undo migrations, and a visual schema designer on top of the open-source core.
