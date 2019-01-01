---
layout: post
category: 
  - Ubuntu
tags: 
  - Ubuntu
published: true
title: Ubuntu起手 - 1.安裝及使用速成輸入法
date: 2016-01-17 00:00:00
---

現在最新的版本是15.01，可以到這裡下載:

[Ubuntu 正體中文站](http://www.ubuntu-tw.org/modules/tinyd0/)

<!-- more -->

<br/>

#### 安裝Ubuntu

下載回來後安裝在VirualBox(Windows系統)上就可以使用了，跟普通安裝Windows沒甚麼分別。

如果在Windows系統上弄ubuntu USB，可以下載[Universal USB Installer](http://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/)然後使用。

<br/>

#### 安裝速成輸入法

相信香港的朋友們安裝完Ubuntu後最煩惱的是沒有速成輸入法吧，安裝步驟如下:

1 - 在終端機(Ctrl+Alt+T)上執行指令，安裝完成後重新開機

    sudo apt-get install ibus-table-quick

2 - 設定 > 語言設定 > 鍵盤輸入法系統 > IBus

3 - 設定 > 文字輸入 > +

4 - 有"漢語(速成古典版)(IBus)", "漢語(速成第三代)(IBus)", "漢語(速成第五代)(IBus)"選擇，分別是:

>速成第三代 (Quick 3) - 和 Windows 常用速成輸入法幾乎相同，只針對輸入港台繁體中文 (包括四千多香港字)。
>
>速成第五代 (Quick 5) - 擴充至支援輸入簡繁中文和日韓漢字，但不少字的編碼和第三代 (Windows 的速成編碼) 有分別。
>
>速成古典版 (Quick Classic) - 和 Windows 常用速成輸入法幾乎相同，只針對輸入港台繁體中文

參考網址: [配置 IBus - FlossDoc](http://wiki.linux.org.hk/w/Configure_IBus)

5 - 如要設置按一下space就會轉第二行的話，可向右上方的語言標示按右鍵 > 設置 > 詳請 > Behavior of space key: Next Page
