---
title: "Amazon Aurora (MySQL-Compatible Edition)"
link: "https://aws.amazon.com/rds/aurora/"
description: "AWS's MySQL-compatible relational database engine, built on a distributed, log-structured storage layer separate from compute, with Multi-AZ failover, Aurora Serverless capacity scaling, and a Global Database option for cross-region replicas."
subcategories:
  - Managed Databases
cloud-providers:
  - AWS
compliance:
  - HIPAA
  - PCI DSS
  - SOC 2
pricing:
  - Pay-as-you-go
compatibility:
  - MySQL
images:
  - logo.png
---

Amazon Aurora MySQL-Compatible Edition is AWS's relational database engine that speaks the MySQL wire protocol while replacing MySQL's storage layer with Aurora's own distributed, log-structured storage, decoupled from compute and replicated six ways across three Availability Zones. AWS positions it for higher throughput than stock MySQL on comparable hardware, using SysBench-based benchmarks as its point of comparison.

It offers On-Demand (per instance-hour, no upfront commitment) and Reserved Instance pricing, plus an Aurora Serverless option billed per second in Aurora Capacity Units that scales compute automatically with load. Features include Multi-AZ failover to in-cluster Aurora Replicas, a Global Database option for cross-region disaster recovery and low-latency reads, and Parallel Query for running analytical scans against the transactional dataset. Both Aurora editions are covered by multiple AWS compliance programs, including SOC 1/2/3, PCI DSS, and HIPAA eligibility (subject to AWS's shared-responsibility model and a signed BAA for PHI workloads).
