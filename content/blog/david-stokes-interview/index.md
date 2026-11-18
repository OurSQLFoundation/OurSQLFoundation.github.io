---
title: "David Stokes: “Nine Times Out of Ten, It’s MySQL”"
description: "David Stokes of DBeaver on living through three owners of MySQL, why he left Oracle, Postgres as “free as in puppy”, forks and fragmentation, and what the MySQL world must do to win the next generation of developers."
date: 2026-11-18
tags:
- Interview
author: "Maria Nesterova"
author_page: "/resources/member-directory/maria-nesterova"
image: "cover.jpg"
hero_image: false
toc_label: "In this interview"
interview:
  guest_page: "/resources/member-directory/david-stokes"
  interviewer_page: "/resources/member-directory/maria-nesterova"
  video_url: ""
  audio_url: ""
---

*David Stokes has been part of MySQL's story under every one of its owners. He joined MySQL AB as a PHP developer, ran its certification program, and stayed through the Sun and Oracle acquisitions, spending about a decade on Oracle's MySQL Community team alongside Frédéric Descamps. After Oracle and a spell at Percona, he now works at DBeaver, a database tool that connects to more than 170 databases, which gives him an unusually wide view of where MySQL stands. We talked about what each owner did to MySQL, why he walked away from Oracle, why Postgres is "free as in puppy", and what the MySQL world must do to win the next generation of developers.*

{{< toc >}}

## A free database with one more letter {#mysql-and-php}

**Your career started far from databases. How did you end up with MySQL, and why MySQL rather than one of the established commercial databases?**

Before that, at the end of the last century, I worked for a company that used neural networks to process underwater sound, mainly to hunt Russian submarines. Something that sounds like a dropped wrench to us is actually a cleaner shrimp. That gave me a good background in machine learning and AI. The same software now tracks whales.

In the late 1990s, I was working for the American Heart Association, and I was literally the first person putting them on the internet. I had over 5,000 static pages of medical information, so I needed a templating engine to apply the same standard layout to every page. I discovered something called the Personal Home Page by Rasmus Lerdorf, the creator of PHP.

I also needed a database. I went to Oracle, and they said they could give me a discount: down to only $100,000. That was like asking for two unicorns and a private bank account; we did not have the money. Then there was this crazy guy from Finland. One crazy Finn was already giving away an operating system; this other one was giving away a database called MySQL. At the time, an Australian was handing out a database called mSQL, so MySQL had one more letter in its name, and it had to be better.

MySQL and PHP became my career for a long time after that. They were joined at the hip for many years, and watching both of them develop over the last 30 years has been quite a ride.

**Let's settle the old argument: is it "My-S-Q-L" or "My-Sequel"?**

Mårten Mickos, who used to be MySQL's CEO (and that is a great interview, if you ever get it), said it didn't matter whether you called it My-S-Q-L or My-Sequel, as long as you used the product. I thought that was a good, politically neutral stance, so I switch between the two.

## From MySQL AB to Oracle in fifteen months {#three-owners}

**You joined MySQL AB shortly before it was sold, and then sold again. How did you get in, and what was it like to live through both deals?**

Back then, the MySQL DBA certification consisted of two exams, and I failed the second one by one stinking question. I went to the MySQL website to find out who was in charge. It was Carsten Pedersen, and he had a job posting for a PHP developer. So I wrote him an email that was half a complaint about the test and half an application. I got the job, and within about 90 days I went from PHP developer to head of certification.

Shortly after that came the first all-hands meeting, in Orlando, Florida. We were told to be in the meeting room at 8 AM; then suddenly, no, we had to be there five minutes earlier. That seemed a little odd. We walked in, and they were handing out drinks and singing Scandinavian drinking songs. Then Jonathan Schwartz of Sun Microsystems appeared on the screen and announced that Sun was buying MySQL for $1 billion.

That seemed an outrageous amount at the time. A lot of people were shocked, gobsmacked, as the English say. To be honest, I don't think Sun was doing anything other than making itself more attractive to a buyer; suitors like IBM were around.

