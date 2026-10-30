---
title: "Oxyde ORM"
link: "https://github.com/mr-fatalyst/oxyde"
github: "mr-fatalyst/oxyde"
description: "A type-safe, async Python ORM with a Django-style API (Model.objects.filter()) and Pydantic v2 models, backed by a Rust core for SQL generation and execution against MySQL, PostgreSQL, and SQLite."
subcategories:
  - Connectors & Drivers
compatibility:
  - MySQL
pricing:
  - Open Source
images:
  - logo.png
---

Oxyde is a Python ORM, installed with `pip install oxyde`, that pairs a Django-flavored query API with Pydantic v2 models for validation and serialization, while delegating SQL generation and execution to a native Rust core for speed. It targets async-first code built on `asyncio`, and ships Django-style `makemigrations`/`migrate` commands plus a `transaction.atomic()` context manager with savepoint support, against MySQL, PostgreSQL, or SQLite.

The project's own README documents a microbenchmark (ops/sec, higher is better) against several popular Python ORMs — Tortoise, Piccolo, Django's ORM, SQLAlchemy, SQLModel, and Peewee — on all three supported databases; full methodology is published in its docs. Oxyde is MIT-licensed and, per its README, is a young project under active development whose API may still change between minor versions.
