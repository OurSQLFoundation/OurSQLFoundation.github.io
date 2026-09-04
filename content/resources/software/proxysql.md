---
description: A high-performance MySQL proxy with query routing, load balancing, and
  failover support.
link: https://www.proxysql.com/
github: sysown/proxysql
subcategories:
- Proxies & Traffic Management
compatibility:
- MySQL
- MariaDB
- Percona Server
deployment:
- Self-Hosted
pricing:
- Open Source
title: ProxySQL
---

ProxySQL sits between applications and MySQL-compatible backends, routing reads
and writes, caching query results, and failing over automatically when a
backend goes down. It is protocol-aware, meaning it can inspect and rewrite
SQL as it passes through, which makes it a common choice for sharding, query
firewalling, and connection multiplexing at scale.

It supports native replication topologies, Group Replication, and Galera, and
integrates with Orchestrator and its own admin interface for runtime
reconfiguration without restarts.
