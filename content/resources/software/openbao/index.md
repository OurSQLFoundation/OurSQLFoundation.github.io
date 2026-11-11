---
title: "OpenBao"
link: "https://openbao.org"
github: "openbao/openbao"
description: "A community fork of HashiCorp Vault for managing secrets, with a database secrets engine that issues dynamic MySQL credentials."
subcategories:
  - Security
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
  - Docker
  - Kubernetes
pricing:
  - Open Source
images:
  - logo.png
---

OpenBao stores, manages, and distributes secrets such as database credentials. Its dynamic secrets feature generates short-lived credentials on demand, and the built-in MySQL plugin creates and revokes MySQL users so applications never hold long-lived passwords.

It's released under the Mozilla Public License 2.0.
