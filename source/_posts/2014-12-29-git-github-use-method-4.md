---
layout: post
category: 
  - Git
tags: 
  - Git
published: true
title: Git - 使用Dropbox建立Git倉庫(4)
date: 2014-12-29 00:00:00
---

如果想將某些檔案分享給指定的朋友們一起修改而不常公開給所有人看到, 可以使用dropbox (其實其他的雲端儲存網站也可以的)。

參考網址: [使用Dropbox建立Git私有仓库](http://ibruce.info/2013/12/30/git-with-dropbox/) , 以下是節錄下來的指令:

<!-- more -->

<br/>

#### 建立 Git Server

1 - 首先建立一個資料夾(Eg: repository), 然後共同分享給指定的朋友

2 - 進入該資料夾目錄

    cd ~/dropbox/repository

3 - 建立專案

    mkdir repository.git

4 - 進入該專案

    cd repository.git

5 - 初始化為git repository，即git server端的資料

    $git init --bare

<br/>

#### 建立本地倉庫

1 - 建立資料夾, 進入該資料夾目錄

    cd ~/dropbox/project

2 - 初始化

    $git init

<br/>

#### 上傳到Git Server

1 - Remote add

    $git remote add origin ~/dropbox/repository/repository.git

2 - 上傳檔案

    $git add .
    $git commit --all -m "description"
    $git push origin master
