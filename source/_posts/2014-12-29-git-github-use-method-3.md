---
layout: post
category: 
  - Git
tags: 
  - Git
published: true
title: Git - 使用SSH對Github進行操作(3)
date: 2014-12-29 00:00:00
---

每一次上傳檔案到github時也要輸入帳號及密碼是一件很麻煩的事情, 如果使用SSH的話, 就可以避免了這些煩惱了 (笑)

參考: [Windows使用ssh對Github進行操作 - 愛流浪的小風- 點部落](http://www.dotblogs.com.tw/kirkchen/archive/2013/04/23/use_ssh_to_interact_with_github_in_windows.aspx)

以下是節錄下來的指令:

<!-- more -->

<br/>

1 - 首先進入指定的目錄

  cd /c/users/your_username

2 - 建立public key和private key

  ssh-keygen -t rsa -C "youremail@email.com"

3 - 將SSK key新增到github上 - 參考: [Windows使用ssh對Github進行操作 - 愛流浪的小風- 點部落](http://www.dotblogs.com.tw/kirkchen/archive/2013/04/23/use_ssh_to_interact_with_github_in_windows.aspx)

<br/>

可能會發現上傳檔案還是要輸入帳號及密碼的...這是因為各repository的git clone 還沒有改回SSH...我們平常拿取github的專案通常是使用HTTP

  $git clone https://github.com/test/test.git

其實是可以輸入SSH

  $git clone git@github.com:test/test.git

所以, 要進去repository的目錄把HTTP改回SSH, 檢查是否使用HTTP

  $git remote -v

如果看到的是這樣

  origin  https://github.com/test/test.git (fetch)
  origin  https://github.com/test/test.git (push)

那就需要改回SSH, 指令如下:

  $git remote set-url origin git@github.com:test/test.git

------------------------------------
參考網址:
[Changing a remote's URL - User Documentation](https://help.github.com/articles/changing-a-remote-s-url/)
