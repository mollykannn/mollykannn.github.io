---
layout: post
category: 
  - MACOS
tags: 
  - Software
published: true
title: MACOS - Shadowsocks使用方法
date: 2018-09-17 00:00:00
---

翻牆程式，從Evernote上拿回紀錄。

<!-- more -->

### 安裝 [Shadowsocks](https://shadowsocks.org)

    brew install shadowsocks-libev

<br/>

### 設定 shadowsocks-libev.json

    {
    "server":"(server IP)",
    "server_port":(server port),
    "local_address": "(local address)",
    "local_port":(local port),
    "password":"(password)",
    "timeout":600,
    "method":"aes-256-cfb",
    "fast_open": false
    }

<br/>

### 開啟 Shadowsocks

    ss-local -c /usr/local/etc/shadowsocks-libev.json

<br/>

#### 設定開機後自動開啟 Shadowsocks

    ln -sfv /usr/local/opt/shadowsocks-libev/*.plist ~/Library/LaunchAgents
    $ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.shadowsocks-libev.plist

<br/>

#### 關閉自動開啟 Shadowsocks

    launchctl remove homebrew.mxcl.shadowsocks-libev

<br/>

#### 關閉 Shadowsocks (Kill port)

    lsof -ti:1901 | xargs kill -9

<br/>

#### 其他設定 

> Google Chrome => SwitchyOmega => 設定Sock5

------------------------------------
是咁的，其實有GUI版嘅Shadowsocks可以用，叫[Shadowsocks X](https://www.sednax.com/download.php)。其實唔洗裝得咁辛苦（逃