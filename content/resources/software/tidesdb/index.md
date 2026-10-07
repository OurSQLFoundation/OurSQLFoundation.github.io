---
title: "TidesDB"
link: "https://tidesdb.com"
github: "tidesdb/tidesdb"
description: "A fast, embeddable transactional key-value storage engine library written in C on an LSM-tree, with TideSQL pluggable storage engines for MySQL and MariaDB."
subcategories:
  - Database Software
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

TidesDB is a transactional key-value storage engine library written in C, built on a log-structured merge-tree (LSM-tree) that it combines with a B-tree. It isn't a full database: it's a library you can build a database on top of, or use directly as a standalone key-value and column store. It provides ACID transactions with MVCC and five isolation levels (including two-phase commit and XA), column families, key-value separation, ordered bidirectional iteration with range-bounded scans and range deletes, TTL, a configurable compression pipeline (Snappy, LZ4, and Zstd), and configurable durability, all aimed at low write and space amplification. It runs on Linux, macOS, Windows, the BSDs, and Solaris/Illumos across x86, ARM, RISC-V, and PowerPC, and has official bindings for Go, Rust, Python, Java, C#, C++, TypeScript, and Lua.

For the MySQL ecosystem, the project also publishes **TideSQL**, pluggable storage engines for [MySQL](https://github.com/tidesdb/tidesql-mysql) and [MariaDB](https://github.com/tidesdb/tidesql) built on TidesDB. A TideSQL table keeps its rows in a TidesDB LSM B+tree instead of InnoDB, and moving a table over is a matter of changing the `ENGINE` clause to `TidesDB`. The MySQL engine supports transactions with optimistic MVCC (readers never block writers, and a write conflict surfaces at `COMMIT` for the application to retry), primary and secondary indexes, foreign keys, generated columns, full-text and spatial indexes, online DDL and backup, row expiry, and data-at-rest encryption, with per-table compression, bloom-filter, isolation, and TTL options set through `ENGINE_ATTRIBUTE`. Its own documentation lists the limits — for example, `VECTOR` columns are stored faithfully but there is no similarity search.

TidesDB is released under the Mozilla Public License 2.0, with permissive licenses for its bundled dependencies, and the TideSQL engines under the GPL-2.0. It is actively developed — the latest release, v10.1.1, came out in October 2026 — and has a community on Discord.
