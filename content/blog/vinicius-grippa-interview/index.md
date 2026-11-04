---
title: "Vinicius Grippa: “MySQL Is Not Dead, But It Needs Physiotherapy”"
description: "Vinicius Grippa of ReadySet, creator of MyFlames and Oracle ACE Director, on what MySQL still lacks, AI agents as a new kind of client, Oracle's shift toward the community, and building MySQL Brazil."
date: 2026-11-04
tags:
- Interview
author: "Maria Nesterova"
author_page: "/resources/member-directory/maria-nesterova"
hero_image: false
interview:
  guest_page: "/resources/member-directory/vinicius-m-grippa"
  interviewer_page: "/resources/member-directory/maria-nesterova"
  video_url: ""
  audio_url: ""
---

*In January, Vinicius Grippa [publicly asked whether MySQL was dead](https://comunidademysql.com.br/mysql-abandonado-fud-realidade-oracle/). Ten months later we asked him again and talked through what MySQL does well, what it's still missing, and who is filling the gaps.*

*Grippa spent years in Percona Support, a job where, in his words, you learn "the community, open source, the technology itself, and how software evolves" all at once. Today he works at ReadySet, a caching layer for MySQL and Postgres. He also maintains the open source tool MyFlames, is an Oracle ACE Director, and helps run the MySQL community in Brazil.*

## What MySQL has and what it lacks

**Let's start with MySQL itself. You’ve worked through hundreds of production cases in support. In your experience, how much of the trouble comes from MySQL itself, and how much from the way teams use it?**

I'd split the blame half and half.

On the teams' side, the most common issue is performance, specifically query performance. Even now, when AI writes the SQL, the problem is still there: you don't know in advance how much data a query is going to pull out of the database.

What I'd call MySQL's fault is its flexibility. If I compare it to a programming language, MySQL is close to C. It gives you a lot of power, but you need to know how to work with it.

**Teams use components such as ProxySQL for routing and Redis or ReadySet for caching. When do you see those layers as a response to MySQL’s limitations, and when are they simply part of building a larger system?**

I can't say it's a MySQL issue or a MySQL limitation. Look at the other side. Postgres uses extensions to expand its range of features, and it has its own caching tools that compete with ReadySet. Redis sits in front of Postgres, MariaDB and most other databases too. For MySQL we have ProxySQL; for Postgres there's PgBouncer; MariaDB has MaxScale.

It's the same with cloud providers, and AWS is probably the most classic example. You have RDS, then RDS Proxy, multiple Availability Zones, replicas you can scale behind endpoints, load balancers. Any architecture that starts hitting limits starts looking for components that can sustain the growth. I think that's perfectly normal.

**At ReadySet you work with both MySQL and Postgres. Honestly, when would you start a project on Postgres, and where does MySQL still win?**

Today, in terms of AI integration, Postgres is ahead. It supports extensions, and the pgvector extension, which adds vector search, has done a good job of bringing AI into the database.

So if someone starts a new project this year, they will probably look at Postgres. There are companies like Supabase where you can spin up a Postgres instance and add extensions and components to it really easily. Lovable, an AI company that builds applications, integrates with Supabase and other components. With just a few prompts, someone who knows nothing about software development can create their own product. At the moment, MySQL doesn't have much of this. The community and Oracle are trying to get there (VillageSQL is trying to do the same for MySQL), but we are not there yet. If you're starting a project now with AI in mind, Postgres seems to be the most logical choice.

For people already running MySQL, it's different. Changing is hard: migrating to another database takes a lot of effort. I would stick with MySQL for a while, because there are other ways to use AI with MySQL as well. It's not impossible, and it's easier than migrating to Postgres.

**If you could put one item on the MySQL roadmap, what would it be?**

More AI support. There is work going on, but I'd like to see MySQL on par with Postgres, and today we are a bit below. That means support for extensions and more official AI capabilities. The community is doing its job: there's MyVector, a vector search plugin, and there's VillageSQL. But MySQL core itself should be friendlier to companies doing this kind of work. In software engineering terms, the core should be more open to it.

**What should be provided in the core by Oracle, and what should independent projects build around it?**

When I say it should be done, I don't mean the extensions. I mean making MySQL flexible enough for these ecosystem features to connect to the core.

VillageSQL is a great example. From what I understand (and correct me if I'm wrong), its ultimate intent is to provide extensions similar to the ones Postgres has and make them available in MySQL. Not a copy-paste, and not by modifying MySQL itself. If Oracle made that part of the core more flexible, VillageSQL's work would become way, way easier: it could plug in more easily and more transparently. Oracle needs to be more ecosystem-friendly, so tools and other companies can connect.

As for building it ourselves, that's already happening. At ReadySet, we want a good cache for MySQL, so we are building it ourselves; we are not waiting for Oracle. The ecosystem is big enough to let other companies work with MySQL and, of course, make money and work in the industry as well.

## MyFlames: what EXPLAIN doesn't show

**[MyFlames](/resources/software/myflames/) is your own contribution to that ecosystem. What is it, and where did the idea come from?**

The idea came back when I was working in support at Percona. I used flame graphs to gather performance information, the visualization created by Brendan Gregg. He's really famous, he has a book, he's really smart, and I'm a huge fan. So I took the idea from him. Later I saw that Tanel Poder had applied flame graphs to SQL execution plans in Oracle. I grabbed both ideas and brought them to MySQL. That's how it started.

**What kinds of performance problems has MyFlames helped you investigate?**

There are a couple. At first I used MyFlames literally to create flame graphs of SQL queries. That made it really easy for me to see where a query was getting slow while it ran. And because I was studying the MySQL source code, I could also build suggestions into the graphs. The tool itself could say: "Maybe an index is missing here," "This index is not optimal," or "This join is not good enough."

More recently I implemented schema versioning. One day a customer's database was getting slow, and nobody knew why. We asked the famous question we always ask: "Did you change anything?" The answer was no. Then we compared the schema from one day to the next and found a few changes in the table structures. Those changes were ruining performance.

These are simple cases. If I did them manually, I would probably solve them too, but it would take me a lot of time.

**What's next for MyFlames? Is it a tool for you, or for the whole community?**

The idea is to make it available to everyone. I don't want to sound selfish, but my dream is for this tool to be able to replace MySQL Workbench as it is today.

I'm expanding MyFlames to cover the gaps I ran into as a support engineer. I recently released a UI that runs on both macOS and Windows. It has some of MySQL Workbench's functionality and behavior: with a click you can gather your sessions, find tables without primary keys, and run a health check on your database. That's what I'm aiming for: a hub for checking your database's health and improving MySQL performance.

I'd also like to incorporate what the open source world already has, such as Percona Toolkit or MySQLTuner. Oracle will never bring something from the open source world into Workbench. My goal is to give the community all the tools available in the ecosystem in one UI that's friendly for anyone who wants to start working with MySQL.

## AI agents: a new kind of client

**When an AI agent writes and runs SQL without a person reviewing each query, what concerns you most as a support engineer?**

There are a few problems. The first one is security. We can establish guardrails and guidelines for an agent, but today that is not 100% secure. The agent itself can decide to drop a table, or modify one, in the middle of a production day. So we need to track what the agent is doing and how it's doing it.

The second one is performance, but that's not a new problem. In the past, developers weren't writing SQL queries themselves either: they used ORMs, object-relational mappers. You tell the ORM which components you want, and it translates that into a SQL query for the database. So hand-written SQL has been rare for a while now.

What may be new is that MySQL will need DBA agents on the other side too, inspecting the database constantly, in real time. If a query comes in doing a full scan, the agent creates an index, sends the query to a caching system, or diverts it to a replica. If it's a nonsense query that will retrieve a billion rows, the agent kills it. I think in the near future we will need DBA agents taking care of our databases.

## Inside Oracle's orbit

**You're an Oracle ACE Director, one of the program's senior levels. Did that happen along the way, or did you go after it, and what does it give you?**

It was something I chased; I was really looking forward to it. I joined the program about six years ago, though I don't recall the exact dates. At that time you needed a referral, so I asked a colleague to refer me and started writing blog posts. I joined at the lowest level and worked my way up the path. I became an ACE Director two years ago. Back then I also asked Frédéric Descamps (lefred) to vouch for me.

It helped me start the MySQL meetups in Brazil, and now the conferences, because I could talk to VPs at Oracle and bring attention to the Brazilian community. Personally, it really helps, because it lets me travel worldwide to conferences. I was able to go to Oracle AI World in Las Vegas, a huge conference. I would probably never go on my own, so that's definitely one of the amazing perks of being a director.

**At the same time, you're one of Oracle's public critics. At the start of the year you wrote that its focus was shifting toward cloud infrastructure. Since then we've seen engineering cuts and a new steering committee. What has actually changed for users, and inside the software?**

I have no problem criticizing something when I see it's wrong. I did it with Percona as well, never with the intention of putting anyone down, but to say: look, I think we have ways to improve.

There were a lot of layoffs Oracle-wide, in all departments, not only MySQL. In the past, the MySQL community (and I mean not only people but also software) was not their priority. They shifted the focus to Oracle Cloud, then AI came, and all the budget went to hardware. Their own actions showed they were going in the wrong direction; anyone could see that.

But now things have changed. The VP at Oracle dedicated to MySQL changed, and the whole attitude changed. We have community meetings with Oracle frequently now; there was one the day after this interview. They created a board of community members, with companies such as Google, Booking.com and a few others.

Inside the software, I don't think they have the same engineering capacity, even with AI. If you go to GitHub and submit something, you'll see Codex, OpenAI's coding agent, doing the filtering before a human replies. But now maybe community members can bring the traction back. I don't think it's the ideal model yet, but big corporations move slowly. Let's see how it goes. There are positive changes now, and there is still work to do.

## Building a community: lessons from Brazil

**You helped grow MySQL Brazil from meetups into a conference. What actually keeps a community like that alive?**

The community itself is more than ten years old. I joined six or seven years ago, but it's way older than that.

A community always requires someone to organize it, centralize it and help promote it. It's literally voluntary work. If no one does it, the community vanishes: there are no events, no promotion, nothing. And it's not only me: other people in the community write blog posts, speak, and promote it. You need a group of people taking care of it.

What helps is, again, being an Oracle ACE Director. It brings a lot of potential to the community. Oracle can provide the venue if you want to do a meetup or a session. It opens connections with other companies that sponsor, come to speak, or pay for a coffee break. Percona has been involved since I started the meetups, before they became a conference. Then ReadySet came in, ProxySQL, then Oracle. You need people, and companies behind them, interested in sponsoring and promoting it.

But it really takes effort. It's like a relationship: if you don't put effort into it every day, people lose interest, the love disappears, and then you realize it's gone. The focus now is continuation: passing it along to someone else, finding more people who are interested and have the love you need to put into it. At the end of the day, maintaining it takes a lot of your time.

**How has the audience grown?**

Online, our LinkedIn group has more than 2,000 people. Our WhatsApp group is really strong, with more than 300 members last time I checked.

When we started the conference, we had about 40 people, which was already a good number, since meetups usually get 15 or 20. Then we had 70, then 120, and this year 180 people at the university. We ran three tracks at the same time: MySQL, MariaDB, and of course the ecosystem. It feels similar to the MySQL Belgian Days at FOSDEM: it's becoming a group of friends. People tell me, "I came here to see the friends I met last year." It's a really good feeling, really good vibes at the event.

**How do you see MySQL’s place in Brazil today, compared with PostgreSQL, both in adoption and in community activity?**

MySQL is really popular in Brazil. A lot of companies use it. At the conference we see people running everything from very old versions to very new ones, and students testing it too. It has its place in the Brazilian database community. And after all, it's the second most used database in the world and the most used open source database. It still has a very strong brand and name.

But, reality check: Postgres is more popular nowadays, and because of that its community is bigger. I wouldn't say stronger in terms of effort. We do everything we can at the same time (meetups, the same kinds of events), just on a smaller scale.

**What would you tell a junior engineer deciding whether to build a career on MySQL?**

Everything we do nowadays gets taken to the political side. Don't choose right or left, Postgres or MySQL. Don't treat your career as a political choice. If you're a DBA, learn both. Then you'll have a job until the end of your days, because you'll cover basically the whole market. You'll be like a unicorn in the job market.

Postgres is growing, but MySQL has a huge user base in the industry. Those companies can't change easily; they need support, they need people who know MySQL. Ten years ago MySQL was spiking, growing huge. Now it's Postgres. Maybe that wave will change again. So pay attention to your career and don't follow anything blindly. I tell the MySQL people the same: don't be radical fans of Postgres or MySQL. Learn both, go to both kinds of events, and expand your network.

Relational databases are a well-established technology that will be used for a long time. It's the perfect time to know two databases. My core databases are MySQL and MongoDB, and I'm learning Postgres. I'm nowhere close to my MySQL level there, but I think it's really important.

## So, is MySQL dead?

**In January you asked publicly whether MySQL was dead. Ten months later, what's your answer?**

No, I don't think it's dead, and I don't think open source is dead. We saw Oracle shift toward the MySQL community. They're helping more now, and they've opened their GitHub for people to contribute over the next six months. We're already seeing a lot of contributions coming from the community.

It's not dead, but I wouldn't say these are its healthiest days. There is a lot of work to do. I always criticize because I love the technology and I love the community, and I want to see them grow. I think it's necessary to show where we're doing well and where we're doing badly, and my role helps me do that.

So no, it's not dead, and we're not close to dead anymore. But we need a lot of physiotherapy to recover our health.
