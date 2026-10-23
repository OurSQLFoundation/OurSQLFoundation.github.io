---
title: "MyRocks"
link: "https://github.com/facebook/mysql-5.6"
description: "A write- and space-optimized MySQL storage engine built on Facebook's RocksDB, designed to use significantly less storage and flash write capacity than InnoDB for the same data."
subcategories:
  - Database Software
compatibility:
  - MySQL
  - MariaDB
  - Percona Server
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

MyRocks was built by Facebook's database engineering team to bring RocksDB — an embeddable, log-structured-merge-tree key-value store originally forked from Google's LevelDB — into MySQL as a storage engine, so that RocksDB's space and write efficiency could be used through ordinary SQL with replication, rather than requiring an application to talk to RocksDB directly. Facebook described it publicly in a 2016 engineering blog post as targeting workloads where InnoDB's B-tree storage uses more flash write capacity and disk space than necessary.

The engine shipped as part of Facebook's own MySQL 5.6 branch (`facebook/mysql-5.6` on GitHub) under the GPLv2 license that MySQL itself uses. It was subsequently picked up by other MySQL-compatible servers: MariaDB Server has included MyRocks as a storage engine since MariaDB 10.2.5 — current MariaDB documentation still covers installing and configuring it — and Percona has distributed it as an installable plugin for Percona Server for MySQL.
