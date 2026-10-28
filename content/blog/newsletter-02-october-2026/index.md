---
title: "Newsletter #2: What Happened in October 2026"
description: "October was a busy month: All Things Open in Raleigh, two new series (MySQL in Practice and People Behind MySQL), and our first big event, DuckDB × MySQL Day on November 17. Plus the MOCO maintainers' reply, a Singles Day story, and a webinar next Tuesday."
date: 2026-10-28
tags:
- Newsletter
author: "Maria Nesterova"
author_page: "/resources/member-directory/maria-nesterova"
hero_image: false
---

Hi there,

October was a busy month. We took part in All Things Open in Raleigh, launched two new series, MySQL in Practice and People Behind MySQL, and announced our first big event. More on all of that below.

In this issue:

- DuckDB × MySQL Day: our first conference, Nov 17
- A terabyte, four attempts, and one RESET MASTER
- "MySQL is still the backbone": Zongzhi Chen
- Next Tuesday, Nov 3: Beyond the Proxy webinar

## Announcing: DuckDB × MySQL Day

**Nov 17 · Online · Free**

MySQL runs the transactions. Analytics has always meant another system bolted on the side. Our first conference asks what changes when a fast columnar engine sits right next to your MySQL data.

It's one afternoon (in Europe) with five talks from the people building it:

- **Vadim Tkachenko**, OurSQL Foundation: twenty years of bolting analytics onto MySQL. Will DuckDB finally make it HTAP?
- **Zongzhi Chen**, Alibaba: best practices for columnar engines on MySQL
- **Dominic Preuss**, VillageSQL: DuckDB inside MySQL as an extension
- **Roman Nozdrin**, MariaDB: DuckDB as a MariaDB storage engine
- **Daniel Guzmán Burgos**, dbtrail: analytical replication with DuckDB and Parquet

**10:00 AM–12:30 PM ET · 16:00–18:30 CET**

[Save your free spot →](/events/duckdb-mysql-day/)

## Case study: Four attempts and one RESET MASTER

Ivinco moved a terabyte of production MySQL into Kubernetes with the MOCO operator. The first three attempts rolled back. The cause the first time was hardcoded IPs, and the next two failed because storage buckled under real load. The fourth attempt worked.

Then it got strange. Every normal pod restart killed a replica, four times out of four, and each rebuild took 6–8 hours. The culprit was a passwordless `root@localhost` inherited from the old donor server. Because of it, the first restart after a clone quietly ran `RESET MASTER` on a live database. Eugene Dimov explains how three sensible design decisions added up to one very bad day.

Then we did something we'd like to make normal: we asked the MOCO maintainers at Cybozu to respond. They did, point by point, in public, including where they think they got it wrong.

[Read the case study and maintainers' reply (14 min) →](/blog/four-attempts-one-reset-master/)

*Have a production story like this? We publish them in MySQL in Practice. Hit reply and tell us about it.*

## Interview: "MySQL is still the backbone"

On November 11, Singles Day turns Alibaba's MySQL fleet into the world's most extreme load test. Zongzhi Chen has spent more than ten years in MySQL source code. He was a core engineer on PolarDB's first release and sits on our founding board.

We talked about:

- why China runs on MySQL, from Taobao's core transactions to the shopping cart
- the hot-row patch that took a test workload from about 200 to about 31,000 TPS
- why he thinks AI agents, not humans, will soon be your database's main users, and what MySQL must change before agents pick the next default

[Read the interview →](/blog/zongzhi-chen-interview/)

*You can hear more from Zongzhi on November 17 at DuckDB × MySQL Day.*

## Next Tuesday: webinar

**[Beyond the Proxy: The Expanding ProxySQL Ecosystem](/community/webinars/beyond-the-proxy-proxysql-ecosystem/)** — Nov 3 · [René Cannaò](/resources/member-directory/people/rene-cannao/) (CEO) & [Alkin Tezuysal](/resources/member-directory/people/alkin-tezuysal/) (Chief Strategy Officer), ProxySQL

ProxySQL has grown well beyond a proxy. René and Alkin cover:

- MySQL and PostgreSQL support
- the move toward DuckDB
- deeper cloud integration
- where Orchestrator and dbdeployer fit in

They tie it together through real operational problems, not a feature list. It's a good warm-up for DuckDB Day.

**November 3 · 10:00 AM ET · 16:00 CET**

[Register →](https://us06web.zoom.us/webinar/register/WN_X82k7xu-STmLLTln6NjTHw)

---

That's issue #2. If something here sparked a question, or you have a story the community should hear, just hit reply.

Maria Nesterova
Managing Director, OurSQL Foundation

**P.S.** Two dates for your calendar: **Nov 3**, the ProxySQL webinar ([register](https://us06web.zoom.us/webinar/register/WN_X82k7xu-STmLLTln6NjTHw)), and **Nov 17**, DuckDB × MySQL Day ([save your spot](/events/duckdb-mysql-day/)). Questions for the speakers? Bring them to our [Slack](https://join.slack.com/t/oursqlfoundation/shared_invite/zt-480k6h62a-t0HalCPwvXUC_lpd4aNylA).

*Know someone running MySQL in production? Share this post — they can subscribe to future issues at the bottom of any page on [oursqlfoundation.org](https://oursqlfoundation.org).*
