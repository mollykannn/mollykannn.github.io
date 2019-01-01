---
layout: post
category: 
  - Git
tags: 
  - Git
published: true
title: Git - 基本指令(1)
date: 2014-12-28 00:00:00
---

現在很多網站也有Git的教學, 這篇只是記錄而已。

<br/>

## Git有甚麼用途? GitHub又是甚麼?

Git是檔案互相輸送的系統, 相對於FTP, Git會把過住的記錄保存, 而且可以把檔案復原, 更重要一點是: 如果兩個人同時修改同一個檔案, 當檔案上傳時, 他們的資料會保存在同一個檔案上。

GitHub是一個使用Git輸送檔案的網站, 大概像web hosting的東西。

---
可以參考一下:

[Git的基本介紹 - 連猴子都能懂的Git入門指南](http://backlogtool.com/git-guide/tw/intro/intro1_1.html) - 4頁的Git介紹寫得很不錯的 (笑)

[GitHub 簡介](http://applying-git-on-android-project.readthedocs.org/en/latest/Ch1/04-github-brief-intro.html)

<!-- more -->

<br/>

## 準備工具

下載[Git](http://git-scm.com/)

申請一個[GitHub](https://github.com/)的帳號

<br/>

## Git設定

1 - 打開Git Bash, 設定user name 跟 email

  $ git config --global user.name "your user name"
  $ git config --global user.email youremail@email.com


2 - 前往指定目錄/資料夾

  cd (指定目錄/資料夾)
  Eg: cd ~/desktop

3 - 退回上一層可以使用

  cd ..

<br/>

## GitHub指令

4 - 取得GitHub上的專案

  $git clone (GitHub上的URL)
  Eg: $git clone https://github.com/test/test.git

5 - 新增專案可以看GitHub上的Document - [Create A Repo - User Documentation](https://help.github.com/articles/create-a-repo/)

6 - 如要新增/修改檔案, 傳回GitHub需要打上

  $git add .
  $git commit -m "your description"
  $git push origin master

7 - 如要刪除檔案, 傳回GitHub需要打上

  $git rm -rf yourfile
  $git commit -m "your description"
  $git push origin master

8 - 如要更改檔案名稱, 傳回GitHub需要打上

  $git mv old_filename new_filename
  $git commit -m "your description"
  $git push origin master

8 - 取回已更新的GitHub檔案, 需要打上

  $git pull

------------------------------------
參考網址:
[Git - First-Time Git Setup](http://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
