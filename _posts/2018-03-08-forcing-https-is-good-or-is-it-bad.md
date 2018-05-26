---
id: 2038
title: Forcing HTTPS is Good... or is it Bad?
date: 2018-03-08 21:03:16 +0000
author: Johnathan Lyman
layout: post
permalink: "/2018/03/forcing-https-is-good-or-is-it-bad.html"
categories:
- Blog
tags:
- https
- web security
excerpt: It all depends on who you ask.
---
There's a bit of a debate in various corners of the Internet about how Google's adding of `Not Secure` to HTTP-only sites as an indicator in the address bar is somehow bad for the Internet.

This tweet sums up both sides nicely:

{% twitter https://twitter.com/genmon/status/971686493004713984 %}

I have mixed feelings. I get where folks are coming from when they say that Google shouldn't be doing this carte blanche, but it also seems like a petty hill to die on. Google is a s--t company but HTTPS is easy, free, and at least does some stuff to ensure the content you're accessing is the content that was served. The barrier for entry into an HTTPS-enabled Web site is super low and we should be making these migrations independently of what Google is pushing.

Sure, adding that indicator is a scare tactic, and I'd bet it'll be a good one. We should also be cautious that anywhere between your site and your visitor, there's the very real possibility someone could very well take over that connection and replace the site or inject code on a whim. ISPs are for the most part shitty companies all around. Does moving to HTTPS only solve that problem? No, but it does provide piece of mind.

If folks are worried about their sites that have 15 years worth of content and haven't been largely updated since 2004 all of a sudden becoming irrelevant or the "Independent" web being silenced... fine. We need to start somewhere in setting the benchmark for the Internet to be _above_ plaintext HTTP. I don't see other alternatives that don't make things _more_ complicated.

There's really no reason why the Internet can't be secure everywhere at this point.

When it comes to making sure "old content" is still accessible by all, as someone who jumped on the HTTPS train as soon as they could, it would stand to reason that means for accessing this "old content" should be updated as well. Analog media is digitized to keep it accessible.