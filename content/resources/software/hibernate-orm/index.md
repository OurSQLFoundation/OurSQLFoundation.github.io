---
title: "Hibernate ORM"
link: "https://hibernate.org/orm/"
github: "hibernate/hibernate-orm"
description: "The de facto standard implementation of Jakarta Persistence for Java, with its own native Session API, tested against MySQL and MariaDB alongside PostgreSQL, Oracle, SQL Server, and other databases."
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

Hibernate ORM is an object/relational mapping library for Java that offers two ways to work with a database: its original native API, built around `SessionFactory` and `Session`, and an implementation of the Jakarta Persistence specification (the successor to Java Persistence/JPA), exposed through `EntityManagerFactory` and `EntityManager`. Entity mappings can be written either as Jakarta Persistence annotations or as XML. Hibernate 7 adds support for JPA 3.2 and introduces Hibernate Data Repositories, an implementation of Jakarta Data.

The project's own test suite runs against MySQL and MariaDB alongside PostgreSQL, Oracle, SQL Server, DB2, SAP HANA, CockroachDB, and the embedded H2, HSQLDB, and Derby engines, so MySQL/MariaDB compatibility is exercised directly in CI rather than left to a community dialect. It's released under the Apache 2.0 license and developed in the `hibernate` GitHub organization, with an active commit history of nearly 30,000 commits.
