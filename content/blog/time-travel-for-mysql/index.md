---
title: "Time Travel for MySQL: Recovering One Row Shouldn't Take All Night"
description: "A wrong WHERE, a DELETE in the wrong terminal tab, and the foreign-key cascade deletes your binlog never saw — a preview of the October 15 webinar on recovering rows with dbtrail."
date: 2026-10-08
tags:
- Webinar
author: "Daniel Guzmán Burgos"
author_page: "/resources/member-directory/daniel-guzman-burgos"
image: "cover.jpg"
hero_image: false
---

I have been working with databases for almost 20 years, ten of them at Percona. To be honest, a lot of that time was not really "working" with databases. It was suffering with them. Especially in one moment: when somebody comes to you and says, "I think I deleted something I should not."

You know this moment. An `UPDATE` with the wrong `WHERE`. A `DELETE` typed in the wrong terminal tab. It touched 40 rows, maybe 200. Not a disaster for the business, but a disaster for your evening.

The options are not nice. Restore a full backup somewhere and replay binlogs until just before the bad statement. Or open `mysqlbinlog` and start digging: find the right files, find the position, decode, grep, and map `@1`, `@2`, `@3` back to column names by hand, because the binlog doesn't have them. For a few rows. Hours of work.

And all this time the old values were right there. With row-based binlog and full row image, MySQL already writes the before and after image of every changed row. The data was never the problem. Finding it fast and putting it back correctly was the problem.

But there is a case where even the data is not there.

## The deletes your binlog never saw

Take a normal schema: a `speakers` table, child tables like `talks`, and `talks` has its own children. Everything is connected with `ON DELETE CASCADE`.

You delete one speaker. MySQL answers: `1 row affected`.

In my test schema, that one statement removed 12 rows.

Where are the other 11? Not in the binlog. Not in the general log, not in the slow log, not in performance_schema. Rows deleted by a foreign key cascade are invisible. This is MySQL bug #32506. It lived for years and was fixed only in MySQL 9.6, in February 2026. If you run 5.7, 8.0 or 8.4, this is still your reality today.

So the classic binlog recovery brings back the parent row, and the children are just gone. You don't even know which ones.

Think for a second how you would recover rows that no log ever recorded. I spent a lot of time on this question. That's one of the things I will show on the webinar.

## What I will show live

On **October 15, 2026, at 10:00 AM ET / 16:00 CEST**, I will do a mostly live demo with the OurSQL Foundation. Real schema, real mistake, real recovery. We will:

- break some data on purpose, and then find exactly which rows changed and when
- look at a table as it was at a moment in the past, with plain SQL
- get back the cascade-deleted rows that MySQL doesn't tell you about
- survive an `ALTER TABLE` that happened between the mistake and the recovery
- check if the captured history can be trusted *before* you use it for recovery (please don't skip this step in real life)
- and yes, ask an AI agent in plain English to fix a delete for us, and see what it does

All of it with [dbtrail](/resources/software/dbtrail/), an open source tool I wrote (Apache 2.0). It works also on RDS and Aurora, where you don't have binlog files on disk. Everything I show, you can repeat on your own test instance the same day.

I will also talk honestly about where this approach doesn't fit and what you should still keep doing the old way.

[**Register here**](https://us06web.zoom.us/webinar/register/WN_AYk4qjMBTU2ofrY_hkpXvQ), and bring your worst recovery story. I'm sure I have a worse one.
