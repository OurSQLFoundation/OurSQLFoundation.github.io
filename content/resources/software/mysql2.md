---
title: "mysql2"
link: "https://github.com/sidorares/node-mysql2"
description: "A fast, pure-JavaScript MySQL client for Node.js, built as a near-drop-in replacement for the original `mysql` package with a rewritten wire-protocol parser and support for prepared statements, compression, and the binary log protocol."
subcategories:
  - Connectors & Drivers
compatibility:
  - MySQL
pricing:
  - Open Source
---

mysql2 began as a continuation of the original Node.js `mysql` driver, with its protocol parser rewritten from scratch for better performance, while keeping an API close enough to the classic package that most applications can switch over with minimal changes. It adds features the original never gained, including prepared statements, a promise-based API alongside the callback one, support for the MySQL binary log replication protocol, and the ability to act as a MySQL server for testing or proxying.

Other features include support for non-UTF-8 encodings and extended collation handling, connection pooling, SSL and the newer authentication-switching flows, protocol-level compression, and configurable cursor classes. It has no native bindings, so it installs and runs the same way on Linux, macOS, and Windows. The project is released under the MIT License and is one of the most widely used MySQL clients in the Node.js ecosystem.