Sun had no idea what to do with us; they wanted to use MySQL to promote GlassFish. About a year and a quarter later, I was at the MySQL Users Conference in Santa Clara. I turned on the news at 6 AM, and the big story in Silicon Valley was that Oracle had bought Sun Microsystems. I started texting colleagues, and they replied: "But you weren't drinking last night. Where did you get that?"

**Which transition hurt more, for the engineers inside and for the users outside?**

Inside, it had always been a little odd. In the MySQL AB days, there was Drizzle, a lightweight version of MySQL. Friends who worked with DB2 and the big Oracle database asked me how you could possibly make something lighter than MySQL. Various projects were tearing the engineering department apart: the Falcon storage engine, for example, which never quite came to fruition.

When Oracle arrived, Monty had already pretty much checked out of the day-to-day work; many other people were nervous, and the battles with the EU and others over MySQL's future began. But during that quiet period, the engineering process improved significantly. I've heard that Oracle engineers came through and said: "You have a great product. By the way, you are not the number two database at Oracle; you are about number 16 or 17." Oracle had Sleepycat, Greenplum, and a whole bunch of others. So while everything was being fought out in court, Oracle hired many good engineers and brought real engineering rigor, which worked very well for many years.

From the outside, I think many users benefited from the Oracle transition, because honestly the product became much better. But it was also obvious that we were the flea on the tail of the dog that was Oracle. I won't say we were benignly neglected, but we were an also-ran, not really part of the core of Oracle.

{{< pullquote by="David Stokes" >}}We were the flea on the tail of the dog that was Oracle.{{< /pullquote >}}

**What part of the MySQL AB culture would you bring back today?**

We saw ourselves as pioneers, cutting new paths into unknown territory in data. So many people were doing things with the database that we had never thought of. It was amazing. We had a professional services team that was among the sharpest groups of people I have ever met. They really knew the product and knew how to work with customers. When they gave out some tidbit on how to optimize a query, it was manna from heaven: the real information from the people who really knew how it worked. It was really exciting.

The move to Sun was a signal: we are part of the big corporate world now; we have to be adults, we have to be more professional. That toned the excitement down.

## Selling the free version {#community-team}

**How did you end up on Oracle's MySQL Community team?**

After a short spell at Calpont, a startup with a columnar storage engine for MySQL, I saw that Oracle had an open community manager position. I knew the previous community managers very well, so I applied and was hired.

Back then, the community team reported to Luke Kowalski, an interesting man. He was actually a building architect. The story I've heard from a couple of people is that in the early days of Java, he applied for an architect role at a Java company (they meant a data architect) and somehow charmed his way through the interviews. I hope it's true; if it isn't, Luke, I apologize; it is probably a better legend than the truth. That company was acquired by Oracle; Larry Ellison really liked Luke, and he ended up being the person who defended acquisitions like MySQL before the European Union. He did a lot of work on mergers and acquisitions.

**For about a decade, you and lefred were the public face of MySQL on two continents. How did you divide the work?**

At the time, it felt like there was a conference every weekend. I would go to Northern Europe every so often, and Fred would come to North America. Fred is a wonderful human being and knows his stuff technically. We made a great pair and shared a lot of presentation material. There were other people on the team, but the two of us were the mainstays for a very long time, and it was a great privilege to work with him.

**What did that work actually give users, and what was missing?**

As one of the managers who ran the community team, Fred's job and mine, as Luke Kowalski put it, were to go out and sell the free version of MySQL. We talked about new features and better ways to use old ones, and we did a great job of communicating a lot of hard technical information.

Very often a customer would say, "I want to be able to do X with my database," and you would answer, "We've had that for four years. Here is how you do it." And they would say, "You're kidding! How come I never knew?" Because we didn't promote it often enough. Spreading information is hard, but Fred and I got pretty good at it. What the community got from us was real passion for the product, and I think that shows in the results.

