---
layout: post
category: 
  - Front-End
tags: 
  - Webpack
published: true
title: Webpack學習筆記
date: 2017-06-21 00:00:00
photo: /images/post/2017-06-21-start-to-use-webpack.png
---
Webpack是一個模組整合工具。可以安裝不同的Plugin，例如:Live reload, Minify js, css等等。

看見那麼多人在用Webpack，而且Gulp也有一段時間沒更新了，也想學習一下react。所以就來學習一下Webpack吧。

<!-- more -->
<br/>

### 準備工具

1 - 下載[Node.js](https://nodejs.org/en/)

(PS: Node.js會連著npm一拼安裝)

### 檢查版本

2 - 下載後開啟Node.js，然後檢查一下Node.js和npm的版本

    node -v
    npm -v

### 初始化

3 - 開一個新的資料夾，然後進入該資料夾，初始化該資料夾

    npm init

<img src="/images/post/2017-06-21-start-to-use-webpack-1.png">

之後會建立一個package.json的檔案，然後就可以安裝各類型的plugin了。package.json大概是這樣子:

<img src="/images/post/2017-06-21-start-to-use-webpack-2.png">

### 安裝Webpack和Webpack-dev-server

4 - 安裝Webpack和Webpack-dev-server到資料夾裡

    npm install webpack --save-dev
    npm install webpack-dev-server --save-dev

### 資料夾架構

首先先說明自己的資料夾架構:

<img src="/images/post/2017-06-21-start-to-use-webpack-3.png">

- dist - output出來的檔案也會裝在這個資料夾
- src - js跟sass改動也是在這個資料夾裡
- webpack.config.js, postcss.config.js - 等一下會用到的檔案

### 插入JS檔案

5 - 先在src裡建立一個index.js檔案

    document.write("Hello World");

6 - 建立index.html

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <script src="dist/index.js" charset="utf-8"></script>
      </head>
      <body>
      </body>
    </html>

6 - 建立webpack.config.js

    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'index.js',
        path: path.resolve( _ _ dirname, 'dist') //請刪走"_ _ "的空格
      }
    }

7 - 分別開2個cmd各自打下:

    webpack --watch

跟

    webpack-dev-server --devtool eval --progress --colors

<img src="/images/post/2017-06-21-start-to-use-webpack-4.png">
<img src="/images/post/2017-06-21-start-to-use-webpack-5.png">

這樣就做了基本webpack的型態了。如果改js或html的檔案改變了，webpack-dev-server會自動reload的XD。太方便了XD。


### 插入CSS檔案

8 - 由於Webpack不懂JS以外的檔案，所以我們插入CSS還要安裝style-loader跟css-loader

    npm install style-loader --save-dev
    npm install css-loader --save-dev

9 - 在src建立style.css檔案

    body {
      color: red;
    }

10 - 修改index.js

    require("./style.css");
    document.write("Hello World");

11 - 修改webpack.config.js

    const path = require('path'),
          webpack = require('webpack');

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'index.js',
        path: path.resolve(_ _ dirname, 'dist') //請刪走"_ _ "的空格
      },
      module: {
        rules: [
          { test: /\.css$/,
            use: [
              { loader: 'style-loader'},
              { loader: 'css-loader' }
            ]
          }
        ]
      },
    }

### 使用extract-text-webpack-plugin

12 - 可是，有時侯想把js跟css的檔案獨立起來，這時就可以安裝extract-text-webpack-plugin

    npm install extract-text-webpack-plugin --save-dev

13 - 修改webpack.config.js

    const path = require('path'),
          webpack = require('webpack'),
          ExtractTextPlugin = require("extract-text-webpack-plugin");

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'index.js',
        path: path.resolve(_ _ dirname, 'dist') //請刪走"_ _ "的空格
      },
      module: {
        rules: [
          { test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader']
            })
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.css']
      },
      plugins: [
        new ExtractTextPlugin("[name].css"),
      ]
    }

14 - 修改index.html

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <link rel="stylesheet" href="dist/main.css">
        <script src="dist/index.js" charset="utf-8"></script>
      </head>
      <body>
      </body>
    </html>

### 使用file-loader

15 - 有時候CSS檔案裡會有url image，這時就需要安裝file-loader

    npm install file-loader --save-dev

16 - 修改webpack.config.js

    const path = require('path'),
          webpack = require('webpack'),
          ExtractTextPlugin = require("extract-text-webpack-plugin");

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'index.js',
        path: path.resolve(_ _ dirname, 'dist') //請刪走"_ _ "的空格
      },
      module: {
        rules: [
          { test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader']
            })
          },
          { test: /\.(png|jpg)$/,
            loader: 'file-loader?name=./../images/[hash].[ext]'
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.css']
      },
      plugins: [
        new ExtractTextPlugin("[name].css"),
      ]
    }

17 - 修改style.css

    body {
      color: red;
      background: url('../images/background.jpg');
    }

### 使用SASS

18 - 安裝node-sass和sass-loader

    npm install node-sass --save-dev
    npm install sass-loader --save-dev

19 - 修改webpack.config.js

    const path = require('path'),
          webpack = require('webpack'),
          ExtractTextPlugin = require("extract-text-webpack-plugin");

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'index.js',
        path: path.resolve(_ _ dirname, 'dist') //請刪走"_ _ "的空格
      },
      module: {
        rules: [
          { test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader']
            })
          },
          { test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader', 'sass-loader']
            })
          },
          { test: /\.(png|jpg)$/,
            loader: 'file-loader?name=./../images/[hash].[ext]'
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.scss', '.css']
      },
      plugins: [
        new ExtractTextPlugin("[name].css"),
      ]
    }

### 使用PostCSS

20 - 安裝PostCSS所需Plugin

    npm install postcss-loader --save-dev
    npm install postcss-load-config --save-dev
    npm install autoprefixer --save-dev
    npm install cssnano --save-dev

21 - 修改webpack.config.js

    const path = require('path'),
          webpack = require('webpack'),
          ExtractTextPlugin = require("extract-text-webpack-plugin");

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'index.js',
        path: path.resolve(_ _ dirname, 'dist') //請刪走"_ _ "的空格
      },
      module: {
        rules: [
          { test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader', 'postcss-loader']
            })
          },
          { test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader', 'postcss-loader', 'sass-loader']
            })
          },
          { test: /\.(png|jpg)$/,
            loader: 'file-loader?name=./../images/[hash].[ext]'
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.scss', '.css']
      },
      plugins: [
        new ExtractTextPlugin("[name].css"),
      ]
    }

22 - 建立postcss.config.js

    module.exports = {
      plugins: [
        require('autoprefixer')({
          browsers: ["last 5 versions"]
        }),
        require('cssnano')()
      ]
    }

### 循環使用Webpack

如果將來想在另外的資料夾使用Webpack，可以將package.json, webpack.config.js和postcss.config.js直接複製去資料夾裡，然後打上:

    npm install

那就會直接裝上package.json的plugin了。

------------------------------------
參考網址:

[使用 webpack 模組化你的程式碼，讓人生更美好。](http://ithelp.ithome.com.tw/articles/10188024)

[介绍 Webpack - React Webpack 小书](https://fakefish.github.io/react-webpack-cookbook/Introduction-to-Webpack.html)

[Webpack(3) — CSS Loader 樣式表與圖檔 – Alpha Orange – Medium](https://medium.com/@alphaorange/cwebpack-1-css-loader-68a86fbe389f)

[Webpack2 手把手一起入門 - kinanson的技術回憶 - 點部落](https://dotblogs.com.tw/kinanson/2017/06/11/124206)
