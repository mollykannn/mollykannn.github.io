---
layout: post
category: 
  - Git
tags: 
  - Git
published: true
title: Git - 建立Web page/Branch使用(2)
date: 2014-12-28 00:00:00
---

學懂了git的基本指令後, 可以開始慢慢玩GitHub了 (笑), 每一個Github的帳號也會有一個domain name, 毛利的domain name是: [http://mollykannn.github.io/](http://mollykannn.github.io/) 。如果要使用該domain name的話, 可以將repository改為: "username.github.com", 然後branch選取master就可以了 (branch default為master, 所以可以不用選取啦...)。

如果其他的repository也想弄web page的話, 那麼branch就要選取gh-pages了。這樣如果repository的名稱是test, 那麼URL就會是 "username.github.com/test"了。那麼...Branch (分支)是甚麼呢? 那又如果修改branch呢? 可以看: [什麼是分支? - 連猴子都能懂的Git入門指南](http://backlogtool.com/git-guide/tw/stepup/stepup1_1.html) 。以下會介紹一下指令:

<!-- more -->

<br/>

增加branch以及在local裡使用該branch

  $git checkout -b branchname

將branch增加至github

  $git push origin branchname

轉用別的branch

  $git checkout branchname

在local上刪除branch

  $git branch -D branchname

在github上刪除branch

  $git push origin :branchname

------------------------------------
參考網址:
[Create a new branch with git and manage branches · Kunena/Kunena-Forum Wiki](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)
