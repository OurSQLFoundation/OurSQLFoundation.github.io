---
title: "Prisma ORM"
link: "https://www.prisma.io/orm"
github: "prisma/prisma"
description: "A TypeScript and JavaScript ORM for Node.js, with a MySQL connector that covers self-hosted MySQL 5.6 and newer, MariaDB 10.0 and newer, and managed platforms such as PlanetScale."
subcategories:
  - Connectors & Drivers
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Open Source
images:
  - logo.png
---

Prisma ORM models a database schema in its own Prisma Schema Language, then generates a type-safe query client from it for use in Node.js and TypeScript applications. Its `mysql` connector is shared by both MySQL and MariaDB — official docs list support for MySQL 5.6, 5.7, 8.0, and 8.4, and MariaDB 10.0 and newer — and self-hosted connections use a standard `mysql://` connection string with full support for Prisma Migrate. Managed MySQL-compatible platforms such as PlanetScale are also listed among its supported targets, connecting through a dedicated driver adapter.

The ORM itself is released under the Apache 2.0 license and is free to use; Prisma the company separately sells hosted products (such as Prisma Postgres and Prisma Accelerate) that sit outside the open-source ORM.
