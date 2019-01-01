---
layout: post
category: 
  - Front-End
tags:
  - devtools
published: true
title: Remote Debugging on Android with Chrome
date: 2014-12-19 00:00:00
---

前幾天在尋找如何在手機上可以看到localhost Web page, 發現Google Chrome Developer Tool已經可以了 (汗)

參考:
[Remote Debugging on Android with Chrome](https://developer.chrome.com/devtools/docs/remote-debugging)

基本上照著以上的做法就成功了 (笑)
<!-- more -->

---------------------------------


我的Sony Z2就很順利地成功了, 不過是找USB Debugging找了很久

方法: [Sony Z 哪邊有「開發」及「USB除錯」選項](https://tw.knowledge.yahoo.com/question/question?qid=1513110803574)

---------------------------------

然後今天拿住Samsung S2做以上步驟, 發現不成功, USB devices也裝上了也是不行...後來發現要裝上adb.exe才行 (可惡)...

<br />

步驟如下:

1 - 首先下載[adb.exe](http://adbshell.com/download/download-adb-for-windows.html)

2 - 在windows選項搜尋cmd, 然後找回adb.exe的目錄

    cd downloads\adb

3 - 運行adb.exe

    adb.exe

4 - 抓回devices

    adb.exe devices

這樣就可以了 (笑)

------------------------------------
參考網址:
[No devices detected. under Chrome://inspect#devices](http://forums.udacity.com/questions/100147474/no-devices-detected-under-chromeinspectdevices)
