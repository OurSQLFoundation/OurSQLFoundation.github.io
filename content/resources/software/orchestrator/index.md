---
title: "orchestrator"
link: "https://github.com/ProxySQL/orchestrator"
description: "A MySQL high availability and replication management tool for topology discovery, refactoring, and automated recovery, with a CLI, HTTP API, and web UI, now maintained by ProxySQL as the continuation of the archived openark/orchestrator project."
subcategories:
  - Replication & High Availability
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

orchestrator maps out a MySQL replication topology automatically, refreshing it continuously as replicas are added, removed, or re-pointed, and exposes that map through a CLI, an HTTP API, and a web UI so operators can see the full picture of a fleet's replication state at a glance. It detects common failure scenarios and can drive automated recovery and topology refactoring, rather than requiring every change to be scripted and run by hand.

It's released under the Apache 2.0 license. The original project, authored by Shlomi Noach (`openark/orchestrator`), was archived in February 2025, and in 2026 ProxySQL took over its maintenance and development in `ProxySQL/orchestrator`, which is open to contributions and has added PostgreSQL support. Percona keeps a separate fork (`percona/orchestrator`) mainly for its own use: Percona Operator for MySQL relies on Orchestrator to manage asynchronous topologies, and Percona says it has never been the upstream maintainer.
