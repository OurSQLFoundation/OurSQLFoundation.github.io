---
title: "innotop"
link: "https://github.com/innotop/innotop"
description: "A real-time, terminal-based \"top\" for MySQL — live views of queries, InnoDB transactions and locks, replication, and server status, across one server or many."
subcategories:
  - Monitoring & Observability
compatibility:
  - MySQL
  - MariaDB
  - Percona Server
  - Group Replication
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

innotop is a "top" clone for MySQL: a command-line monitor that refreshes continuously and shows what the server is doing right now. It has a separate mode for each aspect of a running server, switched with a single keypress — the query list, InnoDB transactions, deadlocks, lock waits, and foreign-key errors; InnoDB buffer pool, I/O, and row operations; master/slave replication and Group Replication member status; open tables, a command summary, user statistics, and raw variables and status — plus a health dashboard with one row per monitored server.

It can watch many servers at once and aggregate across them, is fully customizable (it even has a plugin interface), and can also run non-interactively for pipe-and-filter use in scripts. The manual is embedded in the program itself and is available through `perldoc` and `man`. It's written in Perl, needs only a handful of common modules (DBI, DBD::mysql, Term::ReadKey, and Time::HiRes), and is packaged for Debian, Ubuntu, Gentoo, and FreeBSD.

The tool was originally written by Baron Schwartz in 2006 and remains actively maintained on GitHub — the 1.16.0 release (May 2026) reworked query `EXPLAIN` support and added `EXPLAIN ANALYZE`, following earlier releases that added MySQL 8.0 and 9.x compatibility, SSL, and Group Replication support. Its user-statistics mode also surfaces the table and index statistics added by Percona Server and MariaDB.

It's released under the GPL-2.0 license (the source also offers the Perl Artistic License as an alternative).
