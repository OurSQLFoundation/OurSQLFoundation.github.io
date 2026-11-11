---
title: "DuckDB × MySQL Day: Eight Talks, One Question"
description: "Eight talks at DuckDB × MySQL Day on November 17 read like one long argument: can DuckDB finally make analytics on MySQL boring? A walk through the agenda, from three ways to bring a duck inside MySQL to an independent benchmark."
date: 2026-11-11
tags:
- Announcement
author: "Maria Nesterova"
author_page: "/resources/member-directory/maria-nesterova"
image: "cover.jpg"
hero_image: false
---

For about twenty years people have been asking the same thing about MySQL: *can I please just run my reports on it?* And for about twenty years the honest answer was "sort of, but you will regret it on a big table".

On November 17 we are running [DuckDB × MySQL Day](/events/duckdb-mysql-day/). It's a free online conference: one day, eight talks. The agenda was not random. If you read it top to bottom it is basically one long argument.

Short version: DuckDB might be the first thing in a long time that could make analytics on MySQL boring. Boring would be good. Whether it gets there is exactly what this day is for.

## Why DuckDB, why now
DuckDB is an embedded columnar analytical database. It runs inside your process, reads Parquet like it is native, and it is *fast* on aggregations over millions of rows, on a laptop. A bit like SQLite, but for analytics.

InnoDB takes a different approach. It's a row-oriented transactional storage engine, optimized for reliable reads and writes under concurrent workloads. It can handle analytical queries too, but large scans and aggregations are not what its architecture was primarily designed for.

The old story: copy data to a separate warehouse, maintain an ETL pipeline, the pipeline breaks on Friday evening. The new idea: a columnar engine small and good enough to sit *next to* MySQL, or even inside it. People call it HTAP. I am a little suspicious of buzzwords, but this one is now getting real code behind it.

## The opening: twenty years of bolting things on
Vadim Tkachenko opens with **"Twenty Years of Bolting Analytics onto MySQL: Will DuckDB Finally Make It HTAP?"**. Vadim personally benchmarked a lot of these attempts, and before we get excited we need to remember what already failed, and why. Note the question mark in the title. He is not promising anything.

## Three ways to bring a duck inside
This is the part I find most interesting. Three talks in a row show three different ways to get DuckDB working inside the MySQL world:

- **Zongzhi Chen**: "When MySQL meets DuckDB: Best practices for columnar engines on MySQL". Zongzhi works on AliSQL, Alibaba Cloud's open source MySQL branch that already integrates DuckDB as a native analytical storage engine. So not theory, more "we did it, here is what hurts".

- **Dominic Preuss** (VillageSQL): "Implementing DuckDB inside MySQL as a VillageSQL extension". VillageSQL is a MySQL-based server built around its own extension framework, and this talk shows DuckDB packaged as one of those extensions.

- **Roman Nozdrin** (MariaDB): "When the Sea Lion Learns to Quack: DuckDB as a MariaDB Storage Engine". (Best title of the day, I think.) Pluggable storage engines are the classic MySQL/MariaDB way to bring in a new way of storing and reading data.

Different integration architectures, different trade-offs. Each one raises practical questions. How does analytical data stay consistent with transactional data? What happens at transaction boundaries? How much overhead does the integration add? And who maintains it two years from now? Please watch all three, not only the one from your favorite vendor.

## Or keep the duck next door
Not everybody wants a new engine inside the production server. Fair. Two talks take a different angle:

- **Daniel Guzmán Burgos** (dbtrail): "MySQL analytical replication with DuckDB and Parquet files". Stream MySQL changes into an analytical pipeline backed by DuckDB and Parquet, so heavy analytical queries run outside the primary. Reporting stays largely isolated from the transactional workload, though replication still brings its own operational overhead and data freshness trade-offs. Daniel builds time-travel for MySQL, so he knows the binlog very, very well.

- **René Cannaò** (ProxySQL): "ProxySQL Welcomes DuckDB". ProxySQL is known for routing database traffic, but this integration does something different: it embeds DuckDB directly into the proxy process. That opens up a way to run analytical SQL through an access layer you may already have, without a separate DuckDB server. I really like this one. It's the kind of idea that looks obvious only after somebody built it.

If "new storage engine in production" makes you nervous (it should, a little), these two are a good place to start the conversation.

## And then: does it actually work?
The last two talks are the reality check, and honestly the ones I would send to my team first.

**Peter Zaitsev** gives "DuckDB for MySQL Old Timers". It's for you if you know EXPLAIN by heart but never touched a columnar database: what changes in the mental model, what will surprise you, where to start.

**Evgeniy Patlan** closes with "Duck Hunt: An Independent Benchmark of DuckDB-Powered MySQL". The word *independent* is important. Every project on the agenda has a reason to look good. A benchmark from outside keeps everyone honest, including ourselves. I don't know the results yet. Genuinely curious.

## Why a foundation does this
AliSQL, VillageSQL, MariaDB, dbtrail, ProxySQL, Percona: in normal life these projects compete for the same users and present at their own events. You would need five conferences to see the whole picture.

Being vendor-neutral means we can put them on one stage for one day and let *you* compare. We are not going to pick a winner before the speakers show their results, and honestly not after either. That is the whole point of OurSQL Foundation, really: make sure the ecosystem has the full picture.

## Join us
It's free and online, starting 09:00 EST / 15:00 CET on November 17. [Register here](/events/duckdb-mysql-day/) to get the schedule and link by email. If you have questions for the speakers, bring them to our [Slack](https://join.slack.com/t/oursqlfoundation/shared_invite/zt-480k6h62a-t0HalCPwvXUC_lpd4aNylA).
