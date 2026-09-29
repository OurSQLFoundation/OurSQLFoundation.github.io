---
title: "MOCO"
link: "https://github.com/cybozu-go/moco"
description: "A Kubernetes operator that manages MySQL clusters using GTID-based, loss-less semi-synchronous replication — deployment, automatic failover, backups, and point-in-time recovery, without group replication."
subcategories:
  - DevOps & Deployment
compatibility:
  - MySQL
deployment:
  - Kubernetes
pricing:
  - Open Source
images:
  - logo.png
---

MOCO deliberately avoids MySQL group replication, which it considers to have too many operational limitations, and instead orchestrates clusters of one to five standard MySQL instances with GTID-based semi-synchronous replication. It allows writes only to a single primary at a time, configures loss-less replication with enough replicas to make writes safe, detects and excludes replicas with errant transactions, and can switch the primary quickly on failure or restart. It also manages backups, point-in-time recovery, and MySQL version upgrades.

Built and maintained by Cybozu, MOCO is released under the Apache-2.0 license and currently supports MySQL 8.0.28 and newer on Kubernetes 1.33 through 1.35.