**And the hardest part of the job?**

Being the conduit between the developers and the community. You go back to the corporation and say: here is where we are falling down, here is where we need to do better, and it is not in their plans, not on the map. There are also things the corporation has decided not to do, but people still want them, and you literally have to tell your bosses: "I know we are not going to do this, but people are still asking for it." That is the hard part. There was not as much reciprocity as I would have hoped for.

## HeatWave, trust and the steering committee {#heatwave-and-trust}

**In January you wrote a rather pessimistic post about MySQL, Postgres and the future. Has your view changed since? And looking back, what made you leave Oracle in the first place?**

I'm not as pessimistic about the future of MySQL and its branches as I was a year ago.

To be honest, I left Oracle mainly because I saw HeatWave becoming Oracle's main focus. New features were being delivered either to improve HeatWave performance or to support Oracle Cloud Infrastructure. The generic Community Server was basically orphaned. It was very sad to see this wonderful product, loved by so many and still huge in many areas, abandoned on the ice to die.

{{< pullquote by="David Stokes" >}}The generic Community Server was basically orphaned. It was very sad to see this wonderful product, loved by so many and still huge in many areas, abandoned on the ice to die.{{< /pullquote >}}

But in the past year, efforts like VillageSQL, the OurSQL Foundation, and others have been quite positive. And of course Oracle has made a major turn: it wants to be more inclusive and a better steward of MySQL, and I think we are beginning to see the fruits of that.

**Oracle now has a MySQL steering committee and promises more features in the Community Edition. Will it work?**

I like it. I'm not sure it has been proven to work yet.

When Oracle took over MySQL, the first complaint was: "Oracle is going to kill MySQL. Why would Oracle need two databases?" Well, Oracle had a whole bunch of databases at the time, and it actually improved the product. Yet for years the community team kept hearing: "Oracle is going to kill MySQL, I just know it." They didn't quite manage that, although HeatWave put MySQL on life support.

Whether the new steering committee, the new openness, and the new willingness to put features into the Community Edition pay off, we will have to see. I'm going to stay a skeptic until they prove me wrong.

## Postgres: free as in puppy {#postgres}

**Even if Oracle's turn is real, is it enough to hold off Postgres?**

Maybe. Postgres is a very feature-rich database and does a lot of things very well. Where it falls down compared to MySQL and its variants is that you have to put many pieces together yourself. The one-process-per-connection model, inherited from Unix 30 years ago, still hampers it, so you end up adding a separate connection pooler. With MySQL, you download everything in one package. With Postgres, you get this, etcd, and that other thing. It is more like a box of Lego bricks you assemble yourself. MySQL comes out of the package pretty much assembled.

Postgres is also interesting in that it is run through mailing lists. When I was in college, a lot of projects were run that way; most have moved on, but for Postgres it works well. I have met many of the contributors who do the heavy lifting, and Postgres does amazing work with the fewest resources I have ever seen on a major project, and it gets consistently better, a little faster with every release. We will see what Postgres 19 looks like when it comes out; they have had to cut a lot from what they hoped to deliver, and I haven't yet studied that fully. But they do really, really good work.

Here is something telling from North America. Microsoft used to run SQL Saturdays for SQL Server people. They have renamed them Data Saturdays and are actively encouraging people to speak about Postgres there. That is a seismic shift.

A lot of people look at Postgres and say: maybe it is not as slick as some other options, but it has a lot going for it: it's free. I won't say "free as in speech" or "free as in beer". The phrase I like now is "free as in puppy": you get the puppy for free, but there are a lot of ongoing costs to keep it running and make it do what you want.

{{< pullquote by="David Stokes" >}}Free as in puppy: you get the puppy for free, but there are a lot of ongoing costs to keep it running and make it do what you want.{{< /pullquote >}}

Is that cheaper than running big Oracle, big DB2, or big SQL Server? More than likely. But those databases are so well established that I don't think we will see a quick move away from them. Still, if you look at the DB-Engines ranking, the only database moving up the chart is Postgres, and this past month it almost caught up with SQL Server. DB-Engines is not the best measure of popularity, but it is consistent, making it a useful benchmark. We'll see.

