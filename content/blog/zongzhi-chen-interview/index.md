---
title: "“MySQL Is Still the Backbone”: Zongzhi Chen on Hot Rows, PolarDB, and the Agent Era"
description: "Zongzhi Chen of Alibaba Cloud on why China runs on MySQL, what Singles Day does to a database, and what MySQL has to change before AI agents pick the next default."
date: 2026-10-14
tags:
- Interview
author: "Maria Nesterova"
author_page: "/resources/member-directory/maria-nesterova"
image: "cover.jpg"
hero_image: false
interview:
  guest_page: "/resources/member-directory/zongzhi-chen"
  interviewer_page: "/resources/member-directory/maria-nesterova"
  video_url: ""
  audio_url: ""
---

*Zongzhi Chen leads the cloud RDS team at Alibaba Cloud. He was a core member of the team that shipped the first release of PolarDB, created the open source Redis-compatible database Pika, and sits on the Founding Board of the OurSQL Foundation. We talked about why China runs on MySQL, what Singles Day does to a database, and what MySQL has to change before AI agents pick the next default.*

## From Redis to the storage engine

**You started out as an application developer. What pulled you down the stack, into database internals?**

After I graduated from college, I worked on an application development team. That was before I started working with MySQL.

At my previous company, 360, we ran into a problem. People started storing massive amounts of data in Redis. We all knew Redis was fast, but DRAM was very expensive. Some users could tolerate two milliseconds of latency, but they couldn't tolerate the price of DRAM. So I built Pika, a general-purpose Redis protocol-compatible database with a storage engine based on RocksDB. Pika is open source on GitHub, and it is widely used across many companies.

After that, I found I was very interested in solving problems inside the database, in the storage engine and in the operating system. That's why I decided to focus on database infrastructure. When I left 360 and joined Alibaba, I started working on PolarDB, an Aurora-like database with separated compute and storage. I was a core member of the team that brought PolarDB to commercial availability in 2018. That's how I became a database infrastructure engineer.

**Has your whole career been inside Chinese companies?**

Yes. I have only worked for Chinese companies, never for a US or European one. But some of my colleagues came from US and European companies.

**Today you lead the cloud RDS team at Alibaba Cloud. What's actually in your scope?**

My team is responsible for RDS MySQL, RDS PostgreSQL, RDS SQL Server, and RDS MariaDB. We maintain the source code for all of them except SQL Server.

The team has two parts: the control plane and the data plane. The control plane team creates database instances when a customer buys one on Alibaba Cloud, and it runs everything around them: backups, auditing, upgrades, workflow control, and similar tasks.

The data plane team works on the source code. We fix bugs and build the new features our customers need. I have been working on the MySQL source code for more than 10 years.

Our main focus is fixing the problems customers run into on Alibaba Cloud RDS, often before upstream finds them. Our team has reported lots of bugs upstream, and we contribute the fixes back to the community. You can find Alibaba engineers in every MySQL release note.

In 2019, I was one of the top four MySQL bug reporters. The early releases had lots of bugs, and we were already running 8.0 in production. We hit many issues, so I reported many bugs upstream.

## Why China runs on MySQL

**From the outside, MySQL looks like the default database in China. When you started, was there even a choice between MySQL, PostgreSQL, or anything else?**

In China, you don't really need to make that choice, because most companies use MySQL. I think MySQL is much more popular in China than anywhere else in the world.

Truth be told, I think the reason is timing. Many Chinese internet companies grew up alongside MySQL. When they started growing, MySQL was right there, becoming popular. The timelines just overlapped perfectly. So Alibaba, Tencent, Baidu, and many others naturally chose MySQL over other databases.

In the deployments I see in China, MySQL instances substantially outnumber PostgreSQL instances. At Alibaba, most of the important databases run on MySQL. The core transaction database of Taobao is on MySQL, and so is the shopping cart system.

There's another reason, I think: At the beginning, Monty focused a lot on China. I have met him in China many times. First he introduced MySQL to us, and later MariaDB. I think the company behind MySQL treated China as an important market from the very beginning.

**Globally, the narrative is that PostgreSQL is winning. Does that match what you see?**

I have to admit that in new AI scenarios, PostgreSQL is used more. But for latency-sensitive transactional workloads, MySQL is still the backbone.

PostgreSQL hasn't taken over MySQL's core territory: high-performance transaction processing. It captured a new market through its extensibility and permissive license. PostgreSQL took the new market. It didn't take over MySQL in traditional transactional systems. That's the difference I see from the Chinese side of the market.

**Alibaba could have built its own database or used a domestic one. Why did it standardize on MySQL?**

It started with Alibaba's core e-commerce system. In the beginning, Alibaba used Oracle as its default database. Around 2009, we started removing “IOE” (IBM servers, Oracle databases, and EMC storage) from our core systems. We wanted an open source database to replace Oracle, and MySQL was one of the good choices. It's open source, so if we hit a problem, we can get the source code and fix it ourselves. So we started replacing Oracle with MySQL, and we built our own branch of MySQL, called AliSQL.

