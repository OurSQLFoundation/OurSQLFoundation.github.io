---
title: "Greenmask"
link: "https://greenmask.io/docs/greenmask"
github: "GreenmaskIO/greenmask"
description: "A utility for logical database dumps, anonymization, and synthetic data generation, production-ready for PostgreSQL with MySQL support in beta."
subcategories:
  - Security
  - Testing & Benchmarking
compatibility:
  - MySQL
pricing:
  - Open Source
images:
  - logo.png
---

Greenmask dumps a database, transforms sensitive data on the way through, and restores the result, which is useful for building realistic non-production environments. It's a stateless tool designed as a replacement for `pg_dump`/`pg_restore` and `mysqldump`.

PostgreSQL is its production-ready target, and MySQL support is a work in progress in beta. It's written in Go and released under the Apache 2.0 license.
