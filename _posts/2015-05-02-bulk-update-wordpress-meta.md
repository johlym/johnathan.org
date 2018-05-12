---
id: 147
title: Bulk Updating Any Meta Values in WordPress Posts Automatically
date: 2015-05-03 00:33:18 +0000
author: Johnathan Lyman
layout: post

permalink: "/2015/05/bulk-update-wordpress-meta.html"
categories:
- Programming
tags:
- wordpress
---
I updated the look of my site, today, and with that came a non-standard setup for featured images and the realization I’d have to manually update a lot of posts.

The theme requires custom meta be used for the featured image setting to determine how to display an image. As of this post, I have roughly 170 blog posts in the database that would need updating from the beginning of January until now. I definitely didn’t want to spend the next 60 minutes (170 posts * time to click) updating each post, so I did a bit of quick and dirty PHP coding.

Placing the code within the_loop() allowed it to run automatically for each post that was presented. Setting the per-page post count to 200, I effectively had all 170 posts pushed on screen at the same time. This subsequently updated all 170 posts at the same time. This of course put a little bit of a hit on my SQL database, but not so much that it bogged it down. I’m sure having 170 * 2 reads then writes all at once blew out a few of the cobwebs. Most of this site is cached pretty effectively so the database doesn’t do much.

[![Screenshot 2015-05-02 18.23.56](/assets/images/2015/05/Screenshot-2015-05-02-18.23.56.png?resize=525%2C214&ssl=1)][1]

You’ll see in the image above where I made the updates. The first spike should have been the only one, but I entered the wrong value for one of the custom meta fields so I had to go back and do it again. The code has logic so if it was already correct, it skipped it, hence the smaller second peak.

If you’re curious, the above came from [NewRelic][2], a service offering made by some pretty cool people. They’re free to use for the basic stuff and their customer service rocks. `</shameless plug>`

Anyway, without further delay, here’s the code that made this happen:

.gist table { margin-bottom: 0; }

Pretty neat, eh? I know it’s nothing spectacular but it gets the job done, for sure.

Share this post with everyone you know who’s even just remotely interested in WordPress development. One could even bulk-update posts themselves with zero clicks or interaction necessary.

I feel like I did a great thing, today. Time for a beer.

[1]: /assets/images/2015/05/Screenshot-2015-05-02-18.23.56.png?ssl=1
[2]: http://newrelic.com