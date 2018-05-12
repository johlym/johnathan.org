---
id: 303
title: Fixing Browsersync Not Reloading
date: 2017-12-08 10:52:00 +0000
author: Johnathan Lyman
layout: post

permalink: "/2017/12/fixing-browsersync-not-reloading.html"
categories:
- Programming
tags:
- browsersync
- javascript
---
<div class="kg-card-markdown">

I wanted to jot this down real quick while I work on the next version of this site. I'm using <a href="https://gulpjs.com">Gulp</a> and <a href="https://browsersync.io">Browsersync</a> and for the life of me I couldn't get the reload to actually take place. Turns out I didn't specify properly what files Browsersync needs to trigger when changed.

Here's the <code>gulp.task()</code> that worked for me:<code></code>
<pre><code class="hljs javascript">gulp.task(<span class="hljs-string">'browsersync'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">callback</span>) </span>{  
  browserSync.init({
    <span class="hljs-attr">proxy</span>: <span class="hljs-string">'localhost:2368'</span>,
    <span class="hljs-attr">files</span>: [<span class="hljs-string">'app/**/*.hbs'</span>, <span class="hljs-string">'app/assets/scss/**/*.scss'</span>]
    
  });

  callback();
});</code></pre>

Note the <code>files:</code> array added to the <code>browserSync.init()</code> function. That's the ticket, right there.

Once I did that, it was magic sauce all over again.

</div>