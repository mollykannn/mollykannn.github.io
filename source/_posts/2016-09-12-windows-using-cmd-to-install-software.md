---
layout: post
category: 
  - Windows
tags: 
  - Chocolatey
published: true
title: Windows - 使用cmd快速安裝軟件
date: 2016-09-12 00:00:00
photo: /images/post/2016-09-12-windows-using-cmd-to-install-software.png
---
每一次洗機後或是在新電腦安裝軟件是一件很麻煩的事情，要到各官方網站下載安裝檔後然後安裝。使用[Chocolatey](https://chocolatey.org/)可以使用windows上的cmd打下command來安裝大部分軟件，而且還可以檢查更新和安裝最新版本，實在太方便了 (哭)。

如果有用MAC OS的話[Chocolatey](https://chocolatey.org/)就像[Homebrew cask](https://caskroom.github.io/)一樣。Linux的話就像apt-get一樣。

<!-- more -->
<br/>

### 安裝Chocolatey

    @powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" &amp;&amp; SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin

這樣就安裝完成了。十分簡單XD

<br/>

### 一般指令

#### 安裝package

    choco install <package>

    eg: choco install atom

#### 列出已安裝清單

    choco list --local-only

#### 尋找package

    choco search <package>

> 也可以利用choco官網的[search package](https://chocolatey.org/packages)功能尋找。

#### 更新所有package

    choco update all

#### 解除安裝package

    choco uninstall <package>
