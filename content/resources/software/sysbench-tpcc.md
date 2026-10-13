---
title: "sysbench-tpcc"
link: "https://github.com/Percona-Lab/sysbench-tpcc"
description: "A set of Lua scripts for sysbench that drives a TPC-C-like OLTP workload against MySQL, used to load-test and compare server configurations under realistic contention."
subcategories:
  - Testing & Benchmarking
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

sysbench-tpcc implements the queries and schema from the TPC-C specification as a workload for sysbench 1.0.x, generating the kind of mixed read/write, high-contention OLTP traffic a TPC-C benchmark produces. Its own README is explicit that it is not a certified TPC-C implementation — it skips requirements like keying/think time — and shouldn't be used to produce results for vendor comparisons; it's meant as a realistic, repeatable stress workload for comparing hardware, configuration, or storage-engine changes on the same server.

It's maintained by Percona-Lab under the Apache License 2.0, and is commonly used alongside Percona Server, MySQL, and engines like MyRocks to evaluate how a given tuning or hardware change holds up under sustained contention.
