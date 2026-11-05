---
title: "mariadb-operator"
link: "https://github.com/mariadb-operator/mariadb-operator"
description: "A Kubernetes operator that declaratively manages MariaDB through CRDs, covering replication and Galera topologies, MaxScale, physical and logical backups, and point-in-time recovery."
subcategories:
  - DevOps & Deployment
  - Replication & High Availability
compatibility:
  - MariaDB
  - Galera
deployment:
  - Kubernetes
pricing:
  - Open Source
images:
  - logo.png
---

mariadb-operator runs MariaDB on Kubernetes from custom resources rather than imperative commands. It provisions standalone servers as well as highly available topologies built on asynchronous replication, Galera synchronous multi-master, or multi-cluster replication for multi-region deployments, disaster recovery, and blue-green upgrades, and it can deploy MaxScale as the proxy that load-balances requests and handles failover and switchover.

Backups can be physical (based on mariadb-backup and `VolumeSnapshots`) or logical (based on mariadb-dump), stored in S3-compatible storage, Azure Blob Storage, or PVCs, and binary log archiving enables point-in-time recovery. The operator also handles cluster-aware rolling updates, TLS certificate rotation, and Prometheus metrics. It's released under the MIT license.
