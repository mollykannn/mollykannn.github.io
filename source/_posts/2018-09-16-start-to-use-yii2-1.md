---
layout: post
category: 
  - Back-End
tags: 
  - Yii
published: true
title: Yii2學習筆記 (1)
date: 2018-09-16 00:00:00
photo: /images/post/2018-09-16-start-to-use-yii2-1.png
---

從Evernote上拿回一些筆記....

<!-- more -->

### 安裝 [Composer](https://getcomposer.org/)

    curl -sS https://getcomposer.org/installer | php 
    mv composer.phar /usr/local/bin/composer

<br/>

### 安裝Yii2 Basic / Advanced

Yii2 Basic跟Advanced最大的分別應該是前者只有BackEnd，而後者有FrontEnd+BackEnd。兩者之間的config file位置也會有所不同。 

    // 安裝Yii2 Basic (Backend)
    composer create-project --prefer-dist yiisoft/yii2-app-basic yii2-basic 
    // 安裝Yii2 Advanced (Frontend + Backend)
    composer create-project --prefer-dist yiisoft/yii2-app-advanced yii2-advanced

<br/>

### 存取舊檔案資料

先安裝回Composer的Plugin

    php composer.phar install 
    composer install

初始化php

    php init / init

#### 安裝 Composer 時注意

- 如發現安裝失敗

    1. composer.json改為 "minimum-stability": "dev"
    
    2. 然後輸入 composer install --ignore-platform-reqs

- [解决使用 Composer 的时候提示输入 Token](https://getyii.com/topic/32)

<br/>

#### 更新 Composer package

    composer update

<br/>

#### 啟用Yii2

Yii2 Basic
    
    php yii serve 
    // 選擇Port
    php yii serve --port=8888

Yii2 Advanced
    
    // 啟動BackEnd
    php yii serve --docroot=backend/web
    // 啟動FrontEnd
    php yii serve --docroot=frontend/web

------------------------------------
參考網址:

[入门（Getting Started）: 安装 Yii（Installing Yii） - Yii 2.0 权威指南 - 文档 - Yii Framework 中文网](https://www.yiichina.com/doc/guide/2.0/start-installation)
