---
title: "CloudDM"
link: "https://www.cdmgr.com/"
github: "ClouGence/open-cdm"
description: "A free, open-source web console for querying and managing MySQL and other databases as a team, with resource/function-based access control, SQL auditing, data-masking rules, and Git-triggered change (CI/CD) workflows."
subcategories:
  - Security
  - Database Management & GUI
compatibility:
  - MySQL
  - MariaDB
  - TiDB
deployment:
  - Self-Hosted
  - Docker
  - Kubernetes
pricing:
  - Open Source
images:
  - logo.png
---

CloudDM (published on GitHub as `open-cdm`, under the ClouGence organization) is a unified web console for querying and administering MySQL alongside Oracle, MariaDB, PostgreSQL, SQL Server, TiDB, OceanBase, ClickHouse, and several other engines — covering tables, views, indexes, stored procedures, triggers, users, and roles.

Its access-control model separates resource permissions (granted at the instance, database, schema, or table level) from function permissions assigned through roles, and supports permission requests and temporary grants. SQL auditing adds 54 built-in audit rules, configurable security policies, and data-masking, plus pre-execution checks that can warn about or block risky statements. Database changes can be triggered through Git push, webhook, or HTTP call and routed through SQL-audit, permission-ticket, or change-approval workflows, with SSO via OpenLDAP, OIDC, or Windows AD. It's released under the Apache License 2.0 and deploys standalone or as a console/sidecar cluster, via an install package, Docker, or Kubernetes.
