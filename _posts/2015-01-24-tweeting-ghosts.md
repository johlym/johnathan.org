---
id: 23
title: Ghostly Sharing to Twitter from Jetpack's Publicize Plugin
date: 2015-01-25 03:29:21 +0000
updated: 2015-05-12 11:27:00 -0800
author: Johnathan Lyman
layout: post
permalink: "/2015/01/tweeting-ghosts.html"
categories:
- Blog
tags:
- automation
- buffer
- ifttt
- wordpress
---

A rather odd thing started happening shortly after I implemented Jetpack on this site. I was seeing my posts show up on twitter, which is nice and all, but not through the method I had set up. I describe how I set up automatic post scheduling for the various social networks in this past. These tweets were being written without a fancy permalink, which seemed odd and told me that it wasn’t something of my intentional doing. After doing some research, I discovered someone having an issue with the Publicize plugin not removing a social media account properly. In order to fix their issue, they re-added their account and removed it again.

I figured it would be a stretch but I knew it couldn’t hurt anything so I tried that myself just to see what would happen. I Added my Facebook page, and after authorization, lo and behold, my twitter account showed up, too. It wasn’t previously authorized so I had a pretty good idea this ghost authorization was what was causing these unwanted shares. Un-linking my twitter account immediately solved the problem, and I was on my way to sharing the way I want to: <a href="https://johnathan.org/2015/01/ifttt-buffer.html">WordPress => IFTTT => Buffer</a>.