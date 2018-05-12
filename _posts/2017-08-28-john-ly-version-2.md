---
id: 291
title: John.ly Version 2
date: 2017-08-28 10:43:52 +0000
author: Johnathan Lyman
layout: post

permalink: "/2017/08/john-ly-version-2.html"
categories:
- Blog
---
<div class="kg-card-markdown"><p>Last week I hacked together a new version of my blog (this site) in hopes that I could actually create what I had envisioned in my head all along. So far, I'm quite pleased with how it turned out. I look forward to hacking on it some more, but this is a great start.</p><p><img src="https://f000.backblaze.com/file/johnly-static-files/posts/johnlyv2.jpg#med" alt="john.ly v2 screenshot"></p><p>There were a few things I had to have in this version.</p><p><strong>Easier to read type</strong>. I spent a few hours poking around the various font circles on the Interwebs and came across <a href="https://www.myfonts.com/fonts/itc/charter/">ITC Charter</a>. I really like the way it renders on a page and from what I can tell, <a href="https://www.myfonts.com/fonts/itc/charter/">Medium.com</a> also uses Charter. I guess I'm in good company?</p><p><strong>Wider single-column layout</strong>. It didn't have to be large, but something larger than before in order to accommodate flexibly-sized images. The CSS allows for image URLs to contain <code>#med</code> and <code>#big</code> and the content will eventually accommodate that <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><p><strong>A touch of color</strong>. The minimal design in the previous version was nice, but it felt bland. The light-blue links weren't cutting it.</p><p><strong>Navigation that's always available</strong>. Scrolling to the top is no longer a thing.</p><p><strong>Be small-ish</strong>. I wanted to keep the theme zip under a meg. The uncompressed them folder is around 760KB on my machine. The largest assets are the font files for each format (woff, woff2, eot, otf) at around 200-ish KB. The homepage, when loaded, sans tracking scripts <sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup> is roughly 250KB with jQuery. A blog post will vary depending on images.</p><p>I've also shared the code on <a href="https://github.com/johlym/john.ly_v2">GitHub</a> for those interested. I can't say the repo will always be updated but I'll do the best I can to remember.</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>I still have to figure out how to style <code>&lt;p&gt;</code> differently when they only contain an <code>&lt;img&gt;</code>. I'm thinking jQuery might be my only way out of this and applying a specific class to override the <code>max-width</code> <a href="#fnref1" class="footnote-backref">↩︎</a></p></li><li id="fn2" class="footnote-item"><p>Yes, there are a couple. I use Full Story from time to time to see how folks interact with my site and Pingdom tracks page load performance <a href="#fnref2" class="footnote-backref">↩︎</a></p></li></ol></section></div>