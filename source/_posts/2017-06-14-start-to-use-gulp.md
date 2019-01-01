---
layout: post
category: 
  - Front-End
tags: 
  - Gulp
published: true
title: Gulp學習筆記
date: 2017-06-14 00:00:00
photo: /images/post/2017-06-14-start-to-use-gulp.png
---
Gulp是一個自動化構建工具。可以安裝不同的Plugin，例如:Live reload, Minify js, css等等....以方便工作。

最近因為想學習一下Webpack，所以先找回evernote的gulp筆記整理一下....(汗)

<!-- more -->
<br/>

### 準備工具

1 - 下載[Node.js](https://nodejs.org/en/)

(PS: Node.js會連著npm一拼安裝)

### 檢查版本

2 - 下載後開啟Node.js，然後檢查一下Node.js和npm的版本

    node -v
    npm -v

### 安裝Gulp

3 - 安裝Gulp到全域的環境

    npm install gulp -g

### 初始化

4 - 開一個新的資料夾，然後進入該資料夾，初始化該資料夾

    npm init

<img src="/images/post/2017-06-14-start-to-use-gulp-1.png">

之後會建立一個package.json的檔案，然後就可以安裝各類型的plugin了。package.json大概是這樣子:

<img src="/images/post/2017-06-14-start-to-use-gulp-2.png">

### 安裝plugin

5 - 只要打上npm install (xxxxxx) --save-dev就可以成功安裝, 例如:

    npm install gulp --save-dev

因為之前只是將Gulp安裝到全域的環境，所以我們還要在資料夾裡安裝一次。這時應該會自動建立一個node_modules的資料夾。  

### 常用Plugin

以下是我常用的Plugin:

- browser-sync - Live Reload的效果，可以自動同步檔案
- gulp - Gulp安裝
- gulp-clean-css - Minify CSS
- gulp-file-include - 類似PHP include的效果, 主要用在header和footer裡
- gulp-rename - 重新命名檔案 (將minify後的檔案加上.min)
- gulp-sass - 用來使用SASS, SCSS
- gulp-uglify - Minify JS

### 資料夾架構

首先先說明自己的資料夾架構:

<img src="/images/post/2017-06-14-start-to-use-gulp-3.png">

- app - 裝著還沒minify的CSS file
- build - 所有改動也是在這個資料夾裡做，包括了html, scss, js的檔案
- js - Minify後的js
- stylesheets - Minify後的css

### 設定Gulp

6 - 我們需要建立一個gulpfile.js的檔案來做設定, 以下是我的gulpfile.js的設定

    var gulp        = require('gulp'),
        cleanCSS    = require('gulp-clean-css'),
        rename      = require("gulp-rename"),
        uglify      = require('gulp-uglify'),
        sass        = require('gulp-sass'),
        fileinclude = require('gulp-file-include'),
        gutil       = require('gulp-util'),
        browserSync = require('browser-sync').create();


    // Minimum js file
    gulp.task('uglify', function() {
      gulp.src('build/js/*.js')
      .pipe(uglify())
      .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
      .pipe(rename(function(path) {
        path.basename += ".min";
        path.extname = ".js";
      }))
      .pipe(gulp.dest('js/'))
      .pipe(browserSync.stream());
    });

    // Write SASS file
    gulp.task('sass', function(){
      gulp.src('build/sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest("app/css"))
      .pipe(cleanCSS())
      .pipe(rename(function(path) {
        path.basename += ".min";
        path.extname = ".css";
      }))
      .pipe(gulp.dest('stylesheets/'))
      .pipe(browserSync.stream());
    });

    // Include HTML file
    gulp.task('fileinclude', function() {
      gulp.src(['build/*.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./'))
      .pipe(browserSync.stream());
    });

    // Gulp Watch
    gulp.task('watch', ['sass','fileinclude','uglify'], function() {
      browserSync.init({
        server: {
            baseDir: "./",
        },
        reloadDelay: 100
      });
      gulp.watch('build/*.html', ['fileinclude']);
      gulp.watch('build/sass/*.scss',['sass']);
      gulp.watch('build/js/*.js',['uglify']);
      // Other watchers
    });

    // Gulp
    gulp.task('default', ['watch']);

### 運行Gulp

7 - 因為我在gulpfile.js裡設定了

    gulp

### 循環使用Gulp

如果將來想在另外的資料夾使用gulp，可以將package.json和gulpfile.js直接複製去資料夾裡，然後打上:

    npm install

那就會直接裝上package.json的plugin了，然後就可以打上gulp運行了。

------------------------------------
參考網址:
[Gulp 學習 1 - 安裝與執行 - OXXO.STUDIO](http://www.oxxostudio.tw/articles/201503/gulp-install-webserver.html)
[介紹 · gulp 學習筆記](https://kejyuntw.gitbooks.io/gulp-learning-notes/content/index.html)
