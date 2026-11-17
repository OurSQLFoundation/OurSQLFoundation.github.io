---
title: "asyncmy"
link: "https://github.com/long2ice/asyncmy"
description: "A fast asyncio MySQL and MariaDB driver for Python with a Cython protocol core and an aiomysql-compatible API."
subcategories:
  - Connectors & Drivers
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Open Source
---

asyncmy keeps the API of [aiomysql](/resources/software/aiomysql/) while rewriting the protocol core in Cython. It supports server-side prepared statements, has a built-in connection pool, can read the MySQL replication protocol over asyncio, and is CI-tested on MySQL and MariaDB.

It's released under the Apache 2.0 license.
