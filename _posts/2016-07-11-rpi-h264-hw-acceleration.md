---
id: 261
title: Live Streaming with Hardware Acceleration using a Raspberry Pi and RTMP/HLS
date: 2016-07-12 01:42:00 +0000
author: Johnathan Lyman
layout: post

permalink: "/2016/07/rpi-h264-hw-acceleration.html"
categories:
- Programming
tags:
- hls
- nginx
- raspberry pi
- rtmp
---
If you’ve been following my blog post series on the development of my ever so useful cat cam, powered by a Raspberry Pi, you’ll know I’ve made several attempts at a more stable and scalable streaming solution for my Cat Cam. As it stands today, I’ve been using Motion. While it’s a decent tool, Bandwidth has been my primary concern and I’d like to be able to stream real-time without sucking up what measly bits my ISP gives me if more than a few folks decide to show interest.

So far we’ve tried `ffmpeg` => `ffserver` and that [turned out][3] exactly how you probably thought it would. Next, I tried [swapping `ffserver`][4] with an Nginx-powered RTMP server. While not an entirely fruitless endeavor, there were [some blockages][5] that I just couldn’t get past.

I received a suggestion from a colleague to fire up the Raspberry Pi’s hardware encoder/decoder. Up until yesterday, I didn’t know this was a thing. Shame on me for not looking into it. So that’s what we’re going to cover in tonight’s post: taking some of what we learned from our first RTMP attempt and make the hardware do all the work. With any luck, we should see some real perf gains, possibly enough for live streams to start instantly (which would make web players happy).

Since I felt like including it here would deviate from the purpose of this post too much, I wrote up how to [Add RTMP Support][6] to Nginx if you installed it via `apt-get` like me. If you’re in that boat, take a moment to read over that post then come back to this one.

Setting up `ffmpeg` to use hardware `H.264` encoding used to be a fat challenge, but they’ve since added support to the official codebase. If you followed my [original ffmpeg][7] post, you’ll have a recent enough version that includes this code, but we’ll still need to compile it.

What we’re looking for this time is the [OpenMAX][8] IL (Integration Layer) acceleration module.

```
pi@pi:/usr/src/ffmpeg $ sudo ./configure --enable-omx --enable-omx-rpisudo makesudo make install
```

That’ll take some time, as I’ve said before. You’ll have enough free time on your hands to get make something to eat. Come back in an hour or so and it should be done.

**NOTE:** If you run into _ERROR: OpenMAX IL headers not found_, then you’ll need to run `apt-get install libomxil-bellagio-dev`. Thanks, lordofduct in the comments for that one!

From this point forward, we’ll be starting `ffmpeg` similarly to how we did it [before][9] but with a slightly different codec.

```
ffmpeg -i /dev/video0 -framerate 30 -video_size 720x404 -vcodec h264_omx -maxrate 768k -bufsize 8080k -vf "format=yuv420p" -g 60 -f flv rtmp://example.com:8081/hls/live
```

I confirmed VLC is able to play the stream, which is excellent, and there are no lag or jitter issues. It’s about 10-15 seconds behind live, which is totally fine.

I was able to set up an HTML5 player using tools from [Bitmovin][10]. I’m not entirely happy with this setup, though, as the player isn’t free and only HLS is supported, right now1. In my next post I’ll cover a new idea that came to mind when looking into the coolness of [Ruby on Rails 5][11]: [WebSockets][12].

**Update July 11, 2017:** [@HPGMiskin][13] pointed out `libomxil-bellagio-bin` is not a thing. I've pulled that from the optional step for missing OpenMAX headers.

[3]: //2016/07/fighting-ffmpeg.html
[4]: /2016/07/stream-rtmp.html
[5]: /2016/07/stream-rtmp.html
[6]: /2016/07/rtmp-nginx-apt.html
[7]: /2016/07/stream-rtmp.html
[8]: https://www.khronos.org/openmax/
[9]: /2016/07/stream-rtmp.html
[10]: http://bitmovin.com
[11]: http://weblog.rubyonrails.org/2016/7/2/this-week-in-rails-rails-5-is-out-with-new-guides-and-more/
[12]: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
[13]: https://twitter.com/HPGMiskin