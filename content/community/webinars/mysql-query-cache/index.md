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

Remember the MySQL Query Cache? It used to be one of the most recognizable performance features around. It got deprecated and eventually pulled because it couldn’t keep up on modern multicore systems.

So is query caching just a bad idea? Not really.

In this session, Marcelo Altmann looks at why the original Query Cache fell apart, why key/value caches took over instead, and how [Readyset](/resources/software/readyset/) pulls ideas from both to get around a lot of their old problems. He covers:

- how reads actually work in MySQL and PostgreSQL
- cache invalidation strategies
- how transparent query caches keep reads fast without breaking correctness

Marcelo has close to 20 years with MySQL, has contributed code fixes to MySQL itself, and is part of the Oracle ACE program.
