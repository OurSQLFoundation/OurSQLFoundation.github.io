---
title: "WeScale"
link: "https://github.com/wesql/wescale"
description: "An open-source MySQL database proxy forked from Vitess — adds transparent read-write splitting, non-blocking declarative DDL, and connection scaling for application developers."
subcategories:
  - Proxies & Traffic Management
compatibility:
  - MySQL
deployment:
  - Self-Hosted
  - Docker
  - Kubernetes
pricing:
  - Open Source
---

WeScale sits between an application and MySQL to take on cross-cutting concerns that don't belong in the database itself: routing reads to replicas and writes to the primary, running schema changes as non-blocking declarative DDL, and scaling up the number of logical client connections a single MySQL instance can serve. It ships with a Prometheus/Grafana dashboard for monitoring the proxy and the cluster behind it.

Built by ApeCloud as a fork of the Vitess project, it targets a simpler single-proxy deployment model aimed at application developers, rather than the full sharded-topology setup Vitess is usually run with. It's written in Go, tested against MySQL 5.7 and 8.0, and released under the Apache 2.0 license; it can be run directly, via Docker, or deployed to Kubernetes through the KubeBlocks operator.
