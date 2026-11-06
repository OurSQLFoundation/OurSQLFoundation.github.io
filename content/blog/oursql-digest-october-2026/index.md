---
title: "OurSQL Digest: What Matters in MySQL Ecosystem in October 2026"
description: "An opinionated monthly digest of what mattered in the MySQL ecosystem in October 2026: MySQL 26.10, vector search benchmarks, DuckDB next to InnoDB, AI agents, the end of MySQL Galera Cluster, and what's coming up."
date: 2026-11-06
tags:
- Digest
author: "Maria Nesterova"
author_page: "/resources/member-directory/maria-nesterova"
image: "cover.jpg"
hero_image: false
digest:
  issue: 1
  period: "October 2026"
  tagline: "Curated MySQL ecosystem news, once a month"
  sections:
    - {id: "mysql-26-10", label: "MySQL 26.10"}
    - {id: "vector-search", label: "Vector search"}
    - {id: "duckdb", label: "DuckDB next to InnoDB"}
    - {id: "ai-agents", label: "AI agents"}
    - {id: "galera-and-upgrades", label: "Galera & upgrades"}
    - {id: "mariadb-regression", label: "MariaDB regression"}
    - {id: "fosdem-m-ecosystem", label: "FOSDEM devroom"}
    - {id: "releases", label: "Releases"}
    - {id: "coming-up", label: "Coming up"}
---

So, we decided to try something new: a monthly digest. Curated MySQL ecosystem news of the month in one place, so you can understand what is going on in MySQL from one email, without reading twenty blogs and three Slack channels.

