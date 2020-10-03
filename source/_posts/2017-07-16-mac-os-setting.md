---
layout: post
category: 
  - MACOS
tags: 
  - Basic Setting
published: true
title: MacOS Sierra 基本設定
date: 2017-07-16 00:00:00
---

{% asset_img banner/2017-07-16-mac-os-setting.png banner %}

是的，最近轉了新公司，用的是Macbook Pro...雖然自己本來就有一部Macbook Pro，可是都沒有怎樣用來Coding (汗)，於是設定就成為了一大難關 (?)。

於是記錄一下一些基本設定吧...

<!-- more -->
<br/>

### 系統設定

1 - Black Menu Bar

<img src="/images/post/2017-07-16-mac-os-setting-1.png">

> System Preference => General => Use Dark menu bar and Dock

2 - Dock Size

> System Preference => Dock => Size, Position on screen

3 - Trackpad

> System Preference => Trackpad

4 - Shortcut

> System Preference => Keyboard => shortcut
>
> - Spotlight => Alt+Command+space

------------------------------------

### 應用設式設定

1 - Mail

2 - Calendar

### 於 App Store 下載 應用設式

1 - Office工具

- Pages

- Numbers

- Keynote

2 - Developer工具

- Xcode

3 - 其他

- Clocker (觀看不同地區時間)

<img src="/images/post/2017-07-16-mac-os-setting-3.png">

------------------------------------

### 使用Homebrew

[Homebrew](http://brew.sh/)可以方便安裝不同的Developer tools，例如: Git，Node.js等等...

另外可以在[這裡](http://searchbrew.com/)搜尋Package。

#### 安裝 Homebrew

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

#### 使用 Homebrew 安裝 Package

    brew install <package>

#### 更新 Homebrew

    brew update

#### 更新 Homebrew Package

    brew upgrade

#### 搜尋 Package

    brew search

#### 觀看已安裝的 Package List    

    brew list

#### 已安裝的 Hoewbrew List

> - 日常工具: git node
> - Shall: zsh
> - PHP相關: php php-cs-fixer composer nginx mysql
> - 其他language: python ruby


------------------------------------

### 使用Homebrew cask

[Homebrew cask](https://caskroom.github.io/)可以安裝不同的應用程式。

#### 安裝 Homebrew cask

    brew tap caskroom/cask

#### 使用 Hoewbrew cask 安裝 Package

    brew cask install <package>

#### 更新 Package

1 - 首先安裝 Cask Upgrade

    brew tap buo/cask-upgrade

2 - 檢查所有 Package Version

    brew cu

3 - 更新所有 Package

    brew cu --all

#### 搜尋 Package

    brew cask search

#### 觀看已安裝的 List    

    brew cask list

#### 已安裝的 Hoewbrew List

> - atom
> - dropbox
> - evernote
> - firefox
> - google chrome
> - iTerm2
> - Itsycal
> - sizeup
> - Skype
> - Teamviewer
> - virtualbox
> - vlc
> - telegram-desktop
> - fork
> - Option: filezilla, xampp
