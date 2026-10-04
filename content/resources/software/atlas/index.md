---
title: "Atlas"
link: "https://atlasgo.io/"
github: "ariga/atlas"
description: "A schema-as-code tool for inspecting, diffing, and migrating database schemas — MySQL, MariaDB, and TiDB included — with a declarative, Terraform-style planning workflow."
subcategories:
  - Schema Management & Migration
compatibility:
  - MySQL
  - MariaDB
  - TiDB
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source & Open Core
images:
  - logo.png
---

Atlas inspects a live database and represents its schema as code, then plans migrations either declaratively — diffing the current schema against a desired state described in HCL, SQL, or an ORM's models, the way Terraform plans infrastructure changes — or through traditional versioned migration files that it generates and verifies automatically. It can run schema diffs and linting in CI to catch destructive or unsafe changes before they reach production.

The core CLI is Apache 2.0-licensed open source, built and maintained by Ariga. The company also sells Atlas Cloud, a hosted schema registry and migration CI/CD service with Pro and Enterprise tiers layered on top of the open-source core, which is why it carries both an Open Source and an Open Core pricing tag here.
