---
title: "GreatSQL"
link: "https://github.com/GreatSQL/GreatSQL"
github: "GreatSQL/GreatSQL"
description: "A MySQL branch built on top of Percona Server for MySQL, adding high-availability, parallel-query, and security features aimed at financial-grade workloads."
subcategories:
  - Database Software
compatibility:
  - MySQL
  - Percona Server
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

GreatSQL is a MySQL branch built on top of Percona Server for MySQL (itself based on MySQL), aiming for drop-in syntax compatibility with both while adding its own set of enhancements: improvements to Group Replication (geographic tags, arbitrator nodes, faster single-primary failover and leader election), a parallel query ("Rapid") engine, parallel `LOAD DATA`, non-blocking DDL, and NUMA-aware thread scheduling. It also adds security features such as encrypted logical and clone backups, SQL/data auditing, and InnoDB encryption with the Chinese SM cryptographic algorithms, which it markets toward financial-grade deployments.

It's released under GPLv2, maintained as a community-driven project (a Gitee "GVP" project) with packages for CentOS/RHEL, openEuler, Anolis, UOS, Kylin, and other distributions including LoongArch, alongside a Docker build image and source builds.
