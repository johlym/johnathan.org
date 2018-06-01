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

I wanted to jot this down real quick while I work on the next version of this site. I'm using [Gulp][1] and [Browsersync][2] and for the life of me I couldn't get the reload to actually take place. Turns out I didn't specify properly what files Browsersync needs to trigger when changed. Here's the `gulp.task()` that worked for me:

```js
gulp.task('browsersync', function (callback) {  
  browserSync.init({
    proxy: 'localhost:2368',
    files: ['app/**/*.hbs', 'app/assets/scss/**/*.scss']
    
  });

  callback();
});
```

Note the `files:` array added to the `browserSync.init()` function. That's the ticket, right there. Once I did that, it was magic sauce all over again.

[1]: https://gulpjs.com
[2]: https://browsersync.io