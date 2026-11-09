---
title: "mysql (Rust)"
link: "https://github.com/blackbeam/rust-mysql-simple"
description: "A pure-Rust, dual-licensed (MIT/Apache-2.0) synchronous MySQL database driver and connection pool — the blocking counterpart to the same author's mysql_async crate."
subcategories: ["Connectors & Drivers"]
compatibility: ["MySQL"]
pricing: ["Open Source"]
---

The `mysql` crate (repository name `rust-mysql-simple`) is a MySQL client library written entirely in Rust, offering a connection pool plus support for both the text protocol (simple queries and text result sets) and the binary protocol (prepared statements and binary result sets), including named parameters, a per-connection statement cache, and multi-result-set support.

It runs on macOS, Windows, and Linux; supports TLS via either the `native-tls` or `rustls` backends; handles MySQL packets larger than 2^24 bytes; and supports Unix sockets, Windows named pipes, custom `LOCAL INFILE` handlers, and the `mysql_native_password`, `caching_sha2_password`, and (opt-in) `mysql_clear_password` auth plugins.

It shares its wire-protocol implementation with [`mysql_async`](/resources/software/mysql-async-rust/), the same author's Tokio-based asynchronous driver, for blocking (synchronous) use cases.
