---
id: 226
title: How I Made Jekyll Post Generation Just a Touch Easier
date: 2015-12-07 17:44:26 +0000
author: Johnathan Lyman
layout: post

permalink: "/2015/12/how-i-made-jekyll-post-generation-just-a-touch-easier.html"
categories:
- Blog
---
<div class="kg-card-markdown"><p>Now that I’m running my blog using Jekyll, one thing I’ve already found to be rather frustrating is the post generation process. I have a blank <code>.md</code> template I open, save in a new location, then edit, but that seems cumbersome, to me. What I decided to do instead is write a quick Ruby script that generated a post <code>.md</code> file for me based on the information I provide.</p><h2 id="thoughtprocess">Thought Process</h2><p>I wanted to keep it simple, and just do only what I really needed. I don’t need any fancy logic or checking. I know <code>_posts</code> will be there because I put <code>post_generator.rb</code> inside my Jekyll directory.</p><h2 id="workingexample">Working Example</h2><p>Here’s my code as it stands inside right now:</p><style>.gist table { margin-bottom: 0; }</style><div class="gist-oembed" data-gist="jelyman2/0043d1411df30d05c71b.json?file=post_generator.rb"></div>It’s functional. It’s not clean and could be refactored a but, but it works.<h2 id="improvements">Improvements</h2><p>A few things that came to mind after I finished: – Use the system date if none is provided – Re-format the title with title-casing. Without <code>ActiveSupport</code> in Rails, I’ll have to either require it as a gem or write something by hand. I’m thinking the former. – Allow the user to write the post right there in the command line and not have to open a text editor. – Allow the user to choose which text editor to use at the prompt (perhaps with detection?)</p><p>It’s a good first draft and it serves the purpose I had in mind. Here’s the <a href="https://github.com/jelyman2/jekyll-post-generator">GitHub repo</a>.</p></div>