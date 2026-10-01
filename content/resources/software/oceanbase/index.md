---
title: "OceanBase"
link: "https://github.com/oceanbase/oceanbase"
github: "oceanbase/oceanbase"
description: "A distributed relational database from Ant Group with a MySQL-compatible mode, built for HTAP workloads at petabyte scale with no single point of failure."
subcategories:
  - Database Software
  - Data Warehouse & Analytics
compatibility:
  - MySQL
deployment:
  - Self-Hosted
  - Kubernetes
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

OceanBase is a distributed relational database originally built by Ant Group to run Alipay's own transaction volume, and later open-sourced. Its MySQL compatibility mode lets existing MySQL applications, drivers, and tools connect with little or no change, while the underlying architecture shards data transparently across nodes using the Paxos protocol for consistency and automatic failover. The same cluster can serve transactional and analytical (HTAP) queries without a separate ETL pipeline into a second analytics system.

It's released under the Apache 2.0 license. Clusters can be run self-managed via RPM packages or an all-in-one installer, in Docker, or on Kubernetes through the official ob-operator; Docker images are published to Docker Hub, Quay, and GHCR. OceanBase reports production use across more than 2,000 organizations in financial services, telecom, and retail, with TPC-C benchmark results in the hundreds of millions of tpmC.
