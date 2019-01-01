---
layout: post
category:
  - SEO
tags: 
  - Google-Analytics
published: true
title: GA - 使用 trackEvent 追蹤點擊數
date: 2016-06-14 00:00:00
---

    _trackEvent(category, action, opt_label, opt_value, opt_noninteraction)

<!-- more -->

<br/>

#### 方法 1

HTML:

    <a href="#" onClick="javascript: _gaq.push(['_trackEvent', 'Videos', 'Play', 'First Birthday']);">Play</a>

<br/>

#### 方法 2

HTML:

    <a href="#" id="link">Play</a>

Javascript:

    document.getElementById("link").onclick = function() {
      _gaq.push(['_trackEvent', 'Videos', 'Play', 'First Birthday']);
    };

------------------------------------
參考網址:

[運用再行銷功能接觸網站舊訪客和應用程式先前的使用者 - AdWords說明](https://support.google.com/adwords/answer/2453998?hl=zh-Hant)

[Event Tracking - Web Tracking (ga.js) - Google Developers](https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#intro)

[_trackPageview & _trackEvent – 網頁與訪客行為追蹤 - Google Analytics 網站分析資訊網](http://ga.awoo.com.tw/_trackpageview-_trackevent/)

[在 Google Analytics 中追蹤事件 - 熊屋 - 技術小記](http://blog.kumaya.co/2014/07/16/add-event-tracking-into-ga/)
