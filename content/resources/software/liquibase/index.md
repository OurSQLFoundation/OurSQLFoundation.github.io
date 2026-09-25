---
title: "Liquibase"
link: "https://www.liquibase.com/"
github: "liquibase/liquibase"
description: "An open-core database schema change management tool that tracks, versions, and automates schema deployments and rollbacks, with built-in support for MySQL and MariaDB."
subcategories:
  - Schema Management & Migration
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source & Open Core
images:
  - logo.png
---

Liquibase tracks database schema changes as an ordered set of "changesets" in XML, YAML, JSON, or SQL, then applies them in the same order across every environment so a database's structure can be versioned, code-reviewed, and rolled back the same way application code is. It ships as a CLI and integrates with Maven, Gradle, Ant, Spring Boot, and CI/CD tools including GitHub Actions.

Liquibase Community is source-available under the Functional Source License (FSL-1.1-ALv2), which converts each release to Apache 2.0 two years after publication; a separate commercial "Liquibase Secure" edition adds drift detection, policy checks, and paid support on top of the same core engine.
