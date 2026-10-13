---
title: "PyMySQL"
link: "https://github.com/PyMySQL/PyMySQL"
description: "A pure-Python MySQL and MariaDB client library implementing the Python Database API (PEP 249) — no C extension, no `libmysqlclient`, just Python."
subcategories:
  - Connectors & Drivers
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Open Source
---

PyMySQL is a pure-Python implementation of the MySQL client protocol, built against PEP 249 (the Python Database API Specification) so it works as a standard DB-API connector: connections and cursors, parameterized queries that keep values separate from SQL text, configurable cursor classes such as one that returns rows as dictionaries, and explicit transaction control since connections default to autocommit off. Because it's pure Python with no compiled extension, it installs anywhere CPython runs, including CPython 3.9 and later and the latest PyPy 3.x releases, without needing MySQL's native client libraries or a build toolchain.

It targets MySQL and MariaDB LTS releases, with optional installable extras adding support for newer authentication methods — `rsa` for MySQL's `sha256_password` and `caching_sha2_password`, and `ed25519` for MariaDB's ed25519 authentication plugin. The project is released under the MIT License and remains actively maintained, with its most recent release (1.2.3) shipping in September 2026.
