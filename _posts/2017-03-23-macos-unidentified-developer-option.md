---
id: 283
title: Restore the Anywhere Option to Run Apps from Unidentified Developers in macOS
  Sierra
date: 2017-03-23 22:41:36 +0000
author: Johnathan Lyman
layout: post

permalink: "/2017/03/macos-unidentified-developer-option.html"
categories:
- Blog
---
I hadn’t realized until today that this setting was hidden in macOS Sierra. After a colleague pointed it out, I decided this needed fixing. Here’s how to bring back the third “Anywhere” option in macOS Sierra.

From the Terminal, run:

`sudo spctl --master-disable`

![](/assets/images/2017/03/Screen-Shot-2017-03-23-at-4.41.02-PM.png?resize=525%2C345&ssl=1)

It’ll ask for your password. Plug it in and hit enter.

![](/assets/images/2017/03/Screen-Shot-2017-03-23-at-4.36.15-PM.png?resize=525%2C441&ssl=1)

Head back to **System Preferences** \> **Security and Privacy** and you should see the “Anywhere” option once more. If it used to be ticked before your upgrade to Sierra, it should be ticked again, now.

This workaround disables Gatekeeper altogether, though if you’re choosing the “Anywhere” route, having it on isn’t all the helpful, anyway.