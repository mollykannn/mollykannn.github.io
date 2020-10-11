---
layout: post
category: 
  - Front-End
tags: 
  - Share Button 
  - Like Button
published: true
title: Share/Like Button集合
date: 2018-12-16 00:00:00
---

{% asset_img banner banner/2018-12-16-social-media-share-like-button.png %}

社交網站上的Share/Like Button集合。

<!-- more -->

### Share Button

Facebook

```html
    <a href="http://www.facebook.com/sharer/sharer.php?u=(URL)" class="(...)" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=570');return false;" target="_blank" title="Share on Facebook"></a>
```


Google+

```html
    <a href="https://plus.google.com/share?url=(URL)" class="(...)" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=500');return false;" target="_blank" title="Share on Google+"></a>
```

Twitter
    
```html
    <a href="https://twitter.com/intent/tweet?text=(TITLE)&url=(URL)" class="(...)" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" target="_blank" title="Share on Twitter"></a>
```

Email

```html
    <a href="mailto:(EMAIL ADDRESS)?subject=(TITLE)&body=(CONTENT)"></a>
```

Whatsapp

```html
    <a href="whatsapp://send" data-text="(CONTENT)" data-href="(URL)"></a>
```

Line

```html
    <a href="http://line.naver.jp/R/msg/text/?(URL)"></a>
```

<br/>

### Like Button

1. [Facebook](https://developers.facebook.com/docs/plugins/like-button)
2. [Google+](https://developers.google.com/+/web/+1button/)
3. [Twitter](
https://about.twitter.com/resources/buttons#tweet)


是咁的﹐其實仲有[Share Button Auto Generator](https://simplesharingbuttons.com/#preview)可以作為懶人參考。

------------------------------------
參考網址:

[Line教學: LINE 分享按鈕安裝在網站或部落格中](
http://linetw.blogspot.hk/2014/05/how-to-set-line-button-in-web.html?m=1)
