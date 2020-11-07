---
title: Yarn小知識
date: 2020-10-20 20:33:10
category:
  - Javascript
tags:
  - yarn
photos:
---

{% asset_img banner banner/banner.jpeg %}

#### Npm vs Yarn

- 兩者也是Javascript package managers
- 現在大家的速度都差不多（個人覺得yarn有cache會快一點點啦)
- 兩者現在也有lock file（npm本來沒有lock file的，後來才有的。）
- lock file的用途是紀錄所有安裝package的dependency的版本資料，以便日後重新安裝相同的dependency，避免發生錯誤。

<br>

#### 如何由npm轉到yarn?

- 刪掉lock file，然後yarn install

<!-- more -->

<br>

#### 更新package.json裡的package

- 安裝syncyarnlock

```shall
yarn global add syncyarnlock
```

- 更新package

```shall
syncyarnlock -s -k
yarn install
```

<br>

#### 基本指令

- Install

```shall
yarn install
```

- Install package

```shall
yarn add [package] -D
```

- Install global package

```shall
yarn global add [package]
```

- Update global

```shall
yarn global upgrade
```

- Uninstall

```shall
yarn remove [package]
```

- Upgrade

```shall
yarn upgrade -latest
```