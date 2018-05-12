---
id: 24
title: How to Set up Automatic WordPress Blog Post Scheduling with IFT.TT, and Buffer
date: 2015-01-25 04:05:17 +0000
author: Johnathan Lyman
layout: post
permalink: "/2015/01/ifttt-buffer.html"
categories:
- Programming
tags:
- automation
- buffer
- iftt
- wordpress
---
Let’s be honest. The year is 2015 and nobody wants to do things by hand or manually if they can help it. Companies are hiring people to automate the hell out of everything because like M.I.A (sort of, not really) [famously rapped][1]:

> “_live fast, die young, robots do it well._“

I’ll admit, I like speeding up the process of sharing what I’ve written but I like controlling it a bit more than some. Here’s how I do it. You’ll want to create an account with [IFTTT][2] and [Buffer][3] if you haven’t already. IFTTT stands for **IF T**his, **T**hen **T**hat. The premise is that you can take data being expelled from one service, and based on certain criteria, do something with it via another. Things like “Text me with the daily weather report at 5AM” are easy and, well, kind of cheesy. If you become a power user of [IFT.TT][4] or already are, you’ll know that there’s so much more you can do with the service like auto-tweet breaking news stories from news sources or trigger your Philips Hue home lighting to change color when a storm warning comes into effect. In my case, I want to sync IFTTT with my WordPress install. To start, I’ll need to create a new recipe and click on the blue _this_ link (A) and choose the WordPress trigger channel (B). This will be the source for the data that IFTT uses. 

[![ifttt_step1](/assets/images/2015/01/ifttt_step1.jpg?resize=525%2C328&ssl=1)][5] 

Once I have that set, I can choose whether I want this action to be triggered by any new post from WordPress, or just when the post has a particular tag or category. In my case, I choose the former, because I want to share all posts. 

[![Screenshot 2015-01-24 20.48.33](/assets/images/2015/01/Screenshot-2015-01-24-20.48.33.png?resize=525%2C203&ssl=1)][6] 

We can skip Step 3 as there’s nothing else to set for these triggers and move on to step four. Click Create Trigger. So at this point we’ve established that if there’s any new post on WordPress Blog then we’ll do something. Now we establish what that something is. Click the blue *that* link. In my case, I want to share to Buffer. 

[![Screenshot 2015-01-24 20.51.29](/assets/images/2015/01/Screenshot-2015-01-24-20.51.29.png?resize=525%2C167&ssl=1)][7] [![Screenshot 2015-01-24 20.51.36](/assets/images/2015/01/Screenshot-2015-01-24-20.51.36.png?resize=525%2C219&ssl=1)][8] 

I will want to choose the “Add to Buffer” option since I won’t be pushing photos from my source. My final step is to set up how I want my shares to look and then I create my action. *Note: If this is your first time, you’ll have to set up what account you want Buffer to schedule this IFTTT-pushed content on.* 

[![Screenshot 2015-01-24 20.53.36](/assets/images/2015/01/Screenshot-2015-01-24-20.53.36.png?resize=525%2C258&ssl=1)][9] 

There are a couple things to keep in mind when setting this up. Anything pushed from IFTTT to Buffer: 1) will be set to whatever schedules you have created and 2), will only be pushed to whatever social media account you have set up for this channel. You can only have one social media account chosen for this type of setup. If you want to use more than just one social media account to share you content, I recommend creating separate recipes for each. Granted, only one of them will be scheduled via Buffer, so keep that in mind. In my situation, I don’t really mind, and I use Buffer so much already that I like having the ability to manually schedule for other social media accounts that don’t get as much regular pushing of content.

### All Done!

It’s that simple. If you have account with IFTTT and Buffer already set up, this will take you thirty seconds to do. You’ll find this thirty seconds will save you time in the long run and will become something that you don’t even think about at the end of the day. Sure you could use WordPress plugins, too, and that’s all fine and dandy. I’m not stopping you! This is how I like to do it and I figured someone out there might like to know. Thanks for stopping by, have a good one!

[1]: http://go.jlyman.net/1JnTw3K
[2]: http://go.jlyman.net/1Cpvd3e "IFTTT"
[3]: https://bufferapp.com
[4]: http://IFT.TT
[5]: /assets/images/2015/01/ifttt_step1.jpg?ssl=1
[6]: /assets/images/2015/01/Screenshot-2015-01-24-20.48.33.png?ssl=1
[7]: /assets/images/2015/01/Screenshot-2015-01-24-20.51.36.png?ssl=1
[8]: /assets/images/2015/01/Screenshot-2015-01-24-20.51.36.png?ssl=1
[9]: /assets/images/2015/01/Screenshot-2015-01-24-20.53.36.png?ssl=1