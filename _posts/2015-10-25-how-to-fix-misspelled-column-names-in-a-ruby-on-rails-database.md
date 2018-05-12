---
id: 220
title: How to Fix Misspelled Column Names in a Ruby on Rails Database
date: 2015-10-25 23:35:59 +0000
author: Johnathan Lyman
layout: post

permalink: "/2015/10/how-to-fix-misspelled-column-names-in-a-ruby-on-rails-database.html"
categories:
- Blog
---
<div class="kg-card-markdown"><p>I came across a small issue this afternoon while building out one of my first Ruby on Rails apps. When I generated the database table, I misspelled a column name. Luckily for me, it’s easy enough to fix and this is how I did it.</p><h3 id="1createanewmigration">1. Create a New Migration</h3><p>At the command line from within your Rails application folder, run this:</p><style>.gist table { margin-bottom: 0; }</style><div class="gist-oembed" data-gist="jelyman2/d6017c61588d2bfbe2fa.json"></div>You’ll be generating a new database migration with the name FixColumnName (which interprets to `[timestamp]_fix_column_name.rb`) inside the `db/migrate` folder inside your rails application. Open that `.rb` file and update it so it looks something like this:<style>.gist table { margin-bottom: 0; }</style><div class="gist-oembed" data-gist="jelyman2/2e29faf460cff05f803b.json"></div>`:table_name` – the name of the table in question  <p><code>:old_column</code> – the misspelled column name<br></br><code>:new_column</code> – the correct column name</p><p>If you have multiple columns you need to change, introduce additional <code>rename_column</code> functions:</p><style>.gist table { margin-bottom: 0; }</style><div class="gist-oembed" data-gist="jelyman2/9ea9fba6529008ed08dc.json"></div>Keep in mind that after this migration, you’ll need to update your references to the column everywhere within your app.<p>Seems like a simple fix but as someone who’s relatively new to Ruby on Rails, this saved me a load of time figuring out what to do and preventing me from starting over.</p></div>