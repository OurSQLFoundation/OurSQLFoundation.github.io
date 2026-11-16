---
title: "WarpSQL"
author: "Justin Swanhart"
link: "https://warpsql.blog/"
github: "greenlion/warp"
description: "An open source, OLAP-focused distribution of MySQL built around the WARP column-store engine, with parallel query and, in the latest beta, materialized views refreshed from the binlog."
subcategories:
  - Database Software
  - Data Warehouse & Analytics
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

WarpSQL is a MySQL distribution aimed at analytical (OLAP) performance. Its author, Justin Swanhart, says it is not meant to be a hard fork but a set of modules and small changes that use MySQL's pluggable features. Releases track recent MySQL versions: the current beta, WarpSQL 2.0 beta 4 (November 14, 2026), is built on MySQL 26.10.

The centerpiece is the WARP storage engine, a column store with word-aligned hybrid compressed bitmap indexes, based on a heavily modified FastBit library. It indexes tables automatically to match the queries run against them. Beta 4 pushes parallel hash joins down for all schema types, not only star schemas, and the release notes report TPC-H gains at scale factor 50 and all but four TPC-DS queries finishing in under 30 seconds at scale factor 1.

The same release adds materialized views: `CREATE MATERIALIZED VIEW ... REFRESH SYNCHRONOUS AS SELECT ...`, kept up to date by a daemon plugin that reads the binary log. That feature needed parser changes, so beta 4 ships as a full server tarball. If you only want the engine, you can extract `ha_warp.so` from it and install it as a plugin in a MySQL Community server. Binaries and source are on GitHub, and the project is still in beta.
