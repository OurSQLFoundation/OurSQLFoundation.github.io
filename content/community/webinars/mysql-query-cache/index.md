---
title: "What Happened to the MySQL Query Cache?"
description: "The MySQL Query Cache was removed because it couldn't scale on modern multicore systems. Marcelo Altmann of Readyset asks whether query caching itself was the mistake, and how a transparent cache can keep reads fast and correct."
date: 2026-11-18
time_display: "10:00 AM ET · 16:00 CET"
images:
  - banner.jpg
speakers:
  - name: "Marcelo Altmann"
    role: "Senior Software Engineer, Readyset"
    photo: "speaker-marcelo.jpg"
    profile: "/resources/member-directory/people/marcelo-altmann/"
---

The MySQL Query Cache was once one of the most recognizable performance features in MySQL. It was deprecated and eventually removed because it couldn't scale on modern multicore systems. Does that mean query caching itself is a bad idea?

In this session, Marcelo Altmann revisits why the original Query Cache failed, why traditional key/value caches became the dominant solution, and how [Readyset](/resources/software/readyset/) combines ideas from both approaches to overcome many of their historical limitations. He covers:

- the anatomy of reads in MySQL and PostgreSQL
- cache invalidation strategies
- how transparent query caches deliver low-latency reads while maintaining correctness

Marcelo has almost 20 years of experience with MySQL, has contributed code fixes to MySQL itself, and is part of the Oracle ACE program.
