---
title: Hexo筆記
date: 2020-09-01 20:20:00
category:
  - Blog
tags:
  - Hexo
---

{% asset_img banner banner/2020-09-01-start-to-use-hexo.jpg %}

不知不覺Hexo已經去到了5.0了，先寫一篇紀錄。

<!-- more -->

### 安裝Hexo

```shall
    yarn add hexo
```

### 建立新檔案

```shall
    hexo init newBlog
    cd newBlog
```

### 開啟 Localhost

```shall
    yarn run server
```

### 清理 Public folder 和 db.json

```shall
    yarn run clean
```

### 建立Public folder裡的檔案

```shall
    yarn run build
```

P.S: 其實現在package.json已經齊了build, server, clean, deploy指令了XD

### 建立一篇新的文章

```shall
    hexo new (title)
```

### 安裝RSS

```shall
    yarn add hexo-generator-feed

    // 修改 _config.yml
    feed:
        type: atom
        path: atom.xml
        limit: 20
        hub:
        content:
        content_limit:
        content_limit_delim: ' '
```

### 安裝siteMap

```shall
    yarn add hexo-generator-sitemap

    // 修改 _config.yml
    sitemap: 
        path: sitemap.xml
```

### 上傳到GitHub

```shall
    yarn add hexo-deployer-git

    // 修改 _config.yml
    deploy:
      type: git
      repo: 
        github: https://github.com/(username)/(username).github.io
```