## Many MySQLs: choice or fragmentation? {#many-mysqls}

**Today there are VillageSQL, TiDB, Percona Server, MariaDB, Alibaba's fork, and many Chinese forks. Is this healthy, or fragmentation that weakens MySQL?**

Forks are nothing new. In many places, such as China, there have always been MySQL forks. They are still very popular there, and those users did not jump on the "let's all move to Postgres" bus.

More forks are good because they give you more choice, and bad because you have to make a choice. It is like a clothing store: do I take the blue shirt or the gray one? Darn, now I have to decide. But I'd still rather have more choices. Over time, they all tend to gather the same features, for compatibility reasons.

Overall, I think it is a good thing. When I started looking into Apache Doris, I was surprised to find that it speaks the MySQL protocol. That is great, because so many things out there do. The protocol is very solid.

Will they all still be here in a couple of years? I don't know. I hope so; they all have good niches. I would love to see something like VillageSQL succeed, but I can also see other databases saying, "Hey, we have extensions too." I was just reading a talk submission for SCaLE next year from a company (I don't know whether it has been announced, so I won't name it) that will also offer extensions. If it is a good idea, the market will take it.

It is like choosing a car. Do you want the very reliable little Japanese sedan that gets 40 miles per gallon? An electric car? Or do you need a Lamborghini just to get to the grocery store? There is a place for all of them. Business-wise, it depends on how well each company's management can adapt. I think something like TiDB or VillageSQL will find a solid niche and occupy it, while the general-purpose versions (MariaDB, MySQL, Alibaba's fork) will stay general-purpose.

**Where is this ecosystem heading over the next few years?**

One thing I expect is more of an Apache Doris and MCP server approach, where a single tool connects to multiple databases to perform the search.

## The view from DBeaver {#dbeaver}

**DBeaver sees almost every database in production. Are people actually migrating away from MySQL, and if so, to what?**

Unfortunately, it is not so much migration. It is more like: we have this, and this, and this. Oh, and we have that too. That is why it is great to have one tool, so you don't have to remember that in the MySQL client it is \\G for vertical output and in Postgres it is \\x. DBeaver is the universal access tool that gives you the same look and feel across all those databases. If you are porting from one to another, we can help with that too: backups, analysis, all sorts of things.

We also have very good AI integration. Someone throws a query at you, and you have no idea what it does: you can ask what it really does. That is very handy. You can also write queries in English, Russian, German, French, Basque, and several other languages. Instead of digging through the schema to work out how to get from one group of tables to another, you just say: "Give me a quarterly roll-up of sales by district in EMEA." It has been fascinating to see how fast this has developed in the past two years or so.

It is also a great teaching tool. You can tell the AI: "Pretend I'm five years old and just learning SQL. As you go, tell me what you are doing. Why are you writing a CTE instead of an inline subquery? How does this make my life better?"

**Many people assume DBeaver is a young project. What is behind it?**

It has been an open-source project for just over 15 years, written in Java and built on Eclipse. It has a wonderful group of developers; I met many of them on a trip to Serbia earlier this year. Most of our developers are in Serbia, some are in Hungary, and others are spread around the world. We are just under 85 people. I live in Texas; our CEO is in Austin, our head of marketing is about an hour south of me, and two other people are within a couple of hours' drive. So we have a little Texas flair, plus people all over the world.

As an American who has worked for many American companies, I am used to "whatever you did last week isn't good enough; it's a new quarter, move on." Our management really thinks many years ahead. It is refreshing; it is a great strategy, and the blood, sweat, and tears they put into the product are amazing.

## Fight your way through the junior stage {#junior-stage}

**The barrier to entry for developers keeps rising. What do you tell students and beginners today?**

