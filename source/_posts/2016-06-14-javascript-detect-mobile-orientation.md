---
layout: post
category: 
  - Front-End
tags: 
  - Javascript
published: true
title: Javascript - 檢查手機正在使用的方向
date: 2016-06-14 00:00:00
photo: /images/post/2016-06-14-javascript-detect-mobile-orientation.jpg
---
在做RWD的時候，很多時候也會設定當手機直放或橫放時，會顯示甚麼指定的東西。以下是利用Javascript來檢查手機正在使用的方向的編碼。
<!-- more -->

    function readDeviceOrientation() {

        if (Math.abs(window.orientation) === 90) {
          // Landscape
        } else {
          // Portrait
        }
    }

<br/>

#### 使用方法

    window.onorientationchange = readDeviceOrientation();
    window.onload = readDeviceOrientation();

------------------------------------
參考網址:

[Detect iOS Device Orientation with JavaScript](http://www.williammalone.com/articles/html5-javascript-ios-orientation/)
