---
title: "TiProxy"
link: "https://github.com/pingcap/tiproxy"
description: "A TiDB-native connection proxy built by PingCAP that keeps client connections alive across TiDB server upgrades, restarts, and scaling events, while load-balancing traffic and health-checking TiDB backends."
subcategories:
  - Proxies & Traffic Management
compatibility:
  - TiDB
deployment:
  - Kubernetes
  - Self-Hosted
pricing:
  - Open Source
---

TiProxy sits in front of a TiDB cluster and migrates a backend instance's client connections to other TiDB instances when that instance restarts, shuts down, or is removed during a scale-in, so connections survive maintenance operations instead of being dropped. It also balances load across TiDB backends and runs health checks on them. In the project's local deployment example, clients connect to TiProxy through the standard `mysql` command-line client, the same way they would connect to TiDB directly.

It's deployed alongside TiUP or TiDB Operator, developed by the PingCAP organization under the Apache 2.0 license, and was forked from the Weir proxy project.
