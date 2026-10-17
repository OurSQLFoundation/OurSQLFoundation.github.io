---
title: "Drizzle ORM"
link: "https://github.com/drizzle-team/drizzle-orm"
github: "drizzle-team/drizzle-orm"
description: "A headless TypeScript ORM for Node.js and the edge — a thin, SQL-like query builder with full type inference, zero dependencies, and native support for MySQL, PostgreSQL, and SQLite."
subcategories:
  - Connectors & Drivers
compatibility:
  - MySQL
pricing:
  - Open Source
images:
  - logo.png
---

Drizzle ORM is a lightweight (about 7.4kB minified and gzipped) TypeScript ORM whose query API intentionally mirrors SQL itself, rather than hiding it behind a separate abstraction, so query output stays predictable. It runs in Node.js, Bun, Deno, Cloudflare Workers, and other edge runtimes, with no native dependencies to compile.

It connects to MySQL through drivers such as `mysql2`, generates and runs schema migrations through its companion `drizzle-kit` CLI, and lists serverless MySQL platforms like PlanetScale among its supported targets. The project is released under the Apache-2.0 license and has around 36k stars on GitHub.
