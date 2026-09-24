---
title: "TiDB"
link: "https://github.com/pingcap/tidb"
github: "pingcap/tidb"
description: "An open-source, distributed SQL database with MySQL wire-protocol compatibility, built for horizontal scalability, strong consistency, and hybrid transactional/analytical (HTAP) workloads."
subcategories:
  - Database Software
  - Data Warehouse & Analytics
compatibility:
  - MySQL
  - TiDB
deployment:
  - Self-Hosted
  - Kubernetes
pricing:
  - Open Source
images:
  - logo.png
---

TiDB is a distributed SQL database developed by PingCAP that speaks the MySQL protocol, so most MySQL clients, drivers, and applications can connect to it with little or no code change while gaining horizontal scale-out, strong (Raft-based) consistency, and built-in high availability across nodes. Its architecture separates the SQL layer from a distributed storage layer, and its TiFlash columnar engine lets the same cluster serve real-time analytical queries alongside transactional traffic without a separate ETL pipeline.

It's released under the Apache 2.0 license and written in Go. Clusters can be run self-managed on bare metal or VMs, or deployed and managed on Kubernetes via the official TiDB Operator; PingCAP also offers a separate fully managed TiDB Cloud service for teams that don't want to run it themselves.