When I started coding, a hot developer had a monochrome screen, a text editor that actually addressed that screen, a file system where you saved old versions of your program as .OLD, and maybe a step debugger if you were really good. Since then, the learning curve has only gone up. A new developer has to know their programming language, JavaScript on top of it, an IDE like VS Code, the CI/CD system, a couple of databases, and run all of it in and out of GitHub. It is crazily complex.

I tell people three things:
1. **Read the manual.** It sounds stupid, but it is the basis of everything.
2. **Break things.** You learn more from repairing what you broke than from things that just work. Having something blow up in your face teaches you a lot about yourself and about the product underneath.
3. **Keep simplifying.** Automate every step you can, and double-check the result.

Things move so fast that there will always be too much to learn at once. Forget about keeping up; try to keep even, and look into every new thing that comes out. When I was a manager, I told my people to spend an hour a week reading about what was new: not to master it, just to know what is out there. Today I would tell new developers to give it three or four hours a week, because so much is changing.

{{< pullquote by="David Stokes" >}}Forget about keeping up; try to keep even, and look into every new thing that comes out.{{< /pullquote >}}

**AI now does much of the work juniors used to learn on. How does a beginner get from junior to mid-level?**

I hate to say it, but you are going to have to fight your way through the junior stage, sometimes against AI, sometimes with it. Look up Uncle Bob Martin, Eric Raymond, and Cal Evans: three old-time programmers who, I think, have the right attitude to incorporating AI. The genie is out of the bottle; AI is here to stay. Whether it helps or hurts us in the long run, I hope it helps.

If you are a newbie, have AI write your tests, then double-check them. Have it criticize your code, heavily. Learn to work with it; it is a fact of life.

Many companies I see are thinking: "AI will do everything, so we'll get rid of the juniors and mid-levels and keep only the senior architects." But then you lose the institutional knowledge. Why do we run bill pay on Tuesday? Is there something special about that day? Why is this coded a certain way? When that knowledge is gone, the company really suffers.

You also have to be ready for management to see someone doing something better with AI and decide to jump on the bandwagon. Unfortunately, a lot of managers are like that, and you have to be prepared to leap in that direction.

## The database as the source of truth {#source-of-truth}

**MySQL's core audience today is mostly 40+. What would make a young engineer choose MySQL, or care about databases at all?**

First, we have to teach people why they need a database. MySQL has always been "just good enough": it didn't have all the features of Oracle or DB2, but it did enough. When I started with MySQL, many people stored their data in the database, read all of it into the application, and had Perl parse it. They could have done a join. Let the database do the hard work, and let the application add the frosting on the cake.

It is much easier to keep bad data out of a database than to hunt it down and fix it later. Yet we don't teach the database as the golden source of truth; we treat it as a bucket we shove everything into, and when it doesn't work the way we want, we open another bucket.

{{< pullquote by="David Stokes" >}}It is much easier to keep bad data out of a database than to hunt it down and fix it later.{{< /pullquote >}}

AI makes this more urgent, and that is good news for old-school DBAs. AI is unreliable as an agent acting on your behalf, so I think we will have to put a lot more business logic and rules into the database itself, because AIs know how to cheat the edge cases.

And one of the great things about MySQL is that every time I go to a show, people show me something I never thought of doing with a database, and nine times out of ten, they are doing it with MySQL.

## Deliver, deliver, deliver {#advice}

**Finally: what advice would you give the OurSQL Foundation for its first year?**

Nothing personal against the OurSQL Foundation, but our industry is plagued with foundations that exist to send out press releases and nothing else. Deliver, deliver, deliver. Be at FOSDEM and talk about what you are doing. Promote what is going on in the community. Run a regular newsletter: here is what the various players are doing; here is an article on LinkedIn you probably missed; here is a Reddit post with a good explanation of how databases do something. Teach the people who use databases what is happening in the MySQL world, and that MySQL is still a viable choice.


{{< pullquote by="David Stokes" >}}Deliver, deliver, deliver. Be at FOSDEM and talk about what you are doing.{{< /pullquote >}}