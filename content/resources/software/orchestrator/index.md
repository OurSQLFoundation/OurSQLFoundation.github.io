---
title: "orchestrator"
link: "https://github.com/percona/orchestrator"
github: "percona/orchestrator"
description: "A MySQL replication topology discovery, visualization, and failure-detection tool with a CLI, HTTP API, and web UI, maintained by Percona as a continuation of the original openark/orchestrator project."
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

It's released under the Apache 2.0 license. The original project (`openark/orchestrator`) was archived in February 2025; this fork is maintained by Percona, which uses it as the failure-detection and recovery engine inside its Kubernetes Operators for MySQL, and continues to accept fixes.
