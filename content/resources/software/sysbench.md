---
title: "sysbench"
link: "https://github.com/akopytov/sysbench"
description: "A scriptable, multi-threaded benchmark tool based on LuaJIT — the de facto standard for OLTP-style load testing and CPU/memory/file-IO benchmarking of MySQL servers."
subcategories:
  - Testing & Benchmarking
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

sysbench bundles a set of `oltp_*.lua` workloads that drive realistic transactional load against a MySQL server, alongside standalone CPU, memory, thread-scheduler, and file-IO benchmarks that don't need a database at all. It reports throughput and latency percentiles/histograms and can sustain hundreds of millions of tracked events with low overhead, and new workloads can be written as plain Lua scripts.

Written by Alexey Kopytov and released under the GPL-2.0 license, it's distributed as binary packages for Debian/Ubuntu, RHEL/CentOS, Fedora, and Arch Linux via packagecloud, plus Homebrew on macOS. It's one of the most widely used tools for MySQL hardware sizing, configuration tuning, and regression testing.