One of the most important factors at the time was SSDs replacing HDDs. With SSDs, MySQL could handle most of the workload in our core systems.

Also, Alibaba was not a large company back then. It was still small, so the best choice was to start with an open source project. When we needed new features or ran into new issues, we could add the features and fix the problems ourselves in MySQL. I think that was the right choice at the time.

**And the Chinese alternatives: where do they compete?**

Of course, there are many Chinese databases. But they mostly build distributed database systems, like OceanBase and TiDB.

As they see it, in the traditional single-node, monolithic space, it is very hard to build a new database that can compete with MySQL or PostgreSQL. In distributed systems, there wasn't a good enough solution yet. So many Chinese database companies invest in distributed databases, not monolithic ones.

## Singles Day: the annual stress test

**November 11, Singles Day or Double Eleven, is probably the most extreme load test any database faces. What does your MySQL fleet look like at the peak, and what are you watching on the dashboards?**

During the Double Eleven Shopping Festival, as we call it, our core scenario is database updates under real online traffic, running on more than a thousand database nodes.

We also rolled out a hot-spot update patch across Alibaba's platform to handle high-concurrency flash sales during the event. In standard InnoDB, an update holds its row lock until the transaction ends. When many transactions update the same row, they serialize, and waiting, waking threads and scheduling add substantial overhead. AliSQL’s optimization reduces coordination overhead and unnecessary round trips along that serialized hot-row path. We have released this feature in AliSQL and in Alibaba Cloud RDS MySQL. I think it's one of the key changes we made for Double Eleven.

In the high-concurrency test I referred to, throughput increased from a little over 200 TPS to about 31,000 TPS. These are test results, rather than Double Eleven production throughput.

Our implementation required additional SQL syntax. We expected that to make upstream acceptance unlikely, so we did not formally submit the patch to Oracle.

On the dashboards, we watch a few key metrics: transactions per second, redo log write throughput, and binlog write I/O.

**Which moments were the most stressful?**

Early on, the biggest headache was hot-row updates, as I mentioned. In MySQL without any optimization, as concurrency on a single hot row increased, update throughput actually dropped. The higher the traffic, the worse the throughput. During a peak like Double Eleven, this was a massive pain point. It's still a key issue for MySQL and the MySQL community. Recent MySQL versions still don't fix it.

The second problem was growth. Every year, Double Eleven brought much more traffic than the year before. At the start of every year, we had to buy about twice as many machines as the previous year, and we had to re-shard the database into more partitions. That was work we had to do every single year.

We eventually solved the first problem with the hot-row update optimization in AliSQL. We solved the second one later with a more elastic solution: PolarDB.

## PolarDB: separating compute from storage

**PolarDB is a MySQL-compatible database with separated compute and storage, often compared to Amazon Aurora. What does that architecture give you that classic MySQL can't?**

Yes, it's a MySQL protocol-compatible database, much like Aurora on AWS. Because compute and storage are decoupled, customers get several key benefits.

First, they can scale up compute without worrying about storage. Before this architecture, when a user wanted to scale an instance, say from 4 CPU cores to 8, the data had to be copied to another machine, so scaling up was a long process.

Second, adding a read-only node is very easy, because you don't need to copy the whole dataset. That makes read-heavy workloads much cheaper. In traditional MySQL, to add a read-only node, you create a new node, copy the whole dataset and catch up through the binlog before serving traffic. With separated compute and storage, the new node simply shares the storage. No full dataset copy is required, so a new read-only node starts very quickly.

Third, this architecture is also faster for backup, recovery, and crash recovery.

**Aurora got there first. How much of PolarDB is “Aurora, the Alibaba version”?**

Aurora was an early pioneer of this approach in cloud-native relational databases. Its SIGMOD 2017 paper was an important reference for us. We learned from Aurora, but PolarDB follows a different architectural path. As discussed in CloudJump II, Aurora uses a log-as-database design, while PolarDB is built on shared storage. In my view, Aurora's approach is more elegant, while PolarDB's shared-storage approach is more general: it can be implemented on cloud block storage that supports concurrent mounting by multiple nodes, with the database compute layer providing consistency and recovery.

A concrete example is compute-side Multi-Version Data. A page-oriented log index lets each node reconstruct the page version it needs, reducing coupling between the writer and readers. Write elision reduces write amplification, and on-demand page reconstruction supports instant recovery. In practice, this gives users more flexible storage choices, better node independence and faster recovery within this architecture.

