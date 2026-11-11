---
title: "VillageSQL Crypto Extension"
link: "https://github.com/villagesql/vsql-crypto"
description: "A VillageSQL Server extension with pgcrypto-compatible hashing, AES encryption, password hashing, and secure random functions."
subcategories:
  - Security
compatibility:
  - MySQL
pricing:
  - Open Source
images:
  - logo.png
---

vsql-crypto complements MySQL's built-in cryptographic functions in [VillageSQL](/resources/software/villagesql/) with `digest()` and `hmac()` hashing, AES encryption with automatic IV management, PBKDF2 password hashing, and secure random bytes and UUIDs from OpenSSL. Its functions follow pgcrypto, which eases migration from PostgreSQL.

It's an early-stage extension written in C++ and released under GPLv2.
