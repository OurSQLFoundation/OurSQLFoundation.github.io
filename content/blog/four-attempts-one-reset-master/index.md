---
title: "Four Attempts and One RESET MASTER — Migrating a Terabyte of Production MySQL to Kubernetes (MOCO)"
description: "Four switchover attempts, a passwordless root account inherited from the donor, and a RESET MASTER that quietly ran on live replicas — how Ivinco moved a terabyte of production MySQL into Kubernetes with the MOCO operator."
date: 2026-10-20
tags:
- Case Study
author: "Eugene Dimov"
author_page: "/resources/member-directory/eugene-dimov"
image: "cover.jpg"
hero_image: false
case_study:
  company_page: "/resources/services/ivinco"
  company_name: "Ivinco"
  company_url: "https://www.ivinco.com/"
---

<p class="update-banner"><strong>Update, October 23, 2026:</strong> The MOCO maintainers at Cybozu responded to this case. <a href="#maintainers-response">Read their comment →</a></p>

Historically, we had four bare-metal MySQL clusters. Over time, we merged them into two: the big one (750 GB data directory, ~50 databases, largest table 100 GB) and a small one (200 GB data directory) with specific transaction isolation requirements.

On bare-metal, we ran Percona Server 8.0.x across 3 servers with 768 GB RAM for the big cluster and 2 servers with 128 GB RAM for the small one. But daily operations shifted (this post focuses primarily on the big cluster): the CPUs of the big cluster were idle almost 95% of the time on average, and the whole data directory fit into the server's RAM, so it was reduced to 384 GB without a performance penalty. Further experiments showed that it could potentially handle the load with even less RAM.

That is where the idea came from: free up the hardware under this cluster by moving it into Kubernetes (v1.24 at the time). In the worst case, we planned to move at least those databases that serve only applications which already run in Kubernetes.

Nobody had relaxed the availability and latency requirements, and the database was far from microservice size, so we went slowly — with research and load tests at every step. It took a long time, but the work is now close to being done: choosing an operator, choosing a migration strategy, and four switchover attempts before the first success.

## The cost of entry

We run Percona Server on bare-metal, so we started with Percona's operators in February 2025. There are two. The operator for Percona XtraDB Cluster uses Galera. The operator for Percona Server that uses Group Replication wasn't in GA at the time.

Galera requires a primary key on every table. We had quite a lot of tables without one. Group Replication has similar requirements (a unique key on NOT NULL columns). Shortly after, we narrowed our criteria down to detailed documentation, excluding both Galera and Group Replication.

