---
title: "Yearning"
link: "https://next.yearning.io"
github: "cookieY/Yearning"
description: "A self-hosted SQL audit platform for MySQL with ticket-based approval workflows, automated syntax checks, rollback statement generation, and query auditing."
subcategories:
  - Security
  - Schema Management & Migration
compatibility:
  - MySQL
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

Yearning puts a review step between developers and production databases. SQL changes go through audit tickets with approval workflows and automated syntax checks against configurable rules, and rollback statements are generated for DDL and DML changes. Query auditing restricts which data sources people can reach, anonymizes sensitive fields, and keeps a record of what was run, with role-based access control across the platform. An AI assistant adds SQL optimization suggestions and text-to-SQL conversion.

It's written in Go, runs as a single binary or a Docker container, and is released under the AGPLv3.
