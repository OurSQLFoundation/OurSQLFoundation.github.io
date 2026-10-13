---
title: myflames
link: https://vgrippa.github.io/myflames/
github: vgrippa/myflames
description: A MySQL and MariaDB query-plan visualizer that turns EXPLAIN ANALYZE output into interactive flame graphs, treemaps, and Visual Explain diagrams, with a local workspace and before/after comparison.
subcategories:
- Monitoring & Observability
- Database Management & GUI
compatibility:
- MySQL
- MariaDB
deployment:
- Self-Hosted
pricing:
- Open Source
images:
- logo.png
---

myflames turns MySQL and MariaDB query plans into interactive charts so you can see where a query spends its time, compare plans before and after a change, and export the analysis as JSON or plain text. It is inspired by Brendan Gregg's FlameGraph and Tanel Poder's SQL plan flame graphs. Plans open as HTML reports in a browser and can be shared as files, and the core package needs only Python's standard library.

A plan can be shown as a flame graph, a bar chart ranked by self-time, a treemap, an expandable execution tree, or Visual Explain, which draws the join type with a Venn symbol and shows operator flow, access types, and estimated row volumes. Reports carry warnings and suggested actions, and operator labels link to short interactive lessons on indexes, scans, sorting, joins, and buffer-pool behavior (`myflames teach`). You can work from a saved plan without any database, paste one into a browser playground that runs entirely in the page, or let myflames capture it live through your `mysql` or `mariadb` client — in which case it also gathers table definitions, statistics, and a few session variables, and an environment advisor suggests index, query, and server-setting changes to test. Its own documentation stresses that these are candidates to try, not verdicts.

`myflames ui` starts a local browser workspace for investigating a query: import or capture plans, run either an estimate (`EXPLAIN`) or a measured execution (`EXPLAIN ANALYZE`) with bound parameters, a timeout, repeats, and an optimizer trace, compare row estimates with measured rows, and diff against a saved baseline. Investigations are kept on your machine, and passwords are never saved. For automation there are `compare`, a compact text `digest` that suits sending a plan to an LLM, and a `check` command that exits non-zero when a plan shows chosen problems such as a full scan or a filesort, plus an MCP server so AI agents can analyze and compare plans.

It works with MySQL 8.4 or later (using JSON format version 2) and MariaDB 10.11 or later, and needs Python 3.7 or later; it installs with `pip install myflames` or `pipx`. One caution from its README: capturing a plan with `EXPLAIN ANALYZE` actually runs the query, so choose a query and database where that is appropriate.

myflames was created by Vinicius Malvestio Grippa. The latest release, 2.3.0, came out in October 2026. It is licensed under the CDDL 1.0, as an extension of Brendan Gregg's FlameGraph work.
