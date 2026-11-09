---
title: "mysql (Node.js)"
link: "https://github.com/mysqljs/mysql"
description: "The original pure-JavaScript Node.js driver for MySQL, implementing the client/server protocol directly with no native bindings or compilation step required."
subcategories:
  - Connectors & Drivers
compatibility:
  - MySQL
pricing:
  - Open Source
---

`mysql` is a Node.js driver for MySQL, written entirely in JavaScript so it installs without a native compiler toolchain. It implements the MySQL client/server wire protocol itself, handling the connection handshake, packet framing, and authentication flows.

It supports connections and connection pooling (including pool clusters for working with multiple pools), queries with automatic placeholder escaping, streaming query rows instead of buffering the full result set, transactions, SSL connections, and custom type casting. The project is 100% MIT licensed and published on npm as the `mysql` package, where it remains one of the most widely depended-on MySQL clients in the Node.js ecosystem — it is the package the newer `mysql2` driver was originally forked from to add prepared statements and a faster protocol parser.