Then we came across a KubeCon EU 2024 talk by Jérôme Petazzoni and Alexandre Buisine of Enix, ["We Tested and Compared 6 Database Operators"](https://www.youtube.com/watch?v=l33pcnQ4cUQ), and [an article](https://blog.kintone.io/entry/moco) from Cybozu, the creators of MOCO. We decided to give MOCO a chance because it relies on semi-synchronous replication and does not have strict requirements for primary keys. Due to our cluster's Kubernetes version at the time, we settled on MOCO v0.16.1, using native images matching our bare-metal builds (a prerequisite for MOCO migration). In the new setup, pods were limited to 16 GB of RAM with a 12 GB buffer pool and 600 GB storage (after preliminary clean-up, this was more than enough).

A careful read of the documentation found no blockers, so we started to prepare for experiments and test migrations. The preparation was not hard: pay off some technical debt and move to GTID, plus change a few parameters as [the operator's documentation](https://cybozu-go.github.io/moco/usage.html#creating-a-cluster-that-replicates-data-from-an-external-mysqld) says. A half measure does not work here, though — the operator needs exactly `gtid_mode=ON`.

After that, the operator orchestrated the initial data sync using the MySQL Clone Plugin. While the plugin supports throughput throttling, the transfer ran at default rates. We also had to account for an operational constraint we confirmed first-hand: restarting the recipient immediately aborts the process, forcing the clone operation to start over from scratch. And our first plan was to migrate all databases at once, so each of the three replicas took about 16 hours to fill.

## Three rollbacks in a row

**The first attempt** never reached the main phase — the mid-term test under real production load.

We had put together a detailed runbook with exact timings: 48 hours out, enable replication; 15 minutes out, disable automatic failover on the legacy cluster; at 10 and 5 minutes, set `read_only` on the replicas and then on the primary; finally, switch DNS, reroute the VIP, and tear down the external donor configuration, which lifts `read_only` on the MOCO cluster.

We had to roll back almost immediately. A codebase search revealed that some services had the old primary's VIP hardcoded instead of using the DNS endpoint. Migrating that IP into Kubernetes wasn't feasible due to architectural constraints. The rollback itself was straightforward because both clusters shared the same GTID history. We simply pointed the bare-metal master back to the MOCO primary pod (`CHANGE REPLICATION SOURCE TO SOURCE_HOST='moco-master', SOURCE_AUTO_POSITION=1;`), waited for it to catch up, and reversed the switchover.

**For the second attempt**, we intercepted those hardcoded IP connections using DNAT rules on an intermediate gateway, performed the cutover, and rolled back within an hour. While we anticipated that performance tuning would be needed when moving from hardware RAID to a hybrid Ceph cluster (10% flash tier), latency degraded to unacceptable levels for several services. Having captured nearly an hour of granular Prometheus metrics from MOCO, we focused on reproducing the bottleneck workloads in staging. The degradation traced back to two distinct profiles, both heavy on INSERT/UPDATE operations: latency-sensitive services with a steady write rate, and latency-tolerant batch jobs with bursty I/O.

**The third attempt** lasted slightly longer — just over an hour — but failed for the same reason: storage degraded severely under load. The InnoDB buffer pool data usage stabilized within the first 30 minutes at less than a quarter of capacity, confirming that memory caching was not the limiting factor. With enough real-world profiling data collected, we abandoned the "all-at-once" cluster migration strategy. Instead, we decided to migrate databases in batches, segmented by workload profile: dataset size, write frequency, and tolerance to disk latency.

## Dividing the Monolith: Wave-Based Migration

The new plan was straightforward: migrate one database at a time via logical dump and restore, maintaining an acceptable cutover window by locking the donor side with `ALTER DATABASE ... READ ONLY = 1`. However, the bulk of the effort went into inventory rather than the migration itself.

Our baseline test was grim: a full dump and restore across the entire dataset took 542 minutes. A nine-hour read-only window was an absolute non-starter for production.

Simply querying the database catalog didn't help, as `update_time` in `information_schema` was empty for nearly half the tables. Instead, we parsed the binary logs to tally data-modifying statements per schema.

The audit revealed that write traffic was concentrated in only a handful of databases; many had seen no modifications for weeks, and several were entirely dormant. We also deferred databases accessed via multiple entry points: an active database reachable by both raw IP and DNS, or through overlapping hostnames (a legacy artifact of earlier cluster consolidations), couldn't be cleanly cut over yet.

The physical host was serving three logical clusters through three distinct DNS names pointing to the same VIP. We tackled the most manageable one first: it held the largest number of databases (~40), but the smallest aggregate footprint (~20 GB). As a result, the dump/restore window dropped from 542 to 115 minutes.

## The fourth attempt: it worked

Here is what we did this time:

- Replaced CNAME chains with direct A records pointing to the VIP to eliminate extra lookup hops and minimize TTL propagation delays.

- Enforced `READ ONLY = 1` bidirectionally — on the source for schemas undergoing cutover, and on the target for all remaining databases. This guaranteed that no single schema could accept writes in two places at once.

- Reduced the critical synchronization window for the first wave to just 4 minutes and 10 seconds (factoring in that cold databases could tolerate remaining read-only for longer).

- After letting the source databases remain in read-only mode for 24 hours to confirm operational stability, we took a final safety dump and dropped them from the legacy cluster.

## Post-Migration Tuning and the Next Two Clusters

Next came the kind of work that articles usually skip. That is a pity, because half of the surprises were waiting right here.

First, we had to bring the operator up to the version recommended for our Kubernetes. Along the way, in the same steps, we also upgraded MySQL.

At the same time, we tuned the configuration based on the collected telemetry. When client connections started dropping, we found that no single metric pinpointed the issue — it only became clear after correlating aborted connection entries in the MySQL error log with connection spikes on the Grafana dashboards. We overrode the legacy `wait_timeout` inherited from bare metal, which proved too aggressive for the traffic patterns in Kubernetes. We bumped the threshold incrementally, validating cluster stability after each adjustment.

Two large pieces of work were left: the small cluster in full, and what remained of the big one. For each piece, we prepared a separate target cluster and tuned it for the profile "large database, uneven writes". A long replication lag here is more than just annoying: a replica that lags is effectively out of the failover setup, breaking HA during that window.

To hit all the problems of large databases early, we migrated the small cluster in full. It went perfectly — this time the connections by IP had been checked and fixed before we started. Only one thing was left: 500 GB of data from the big cluster. At the time, we reached Kubernetes v1.32, MOCO v0.34, and MySQL v8.0.45.

## The Ghost in the Machine: Replicas Broken on Graceful Restart

By this point, we had the second cluster for the remaining databases, a low lag, and the right settings. And one problem that kept all of it from being ready: **every normal graceful pod restart killed that replica.** Four out of four times. The only fix was to delete the volume and clone again, which took 6–8 hours — and then the story repeated.

After each restart, the controller wrote the same thing:

```
failed to configure replica instance 2: new primary 1 does not have binlog containing transactions <the full GTID history, ~1.7 billion transactions> required for instance 2
```

The replica was asking the primary for the history from the very beginning, and the primary had no binary logs.

Our first idea was a version conflict between the operator and MySQL. It did not hold: the target operator version officially supports both our MySQL version and our Kubernetes version.

The second idea was a false lead, and it cost us the most time. At startup mysqld wrote:

```
[Note] [MY-010856] [Server] Failed to open the crashed binlog file when source server is recovering it.
```

It reads clearly: the log is damaged and could not be recovered. In fact, it means the opposite. In the MySQL source (sql/binlog.cc, read_binlog_in_use_flag) this line lives in a branch at `INFORMATION` level, which runs when the `LOG_EVENT_BINLOG_IN_USE_F` flag is **not** set — that is, when the log was closed correctly and there is nothing to recover. The same error symbol is used elsewhere in the same file at `ERROR` level, for a real failure, and that is why the text does not match the branch. A check through the logs settled it: the message appears exactly on those starts where a binary log file was already in the data directory, and it is missing where the directory was created from scratch.

The real cause was in [the source of the operator's agent](https://github.com/cybozu-go/moco-agent/blob/v0.15.0/cmd/moco-agent/cmd/root.go#L280-L284), and it is made of three decisions that are harmless on their own.

1.  The agent decides that an instance "is not initialized yet" by a single criterion: whether it can log in as `root@localhost` without a password. The check runs once, when the agent container starts — that is, when the pod starts.

2.  The initialization function (`Init`) creates service users, drops `root@localhost`, and then executes `RESET MASTER`. For an empty instance, this is completely correct.

3.  After a clone, the agent runs a shorter initialization, `InitExternal`. It creates the missing service users, resets the passwords of the existing ones, and installs the plugins. **It does not drop `root@localhost`**. Only the first-boot path in step 2 does that.

As it turned out, our source donor was a legacy bare-metal server that had a passwordless `root@localhost` (used only for local monitoring in our case): [cybozu-go/moco-agent#123](https://github.com/cybozu-go/moco-agent/issues/123)

***The first pod restart after a clone runs `RESET MASTER` on a live database.***

The instance loses its whole GTID history: the mysql.gtid_executed table is emptied, and the binary log numbering restarts at binlog.000001. The primary's logs are empty too — its own cloning cleared them, and the whole history sits in `gtid_purged`. There is nothing left to catch the replica up with, so the controller excludes it from the cluster and, by design, does not recreate it.

The elegant part of this bug is that every participant behaves reasonably. Only the combination breaks things — and only when you clone from an external donor that is not an instance of the same operator.

On the donor, that account was used only by local monitoring scripts, so the fix was small: we dropped the user, and the problem was gone. (By the way, if you are wondering what would happen to the primary if it restarted with that account present: it would lose its GTID history for external replication).

> **Update, 21 October 2026.** Kento Takeuchi of the MOCO team answered in [cybozu-go/moco#952](https://github.com/cybozu-go/moco/issues/952). He wrote that this is expected behavior and a restriction on the donor's side. MOCO does not expect a root user without a password. The team will state this restriction in its documentation ([cybozu-go/moco-agent#125](https://github.com/cybozu-go/moco-agent/issues/125)). Both issues are now closed. If you clone from an external donor, make sure it has no `root@localhost` without a password.

## What to take away

**Audit all client connection endpoints.** Not only "who connects, and to which address", but also a plan for the case when you miss someone, and they keep using the old address.

**There will be much less RAM in Kubernetes than on bare metal.** And there is no time to fully warm up the InnoDB buffer pool after the switchover — check this point in your tests.

**Rebuilding a replica is an event for production, not a background task.** Since MOCO configures semi-synchronous replication, it will always clone a new replica from the current primary. Operating at the raw block layer does not eliminate I/O competition: on shared hybrid storage, aggressive clone throughput demands significant storage performance headroom to keep production latency stable.

**A physical clone copies the raw system tables as-is, inheriting the donor's legacy state:** accounts, grants, and leftover system schemas. At the same time, don't rely solely on your familiar bare-metal configuration: MOCO overrides critical runtime variables to enforce cluster orchestration, silently ignoring conflicting directives in your custom ConfigMap (see ConstMycnf in pkg/mycnf/generator.go).

{{% guest-comment id="maintainers-response" %}}

## Response from the MOCO maintainers

After publication, we asked the MOCO maintainers at Cybozu to comment on the issues described above. Their response is published in full, with their permission.

### 1. On Hardcoded VIPs and Network Endpoints

Discovering hardcoded IPs late in a migration is a classic headache that many engineers experience. While this challenge is not specific to MOCO, networking is always a major topic in Kubernetes. In public cloud environments, you get networks that are deeply integrated with VPCs. In self-hosted environments, however, you must select and design your own network stack. At Cybozu, we went through a lot of trial and error before adopting **Cilium**. If readers are interested in our infrastructure journey, CNCF published a [case study about it](https://www.cncf.io/case-studies/cybozu/).

### 2. On Ceph and Storage Performance

We completely agree that operating and tuning Software-Defined Storage (SDS) like Ceph for high-write database workloads is very difficult. Instead of redundant network storage, we run local SSDs on each node provisioned by **[TopoLVM](https://github.com/topolvm/topolvm)**. Local SSDs eliminate the operational complexity of SDS and deliver high IOPS with very low latency. The trade-off is that data is tied to a specific node; if a node dies, the local data is lost. However, this is precisely why MOCO was created: **it is designed to auto-heal replicas when nodes fail**, making local SSDs a practical and reliable choice.

### 3. On `root@localhost` and `RESET MASTER`

This was definitely an unexpected corner case for us. While we stand by the requirement from an architectural standpoint, we are genuinely sympathetic to the time and effort spent debugging such a tricky issue! To support reliable auto-healing, a MySQL pod must be able to initialize safely and idempotently at any time. Checking for a passwordless `root@localhost` was our method to detect a brand-new instance, which unintentionally conflicted with an external donor that kept that account. We will document this restriction, but we welcome suggestions from the community on how to handle this more cleanly without breaking idempotent auto-healing.

### 4. On `ConstMycnf` and Overridden Settings

This is a very fair critique, and we have some regrets about our early development choices here. While some parameters are strictly required for MOCO's orchestration and semi-synchronous replication to work correctly, others were simply carried over from Cybozu’s production settings at the time. We believe users should have more control over settings that MOCO does not strictly require. Kento Takeuchi is currently working on reviewing these parameters to separate mandatory settings from user-configurable ones (apologies for the slow progress on this).

Thank you again for spotlighting MOCO and creating space for this constructive conversation. We look forward to continued collaboration with the OurSQL Foundation and the broader open source community.

<p class="guest-comment-signature">— Sho Iizuka, Site Reliability Engineer, on behalf of the MOCO maintainers, Cybozu</p>

{{% /guest-comment %}}
