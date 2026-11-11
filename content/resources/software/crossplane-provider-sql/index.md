---
title: "Crossplane Provider for SQL"
link: "https://marketplace.upbound.io/providers/crossplane-contrib/provider-sql/"
github: "crossplane-contrib/provider-sql"
description: "A Crossplane provider that manages MySQL, PostgreSQL, and SQL Server databases, users, and grants as Kubernetes resources."
subcategories:
  - DevOps & Deployment
compatibility:
  - MySQL
deployment:
  - Kubernetes
pricing:
  - Open Source
images:
  - logo.png
---

provider-sql manages schemas and access on existing relational database servers from Kubernetes. For MySQL it provides `Database`, `Grant`, and `User` resources, and it can be combined with cloud providers to create a server and its schema in one composite resource. It reconciles every 10 minutes to limit load on managed databases.

It's released under the Apache 2.0 license.
