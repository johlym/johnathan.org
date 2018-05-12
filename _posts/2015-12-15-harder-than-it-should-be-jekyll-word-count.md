---
id: 229
title: 'Harder Than it Should Be: Jekyll Word Count'
date: 2015-12-15 17:51:22 +0000
author: Johnathan Lyman
layout: post

permalink: "/2015/12/harder-than-it-should-be-jekyll-word-count.html"
categories:
- Blog
---
<div class="kg-card-markdown"><p>When I was running this site through WordPress, I had a plugin that would count the number of words each of my posts contained and give me some metrics. It was a pretty slick plugin and had all sorts of visuals.</p><p>With Jekyll, I don’t have such capabilities out of the box (or even remotely close to the box) so I went hunting for a plugin. I found one, and it works, but it’s slow, and I don’t really think there’s much that can be done about it. Given the static nature of Jekyll, it’s not really easy to save persistent information somewhere like in a database without also having a plugin for the database.</p><p>The plugin brought down my build to a crawl (140s over 13s) and GitHub didn’t whitelist the plugin, so it was pretty much a non-starter.</p><p>Needless to say, I pulled it, but if you want to see the commit where I added it, go <a href="https://github.com/jelyman2/jelyman2.github.io/commit/004b155426b3cd8cb08316c7e6941562baa1075d">here</a> (then the subsequent commits <a href="https://github.com/jelyman2/jelyman2.github.io/commit/89bf68b99961afb38a251c148744cdadba936dbd">here</a> and <a href="https://github.com/jelyman2/jelyman2.github.io/commit/7bdf194867708871df67037e89e34679643ad1ba">here</a>. <a href="https://github.com/jelyman2/jelyman2.github.io/commit/a4ed6e097b9bbe86ef12453704a8e419ee3a0eed">Here</a>’s where I pulled it).</p><p>For the record, before this post: 92,205 words. With this post: 92,392 words.</p></div>