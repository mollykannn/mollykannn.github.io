---
layout: post
category: 
  - Blog
tags: 
  - Jekyll
published: true
title: Jekyll - Windows 10 Setup
date: 2016-08-05 00:00:00
photo: /images/post/2016-08-05-jekyll-windows-setup.png
---
## Jekyll
[Jekyll](https://jekyllrb.com/)是使用Ruby開發的靜態網站生產器，可以存放在Github裡，現在這個Blog也是使用Jekyll的。因為每一次洗機後在Windows安裝Jekyll總是會遇到錯誤，還是記錄一下步驟好了。
<!-- more -->

<br/>

#### 安裝 Ruby 和 Development Kit
[http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/)

<br/>

#### 開啟Terminal
檢查Ruby是否已經安裝在Windows上

    ruby -v

> 如看不到version no. ，就需要增加System variable path
>
> My Computer -> Control Panel -> System Security -> System -> Advanced system settings -> Environment Variable -> System variable, Path, Edit
>
> 然後加上
>
> C:\tools\ruby23\bin

<br/>

#### 將DevKit解壓到

    Desktop\DevKit

<br/>

#### 開啟Terminal，安裝DevKit

    cd DevKit
    ruby dk.rb init
    ruby dk.rb install

<br/>

#### 安裝Jekyll

    gem install jekyll

<br/>

#### 執行Jekyll

    jekyll serve

<br/>

---------------------------------------

<img src="/images/post/2016-08-05-jekyll-windows-setup-1.png">

## Bundler
[Bundler](http://bundler.io/)是管理Gem的工具。

<br/>

#### 如何安裝Bundler?

    gem install bundler

<br/>

#### 將Bundler的plugin放到Gemfile上，Eg:

    source 'https://rubygems.org'
    gem 'nokogiri'
    gem 'rack', '~>1.1'
    gem 'rspec', :require => 'spec'

<br/>

#### 安裝所有Bundle plugin

    bundle install

<br/>

#### 執行jekyll和Bundle

    bundle exec jekyll serve