In October our team, with our AI friend, went through something like 150 posts, release notes, announcements, and social media posts. Below is what we think mattered most, and why it matters. Of course this is our choice, so it is opinionated. If you think we missed something or got something wrong, tell us in OurSQL Foundation [Slack](https://join.slack.com/t/oursqlfoundation/shared_invite/zt-480k6h62a-t0HalCPwvXUC_lpd4aNylA), we really like when people do this.

## MySQL 26.10 put the REST API inside the server, and Community Edition got new Enterprise-level features {#mysql-26-10}

On October 20 Oracle released [MySQL 26.10](https://blogs.oracle.com/mysql/mysql-26-10-is-here), together with [9.7.4 LTS and 8.4.13 LTS](https://blogs.oracle.com/mysql/mysql-october-2026-ga-releases-now-available). It is only the second release with the new [calendar versioning](https://blogs.oracle.com/mysql/a-more-predictable-mysql-release-model-calendar-versions-lts-and-innovation) (26.7 = July 2026, 26.10 = October 2026, easy, when you get used to it).

Big headline is the [MySQL REST Service component](https://blogs.oracle.com/mysql/introducing-the-mysql-rest-service-component-now-generally-available), GA now. MRS runs inside mysqld and serves HTTPS endpoints, no separate MySQL Router anymore. And there is already a [Part 2 tutorial](https://blogs.oracle.com/mysql/getting-started-with-the-mysql-rest-service-component) where you build orders API right from the server.

Then the part most users will care about, what moved to **Community Edition**:

- [**Health Monitor**](https://dev.mysql.com/worklog/task/?id=17324), before it was HeatWave-only. Full metrics on Linux, basic on macOS, nothing for Windows yet (sorry, Windows people).

- **WebAuthn** authentication, so FIDO keys for passwordless and multifactor login.

- More control for **JSON Duality Views**: UPDATE/NO UPDATE per column, and CHECK/NO CHECK for which fields go into ETAG ([Tarang Ranpara explains it here](https://blogs.oracle.com/mysql/mysql-json-duality-views-now-with-granular-write-and-etag-controls)).

In July MySQL 26.7 already brought thread pool to Community Server, first time ever (Percona benchmarked it, [Part 1](https://www.percona.com/blog/thread-pool-in-percona-server-and-mysql-part-1/) and [Part 2](https://www.percona.com/blog/thread-pool-in-percona-server-and-mysql-part-2/)). So it looks like a pattern now: things which used to be the reason to buy Enterprise, slowly come down to everybody.

It is also good to see Oracle opening the process around MySQL. In June they published a [governance document and announced a Steering Committee](https://blogs.oracle.com/mysql/the-next-phase-of-mysql-community-engagement-accelerating-participation-and-collaboration), there are regular public discussions with the community (#6 was on October 22), and the MySQL Contributor Summit is happening this week, November 4–5. Community people welcomed it, and Umesh Shastry added a useful reminder: [for production DBAs it all starts at the bug tracker](https://ushastry.blogspot.com/2026/10/mysql-community-engagement-starts-at.html).

{{% why-it-matters %}}
Regular releases with new things for Community Edition, a new Workbench, and a more open process, together it is a good signal for everyone who builds on MySQL. Next thing to watch: more contributions from people outside Oracle after the Contributor Summit.
{{% /why-it-matters %}}

## Vector search: a month of benchmarks across the MySQL family {#vector-search}

Every member of the family has a vector story now. In October these stories finally met each other, and it was quite fun to watch.

Alkin Tezuysal started with [How fast is vector search inside MySQL?](https://askdba.net/how-fast-is-vector-search-inside-mysql/): MyVector HNSW plugin on stock MySQL, three versions, and MariaDB's native vector type as reference. Two days later lefred answered with [Vector Search in MySQL vs MariaDB: Look Beyond QPS](https://lefred.be/content/vector-search-in-mysql-vs-mariadb-look-beyond-qps/). His point: throughput means nothing if you don't compare at the same recall, and on this basis MariaDB is ahead. All in public, with numbers anybody can reproduce, and nobody got offended (we hope so).

The tools for such arguments came the same month, nice timing. VillageSQL released [vector-dev-bench](https://villagesql.com/blog/vector-dev-bench/), it measures recall, build time and reads during writes on MySQL, MariaDB and PostgreSQL, in minutes on a laptop. [VillageSQL Server 0.0.7](https://villagesql.com/blog/007/) (yes, with James Bond theme) prepared the server side for custom indexes, nearest-neighbor included. And Percona, as their [Percona Live keynote recap](https://percona.community/blog/2026/09/25/open-mysql-fips-build-percona-live/) says, is bringing vector search into Percona Server for MySQL.

Meanwhile MariaDB is quietly winning where developers start their projects. [Laravel 13 supports MariaDB Vector natively](https://mariadb.org/laravel-13-now-supports-mariadb-vector-natively/) now, and one of community contributors already wrote ["ask the docs" RAG tutorial](https://mariadb.org/build-an-ask-the-docs-app-with-laravel-13-and-mariadb-vector/), with video. [Bagisto](https://mariadb.org/bagisto-mariadb-vector-semantic-search/) showed semantic search for e-commerce using MariaDB Vector.

The most honest quote of the month came from Kaj Arnö, in [The Register](https://www.theregister.com/databases/2026/09/24/for-mariadb-llms-are-the-new-search-engines-to-win-over/5298104) on September 24: MariaDB vector search is ready, but AI coding assistants almost never recommend it. So LLMs are the new search engine you need to win. Good question for all of us, not only for MariaDB.

And right at the end of the month, Evgeniy Patlan from Percona published the biggest comparison so far: [Benchmarking Vector Search in Six Database Engines](https://www.percona.com/blog/benchmarking-vector-search-in-six-database-engines/). MariaDB 11.8 and 12.3, AliSQL, PostgreSQL with pgvector, Valkey and Percona Search for MongoDB, all with the same 990,000 OpenAI embeddings and throughput measured at fixed recall levels. At recall 0.99 MariaDB 12.3 (277 QPS), Valkey (264) and pgvector (210) were close. Time to build the index was from 1.9 minutes to 6.7 hours, depending on engine.

{{% why-it-matters %}}
This race will not be won with one QPS chart. Benchmarks honest about recall, framework defaults like Laravel, and what coding agent suggests when somebody types "add semantic search", this is where it will be decided. For MySQL itself the answer still goes through plugins and forks, and the forks are busy.
{{% /why-it-matters %}}

## DuckDB is moving in next to InnoDB {#duckdb}

If October had one technology for MySQL analytics, it was DuckDB. Not as separate warehouse somewhere far away, but as a second engine, sitting right next to InnoDB.

- **dbtrail** shipped [Engine Routing](https://blog.dbtrail.com/innodb-and-duckdb-same-connection/): same tables, served through InnoDB *and* DuckDB on one connection, and every SELECT goes to the faster engine. Daniel Guzmán Burgos reports 10× faster reports, no migration, no query changes. Village News noticed [the caveat](https://villagesql-blog.ghost.io/village-news-mysql-news-events-21-october-2026/): point lookups got slower. Before this came the [Analytical Replica](https://blog.dbtrail.com/introducing-mysql-analytical-replica/) (Parquet copies of your tables, fed from binlog) and Percona's [benchmark of offloading reports](https://www.percona.com/blog/dbtrail-analytical-reports-on-your-mysql-data-without-running-them-on-mysql-part-1/).

- **AliSQL 8.0.44-3** [added Binlog Realtime Replication and moved to DuckDB 1.5.2](https://alisql.net/docs/releases/alisql-8-0-44-3/).

- **MariaDB 13.0**, Stable since September 17, ships with DuckDB storage engine. Foundation's [October newsletter](https://mariadb.org/mariadb-foundation-newsletter-october-2026/) mentions a Magento report which became 63× faster.

- And pluggable engines in general are having their moment: [TideSQL 5](https://mariadb.org/tidesql-5-and-mariadb-the-tides-are-moving-fast/) for MariaDB, [TidesDB for MySQL 9 and 26](https://tidesdb.com/articles/tidesdb-now-available-for-mysql/), and a [4,000-warehouse TPC-C fight with InnoDB](https://tidesdb.com/articles/large-tpc-c-analysis-with-mysql-v26-7-0-on-innodb-and-tidesdb/).

Not everybody is convinced. When AliSQL's DuckDB engine was on Hacker News earlier this year ([306 points](https://news.ycombinator.com/item?id=46875228)), skeptics asked: is it really HTAP, or just two databases glued together behind one interface? Other people liked exactly this, because binlog-based sync means no Kafka and no Debezium. And the numbers people keep sharing are hard to miss. When Percona [replicated InnoDB into a DuckDB engine](https://www.percona.com/blog/replicating-from-innodb-into-a-duckdb-storage-engine/), TPC-H at scale factor 500 finished in 186 seconds. InnoDB needed around 28 hours, and four queries never finished at all ([forum summary](https://forums.percona.com/t/duckdb-speed-on-mysql-with-dbtrail-without-a-new-storage-percona-community/41208)).

{{% why-it-matters %}}
"MySQL is bad for analytics" was always the reason to bolt on a second system. When the analytics engine lives inside the MySQL you already run, fed by binlog you already trust, this reason gets weaker. That's why we do **DuckDB × MySQL Day** on November 17, online and free, with people from Percona, Alibaba, VillageSQL, MariaDB and dbtrail. [Register here](https://oursqlfoundation.org/events/duckdb-mysql-day/)!
{{% /why-it-matters %}}

## AI agents are now MySQL clients, and also bug hunters {#ai-agents}

This month MCP stopped being a demo and became plumbing. Some examples:

- **vsql-mcp** from VillageSQL [runs an MCP server inside the database itself](https://villagesql.com/blog/mcp/), with bearer-token auth, table allowlists and row limits. Ronald Bradford [tried it](https://ronaldbradford.com/blog/2026-10-02-how-easy-is-it-to-use-villagesql-mcp-extension/): around four minutes to install, a SELECT-only user, and his attempts to get around the guardrails did not work.

- **MySQL MCP Server v1.8.0** by Alkin Tezuysal [closed 37 dependency vulnerabilities](https://askdba.net/mysql-mcp-server-v1-8-0-is-out/) and added MySQL 26.7 and MariaDB 12.3 to CI. "A quiet release on paper", in his own words.

- **AWS** showed [Kiro IDE with the Aurora MySQL MCP server](https://aws.amazon.com/blogs/database/analyzing-aurora-mysql-issues-with-kiro-ide-and-aurora-mysql-mcp-server/) diagnosing deadlocks and IOPS spikes. Please read the caveats till the end: check what model says in CloudWatch, and the server connects as the *master user*, so try it on a clone first.

- **Readyset** launched the [RDST Agent](https://readyset.io/blog/meet-the-rdst-agent), it sits on your machine, watches queries and tells you which index to add.

Other side of AI came as bug reports. MariaDB Foundation [wrote about a very busy year for security](https://mariadb.org/when-ai-finds-the-bugs-we-missed-a-very-busy-year-for-mariadb-security/): AI-assisted research produced 173 reports in two quarters, which became 27 published advisories and some delayed releases. Their advice is simple, update to the latest maintenance releases.

{{% why-it-matters %}}
Agents are a new kind of database user. They never get tired, they take everything literally, and quite often they have too many privileges. Projects shipping least-privilege defaults (read-only roles, allowlists, row limits) will get trust first. And every project in the family should expect bug reports at AI scale and plan time to triage them. This is not going away.
{{% /why-it-matters %}}

## MySQL Galera Cluster is gone, and the upgrade season is here {#galera-and-upgrades}

Support for all current MySQL Galera Cluster versions ended on September 30. MariaDB plc, which bought Codership in May 2025, [announced this end of support](https://mariadb.com/resources/blog/upgrade-now-announcing-mysql-galera-cluster-in-place-migration-to-mariadb-galera-cluster/) together with in-place migration to MariaDB Galera Cluster. Important: MariaDB Galera Cluster and Percona XtraDB Cluster are not affected. Continuent [compared five ways forward](https://www.continuent.com/resources/blog/mysql-galera-cluster-eol-your-practical-paths-forward) (MariaDB Galera, PXC, InnoDB Cluster, managed cloud, Tungsten), and Percona wrote that [diagnosis was always the hard part, not replication](https://www.percona.com/blog/your-galera-clusters-hardest-problem-was-never-the-replication-library/).

The argument started before October. In [*The Register*](https://assets.theregister.com/2026/07/30/202610/) in July, Marco Tusa from Percona said moving from MySQL to MariaDB is moving to a different database, not a simple swap. Vikas Mathur from MariaDB said "innovation in the MySQL ecosystem has stalled". For users the difference is very practical: offered migration is not drop-in, user accounts and privileges have to be recreated by hand.

And all this while everybody is upgrading anyway, because MySQL 8.0 reached end of life in April with 8.0.46. Practical reading from October:

- Fernando Mattera's [8.0 → 8.4 upgrade checklist](https://perconalive.com/2026-usa/slides/mysql-84-upgrade-proven-best-practices-for-zero-surprise-production-mi.pdf): Upgrade Checker, pt-upgrade, replicas first.

- Elman Badalov on [Aurora vs RDS major upgrades with Blue/Green](https://thebadalov.medium.com/aurora-mysql-vs-rds-for-mysql-major-version-upgrades-5f5429bfb892), and ProxySQL on [following the Blue/Green switchover without waiting for DNS](https://proxysql.com/blog/proxysql-3-0-10-aws-rds-blue-green-deployments/).

- Vestiaire Collective's [RDS for MariaDB upgrade](https://aws.amazon.com/blogs/database/how-vestiaire-collective-achieved-near-zero-downtime-rds-for-mariadb-upgrades-with-amazon-rds-blue-green-deployments/): 7-second switchover, in peak sales season. Brave people!

- Ronald Bradford, [how to rotate passwords with no downtime](https://ronaldbradford.com/blog/2026-10-27-how-to-change-mysql-account-passwords-with-no-downtime/) using dual passwords.

{{% why-it-matters %}}
For many teams the Galera question and the 8.0 question arrive in the same quarter. Which way to go is now not only technical choice, it is also choice which part of the family you stay with.
{{% /why-it-matters %}}

## A five-year-old regression, fixed {#mariadb-regression}

Engineering story of the month: [MariaDB 11.8 became about 3× faster on some in-memory workloads](https://mariadb.org/how-mariadb-11-8-became-about-3x-faster-on-some-in-memory-workloads-fixing-a-regression-dating-back-to-10-5/). Mark Callaghan's benchmarks showed something was wrong, and Alessandro Vetere found why. Since 10.5 a clock which was "meant to say 'eviction has started', began ticking much earlier", so every access to an old page went through buf_pool.mutex. On Mark's test QPS went from 20,326 to 57,052, and the fixed 11.8 is 7–9% faster than 10.4. Five years! Big thanks to people who benchmark in public and don't give up.

Jean-François Gagné, writing on his own blog, [added important context](https://jfg-mysql.blogspot.com/2026/11/mariadb-technically-correct-but-misleading-performance-claim.html): the 3× is measured against the regressed version, and compared to 10.4, from before the regression, the fixed 11.8 is about 9% faster.

## One room for the whole "M" at FOSDEM {#fosdem-m-ecosystem}

On October 27 the [M-Ecosystem Devroom](https://mariadb.org/fosdem-2027-bringing-the-m-ecosystem-together/) was announced for FOSDEM 2027, Sunday January 31, Brussels. It is successor of the old "MariaDB, MySQL & Friends" devroom, but with wider door: MySQL, MariaDB, Percona Server, VillageSQL, AliSQL, plus storage engines, proxies, connectors and tools. MySQL, MariaDB, Percona, VillageSQL and OurSQL Foundation organize it together ([our post about it](https://oursqlfoundation.org/blog/m-ecosystem-devroom-fosdem-2027/)). Talks are around 20 minutes, and the [CFP is open](https://pretalx.fosdem.org/fosdem-2027/cfp).

Oracle also confirmed [MySQL at FOSDEM 2027](https://blogs.oracle.com/mysql/mysql-at-fosdem-2027-join-us-in-brussels), and [MySQL Belgian Days](https://blogs.oracle.com/mysql/mysql-belgian-days-2027) come back on January 28–29, right before. Their CFP closes November 30, so don't wait!

{{% why-it-matters %}}
A shared devroom is a small, practical signal that the ecosystem is choosing to compare notes in public.
{{% /why-it-matters %}}

## Releases {#releases}

The ones worth knowing about, by date:

- **1st**: [MyVector v1.26.9](https://askdba.net/myvector-v1-26-9-mysql-26-7/), now with MySQL 26.7 support.

- **5th**: [TidesDB for MySQL 9 and 26](https://tidesdb.com/articles/tidesdb-now-available-for-mysql/), loaded as a plugin into stock MySQL.

- **12th**: [MariaDB Migrator is GA](https://mariadb.com/resources/blog/migrations-to-mariadb-from-mysql-now-easier-than-ever-open-source-mariadb-migrator-tool-reaches-ga/), open source tool for moving from MySQL to MariaDB.

- **14th**: [VillageSQL Server 0.0.7](https://villagesql.com/blog/007/), builds track MySQL 8.4.11, 9.7.2 and Percona Server 8.4.11-11.

- **16th**: [AliSQL 8.0.44-3](https://alisql.net/docs/releases/alisql-8-0-44-3/), Binlog Realtime Replication and DuckDB 1.5.2.

- **20th**: [MySQL 26.10](https://blogs.oracle.com/mysql/mysql-26-10-is-here) Innovation, then [9.7.4 and 8.4.13 LTS](https://blogs.oracle.com/mysql/mysql-october-2026-ga-releases-now-available).

- **22nd**: [MariaDB Connector/J 4.0](https://mariadb.com/resources/blog/whats-new-in-mariadb-connector-j-4-0/) GA, [Readyset 1.33](https://github.com/readysettech/readyset/releases/tag/stable-261022) with MySQL dual-password support and automatic failover, and [MySQLTuner 2.9.3](https://lnkd.in/eCyFydrb) with TLS 1.3 checks.

- **23rd**: [ProxySQL 2.7.4](https://proxysql.com/blog/announcing-proxysql-2-7-4/), security and severe bug fixes only, please plan the upgrade. Also [HammerDB 6.1](https://lnkd.in/ec9AgtQG), now with VillageSQL support.

- **24th**: [MySQL MCP Server v1.8.0](https://askdba.net/mysql-mcp-server-v1-8-0-is-out/).

- **27th**: [PMM 3.10.0](https://bit.ly/48nHmKV) with High Availability, built on Kubernetes, failover in seconds. So monitoring is not a single point of failure anymore, says Percona.

## Coming up {#coming-up}

| Date | Event | Format | Where |
|----|----|----|----|
| Nov 3 | [Beyond the Proxy: The Expanding ProxySQL Ecosystem](https://oursqlfoundation.org/community/webinars/beyond-the-proxy-proxysql-ecosystem/), René Cannaò and Alkin Tezuysal | Webinar | Online |
| Nov 4–5 | [MySQL Contributor Summit](https://blogs.oracle.com/mysql/join-mysql-public-discussion-6-and-the-november-contributor-summit) | Summit | Online |
| Nov 5–6 | [db tech showcase 2026](https://www.db-tech-showcase.com/) | Conference | Tokyo, Japan |
| Nov 9–12 | [KubeCon + CloudNativeCon North America](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/) | Conference | Salt Lake City, USA |
| Nov 12 | [Austrian Oracle User Group + MySQL Community](https://oracle.zoom.us/webinar/register/WN_jzyvm9WlSfe017q6o7a0uQ), Scott Stroz on MySQL Open Innovation and 9.7 | Webinar | Online |
| Nov 16–20 | [QCon San Francisco](https://qconsf.com/) | Conference | San Francisco, USA |
| Nov 17 | [DuckDB × MySQL Day](https://oursqlfoundation.org/events/duckdb-mysql-day/) | One-day conference, free | Online |
| Nov 19–20 | [DevOpsDays Portugal × KCD Porto](https://devopsdays.org/events/2026-portugal/welcome/) | Conference | Porto, Portugal |
| Nov 30 | [MySQL Belgian Days](https://blogs.oracle.com/mysql/mysql-belgian-days-2027) CFP closes | Deadline | — |
| Nov 30–Dec 4 | [AWS re:Invent](https://aws.amazon.com/events/reinvent/) | Conference | Las Vegas, USA |
| Nov 30–Dec 4 | [DevOpsCon Munich](https://devopscon.io/munich/) | Conference | Munich, Germany, and online |
| Dec 3 | [What Is the Fastest Database? Open-Source Benchmarking with HammerDB](https://oursqlfoundation.org/community/webinars/fastest-database-hammerdb/), Steve Shaw, 10:00 ET / 16:00 CET | Webinar | Online |
| Dec 7–9 | [Open Source Summit Japan](https://events.linuxfoundation.org/open-source-summit-japan/) | Conference | Tokyo, Japan |
| Jan 25–29, 2027 | [NDC London](https://ndclondon.com/) | Conference | London, UK |
| Jan 28–29, 2027 | [MySQL Belgian Days](https://eventreg.oracle.com/profile/web/index.cfm?PKwebID=0x990490abcd) | Conference | Brussels, Belgium |
| Jan 30–31, 2027 | [FOSDEM](https://fosdem.org/2027/), with the [M-Ecosystem Devroom](https://pretalx.fosdem.org/fosdem-2027/cfp) on Jan 31 | Conference | Brussels, Belgium |

**That's what mattered in October!**

If you found this useful, please forward it to a colleague, especially the one who still thinks MySQL news is one release note per quarter. If we missed something that matters (I'm sure we did), drop it into \#news in [our Slack](https://join.slack.com/t/oursqlfoundation/shared_invite/zt-480k6h62a-t0HalCPwvXUC_lpd4aNylA), it will go into the next one.

And if your company runs on MySQL and you think somebody should take care of this whole ecosystem, well, that's literally us. [Come talk to us about membership](https://oursqlfoundation.org/).

See you in November, Maria
