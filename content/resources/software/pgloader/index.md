---
title: "pgloader"
link: "https://pgloader.io"
github: "dimitri/pgloader"
description: "A data loading tool for PostgreSQL that can migrate a full MySQL database, including schema and data, in a single command."
subcategories:
  - Schema Management & Migration
  - Replication & High Availability
compatibility:
  - MySQL
pricing:
  - Open Source
---

pgloader loads data into PostgreSQL with the `COPY` command, keeping rejected rows in a separate file instead of aborting the load. For MySQL it can perform a full migration, including table definitions, and handles MySQL-specific details such as `0000-00-00` datestamps.

It's released under the PostgreSQL license. The latest tagged release is from 2022, though the repository received commits in 2026.
