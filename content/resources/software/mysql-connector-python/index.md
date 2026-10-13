---
title: "MySQL Connector/Python"
link: "https://dev.mysql.com/doc/connector-python/en/"
github: "mysql/mysql-connector-python"
description: "Oracle's official MySQL driver for Python — implements the MySQL client/server protocol in pure Python, with an optional C extension for speed, supporting both the classic DB API v2.0 (PEP 249) interface and the X DevAPI for the Document Store."
subcategories:
  - Connectors & Drivers
compatibility:
  - MySQL
pricing:
  - Free
  - Open Source
images:
  - logo.png
---

MySQL Connector/Python lets Python applications talk to MySQL without any MySQL client libraries or compilation step — the protocol itself is implemented directly in Python, with a C extension available as a drop-in performance upgrade once `mysqlclient`-style native dependencies are acceptable. Beyond classic cursor-based DB API access, it ships the X DevAPI, a document-store CRUD interface over the X Protocol for applications that want to mix relational and document-style access to the same server.

It's developed by Oracle's MySQL team in the `mysql` GitHub organization, currently at version 26.7.0, and released under GPLv2 with the Universal FOSS Exception, Version 1.0 — the same dual-licensing model Oracle applies across the MySQL connector family (Connector/J, Connector/C++, Connector/NET).
