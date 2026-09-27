---
title: "MySQL Shell"
link: "https://dev.mysql.com/doc/mysql-shell/en/"
github: "mysql/mysql-shell"
description: "Oracle's official advanced command-line client for MySQL — SQL, JavaScript, and Python modes in one shell, plus an AdminAPI for provisioning and managing InnoDB Cluster, ReplicaSet, and ClusterSet deployments."
subcategories:
  - Database Management & GUI
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Free
  - Open Source
images:
  - logo.png
---

MySQL Shell is a scriptable client that runs in SQL, JavaScript, or Python mode, sitting alongside the classic `mysql` CLI as Oracle's more modern interface to the server. Beyond running queries, it ships dump and load utilities for fast logical backups and migrations, an upgrade-readiness checker for validating a server before a version jump, and an AdminAPI for creating and operating MySQL InnoDB Cluster, InnoDB ReplicaSet, and InnoDB ClusterSet high-availability topologies.

It's part of the MySQL Community distribution, released under GPLv2, and stays in lockstep with server releases — the current line carries full compatibility with MySQL 8.4 and 9.x, with best-effort support for querying and dump/load against older 8.0 and 5.7 servers. A companion "MySQL Shell for VS Code" extension adds a GUI notebook-style interface on top of the same shell.
