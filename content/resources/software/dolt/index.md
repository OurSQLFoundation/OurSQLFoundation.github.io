---
title: "Dolt"
link: "https://www.dolthub.com/"
github: "dolthub/dolt"
description: "A SQL database that can be branched, merged, cloned, and pushed like a Git repository — `dolt sql-server` speaks the MySQL wire protocol, so existing MySQL clients and drivers connect to it directly."
subcategories:
  - Database Software
compatibility:
  - MySQL
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source & Open Core
images:
  - logo.png
---

Dolt pairs a full SQL engine with Git-style version control: every row and schema change can be diffed, committed, branched, merged, and reverted through either the `dolt` CLI (which mirrors Git's own command set) or SQL system tables, functions, and stored procedures. Because `dolt sql-server` implements the MySQL wire protocol, it works as a drop-in target for the standard MySQL client and most MySQL drivers and ORMs.

Dolt itself is open source under the Apache License 2.0. Its maintainer, DoltHub, also runs hosted offerings on top of it — DoltHub for sharing public and private Dolt databases, DoltLab for running a self-hosted DoltHub, and Hosted Dolt for a managed server — which is why it carries both an Open Source and an Open Core pricing tag here.
