---
title: "SchemaHero"
link: "https://schemahero.io/"
github: "schemahero/schemahero"
description: "A Kubernetes Operator for declarative database schema management — define MySQL table schemas as Kubernetes custom resources and let the operator compute and apply the ALTER TABLE statements needed to reconcile the live schema."
subcategories:
  - Schema Management & Migration
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

SchemaHero lets you express a table's schema as a Kubernetes `Table` custom resource instead of hand-written migration scripts. The in-cluster operator watches those resources, compares the desired schema against the live database, and generates the `ALTER TABLE` (or `CREATE TABLE`) statements needed to close the gap — targeting a MySQL instance running inside the cluster or an external one such as a managed RDS database.

Since the 0.9 release, schema changes go through a separate plan-then-apply workflow, so generated SQL can be reviewed before it runs rather than applying automatically. It installs via a `kubectl` plugin distributed through krew, or as an in-cluster operator for the full declarative workflow. The project is Apache 2.0 licensed and was originally built by Replicated.
