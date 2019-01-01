---
layout: post
category : 
  - Back-End
tags : 
  - PHP
published: true
title: PHP - 使用指定gmail傳送給其他email
date: 2014-11-13 00:00:00
---
做學校功課要用自己的Gamil send email, 然後發現內容用不到html格式....找了好久好久才找到方法/_\

<!-- more -->
---------------------------------------

方法如下:

  $headers = "From: john@example.com\n";
  $headers .= "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1";

網上普遍一般都是\r\n, 可是原來\r在Gmail上是用不到的..../_\

---------------------------------------
參考網址:
[Getting your PHP HTML email to render in Gmail | John does Design](http://johndoesdesign.com/blog/2012/php/getting-your-php-html-email-to-render-in-gmail/)
