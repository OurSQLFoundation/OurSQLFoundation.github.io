---
title: "db-branch"
link: "https://db-branch.com"
github: "db-branch/db-branch"
description: "Self-hosted, copy-on-write database branching for MySQL and PostgreSQL on ZFS clones — give every pull request, migration test, or AI agent its own disposable copy of a large database in seconds."
subcategories:
  - DevOps & Deployment
  - Testing & Benchmarking
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source & Open Core
images:
  - logo.png
---

db-branch creates instant, copy-on-write clones of a MySQL or PostgreSQL base database using ZFS, so a branch can be created, reset, checkpointed, or deleted in seconds with nothing copied at creation time. A CLI, REST API, web console, and built-in MCP server share one interface, and an optional ProxySQL layer routes connections to the right branch so applications keep a single address. It also supports per-branch major-version upgrades (for example MySQL 8.0 to 8.4) that leave the base and other branches untouched.

The core (this repository) is Apache-2.0 and covers branches, bases, runtimes, clustering, the CLI/API/console, MCP, and monitoring; free modules in the same apt repository add ProxySQL routing and data masking via Greenmask. Paid, closed-source modules (SSO, audit, history, diff, external storage) are self-hosted and unlocked with a license key — there is no hosted or cloud version.