I have published three papers at SIGMOD and VLDB, CloudJump I, II, and III. The CloudJump papers describe the progression: [CloudJump I](https://www.vldb.org/pvldb/vol15/p3432-chen.pdf) addresses remote-storage latency and bandwidth through greater I/O parallelism, prefetching and prioritization; [CloudJump II](https://desert0616.github.io/pdf/CloudJumpII.pdf) addresses shared-storage consistency and recovery; [CloudJump III](https://desert0616.github.io/pdf/CloudjumpIII.pdf) explores engine-aware tiering across memory, local SSD, block storage and object storage. These are different architectural choices, not a claim that PolarDB is universally faster than Aurora.

**PolarDB-X is open source. Why open source that product, and what does it give Alibaba and the community?**

It's important to separate the two. PolarDB-X is a distributed SQL database. PolarDB for MySQL uses a different architecture: compute nodes share distributed storage, with compute and storage scaled independently. PolarDB for MySQL is not open source; PolarDB-X is.

I haven't worked on the PolarDB-X team, but I think the main reason is this. In China, many distributed database scenarios are not public cloud workloads. These databases have to be delivered to the on-premises market, not the cloud market, and those customers need the source code. If you don't open source it, you can't win that market and you can't get those customers. That's why most distributed databases are open source, like TiDB and OceanBase. We also hope developers in the community will take part in developing PolarDB-X.

Distributed SQL systems such as TiDB and OceanBase still serve a more specialized segment of the workloads I encounter.

**So for a developer choosing a database for a new project today, what should they look at so they don't hit an architectural wall in two years?**

From my point of view, hardware is developing so quickly that I'd suggest starting with a standard database like MySQL. MySQL on modern hardware is good enough for most businesses.

As your business and data volume grow, you can easily move to a database hosted in the cloud: RDS MySQL on SSD, or a compute-storage separated database like PolarDB. Managed MySQL services and shared-storage databases can support very large datasets; the limits depend on the service, edition, and configuration. If your business eventually goes beyond that, then you move to a standard distributed database. It's a solid, practical path.

I don't recommend that a junior developer or a startup begin with a distributed database. There's no need to jump into a very complex architecture from day one.

## The agent era

**Where is MySQL-compatible architecture heading over the next few years? What looks experimental today but will be standard soon?**

I think the next generation of MySQL-compatible databases will focus mainly on AI agent scenarios. We're at an important moment. AI agents, not humans, will become the main users of database systems: the default users of your database.

To serve this workload well, we need several key capabilities.

I would prioritize branching. Agents need isolated database states that are cheap to create, test and discard, so they can try changes safely. Rapid provisioning and scaling support that workflow.

The second is rapid scaling. MySQL-compatible databases must scale much faster; bringing up 1,000 instances within 10 seconds is an aspirational target. Reaching that target requires work on both the MySQL kernel and the control plane.

The third is object storage integration. Another major focus is combining MySQL with object storage like S3 to reduce costs.

I think features like branching, together with combined vector and full-text search, will become the new standard. You can see it in recent news: most search features now include both vector and full-text search, merged into one capability.

AliSQL already has publicly available DuckDB integration, columnar storage and native vector indexes. I also submitted [an upstream proposal to add DuckDB as a columnar storage engine](https://github.com/mysql/mysql-community/issues/76) and offered to help with design review.

The proposal is still open and has not been merged upstream.

**Today even a non-engineer can build an app with an agent and never choose a database. The agent does it for them. What does it base that choice on?**

In AI-driven development today, most of the time it's not a human choosing the database. It's the agent. It's like your case: you build a website and you don't choose a database. You may not even know there is a database inside your project.

Right now, there's a very popular project called Supabase. It's the default choice for AI agents when they build a website or a simple application, and the database inside Supabase is PostgreSQL. PostgreSQL powers Supabase, and Supabase serves the agent. The database sits at the bottom of the stack. Users and agents can work through Supabase's APIs and tools, while direct PostgreSQL connections are also available. There are other open source projects, Supabase competitors, that offer the same kind of features. *Editor’s note: Docka AI has [published research](https://lab.docka.ai/can-agents-run-it/) on how AI agents work with Supabase and PostgreSQL.*

MySQL needs to support projects like Supabase and become their default choice. But right now, most Supabase-like projects use PostgreSQL by default.

**So what should the MySQL community (Oracle, the vendors, the OurSQL Foundation) actually do to make MySQL the agents' default?**

I agree that this can define the future. And I think it's the key reason why, in 2026, MySQL is much more open than it has been over the past five years. We can see the roadmap now, and every month Henrik publishes a MySQL developer report. I think upstream and Oracle understand that MySQL used to be the most popular database, but on the AI side, it won't be the default choice for agents.

First, MySQL needs to be more open than before. PostgreSQL has a much better license than MySQL's GPL.

Second, the features AI agents need, like vector search, have to ship in MySQL releases.

Third, the MySQL community has to get involved in Supabase and Supabase-like projects. As we said, users don't choose the database. When they choose Supabase, they get PostgreSQL as the default. We need to make the MySQL ecosystem more open and integrate MySQL into many open source projects.

Back in the 2000s, with the LAMP stack, people didn't choose the database either. When they chose LAMP, MySQL came as the default. It's the same now: when people choose a project like Supabase, they get PostgreSQL as the default. There are many projects like Supabase, and MySQL needs to be integrated into them.

## Why OurSQL

**Why did it matter to you personally to join the OurSQL Foundation board?**

I joined OurSQL because I believe an independent, vendor-neutral community can help make MySQL development more open and transparent. I would like to see stronger collaboration across contributors, vendors, and Oracle.
