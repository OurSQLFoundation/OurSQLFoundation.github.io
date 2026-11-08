---
title: "Vanna"
link: "https://github.com/vanna-ai/vanna"
description: "An open-source Python framework for building natural-language-to-SQL agents and chatbots, with built-in support for MySQL and other databases, pluggable LLM backends, and a pre-built streaming web chat component."
subcategories: ["AI & Ecosystem Skills"]
compatibility: ["MySQL", "DuckDB"]
deployment: ["Self-Hosted"]
pricing: ["Open Source"]
---

Vanna is a Python framework (MIT licensed) for turning natural-language questions into SQL queries, results, charts, and summaries. It ships a FastAPI-based agent server plus a pre-built, framework-agnostic `<vanna-chat>` web component that streams SQL, interactive tables, Plotly charts, and natural-language summaries back to the browser in real time.

It works with "any database" — PostgreSQL, MySQL, Snowflake, BigQuery, Redshift, SQLite, Oracle, SQL Server, DuckDB, and ClickHouse among them — and "any LLM" (OpenAI, Anthropic, Ollama, Azure, Google Gemini, AWS Bedrock, Mistral, and others), so a MySQL deployment can be wired to an agent without a MySQL-specific integration layer.

Version 2.0 adds user-aware, row-level security: a developer-supplied "user resolver" extracts identity from cookies, JWTs, or OAuth tokens, and every generated query and tool call is filtered per user and group permissions, with built-in audit logging and rate limiting for production and enterprise use.
