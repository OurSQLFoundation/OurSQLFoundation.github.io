---
title: "Testcontainers (MySQL module)"
link: "https://java.testcontainers.org/modules/databases/mysql/"
github: "testcontainers/testcontainers-java"
description: "An open-source library for spinning up throwaway MySQL and MariaDB instances in Docker containers for integration tests, with official modules for Java, Go, Node.js, and Python."
subcategories:
  - Testing & Benchmarking
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

Testcontainers is a library for writing tests that run real dependencies — databases, message brokers, browsers — as disposable Docker containers instead of mocks. Its MySQL module provides a ready-made container class (`MySQLContainer` in Java, `mysql.Run` in Go, `MySqlContainer` in Node.js) that starts a real MySQL server, exposes a JDBC/connection URL, and tears the container down when the test finishes, so integration tests exercise an actual database engine rather than an in-memory stand-in. A sibling MariaDB module follows the same pattern.

The project has official modules maintained for Java (`org.testcontainers:mysql`), Go (`testcontainers-go/modules/mysql`), Node.js (`@testcontainers/mysql`), and Python, each published under the MIT license and installable from the respective language's package registry (Maven Central, Go modules, npm, PyPI). It's commonly used to seed a schema from `/docker-entrypoint-initdb.d/` and run migrations or application code against the containerized instance as part of a CI pipeline.
