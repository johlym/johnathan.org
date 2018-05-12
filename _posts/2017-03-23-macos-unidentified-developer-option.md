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
<div class="kg-card-markdown"><p>I hadn’t realized until today that this setting was hidden in macOS Sierra. After a colleague pointed it out, I decided this needed fixing. Here’s how to bring back the third “Anywhere” option in macOS Sierra.</p><p>From the Terminal, run:</p><p><code>sudo spctl --master-disable</code></p><p><img src="/assets/images/2017/03/Screen-Shot-2017-03-23-at-4.41.02-PM.png?resize=525%2C345&amp;ssl=1" alt=""></p><p>It’ll ask for your password. Plug it in and hit enter.</p><p><img src="/assets/images/2017/03/Screen-Shot-2017-03-23-at-4.36.15-PM.png?resize=525%2C441&amp;ssl=1" alt=""></p><p>Head back to <strong>System Preferences</strong> &gt; <strong>Security and Privacy</strong> and you should see the “Anywhere” option once more. If it used to be ticked before your upgrade to Sierra, it should be ticked again, now.</p><p>This workaround disables Gatekeeper altogether, though if you’re choosing the “Anywhere” route, having it on isn’t all the helpful, anyway.</p></div>