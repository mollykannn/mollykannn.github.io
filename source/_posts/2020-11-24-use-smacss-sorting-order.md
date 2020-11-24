---
title: Webpack - 使用SMACSS sorting order
date: 2020-11-24 20:30:06
category:
  - Webpack
tags:
  - Webpack
  - CSS
photos:
---

{% asset_img banner banner/banner.jpeg %}

之前有一篇文章介紹了[在 VScode 裡使用 PostCSS Sorting](https://mollykannn.github.io/post/vscode-css-sorting/)﹐最近在整理[webpack plugin](https://github.com/mollykannn/webpack-boilerplate)﹐順便寫下如何在 webpack 使用 SMACSS sorting order 吧。

<!-- more -->

在 webpack 安裝 stylelint

```bash
yarn add stylelint -D
yarn add stylelint-webpack-plugin -D
```

更改 webpack.config.js

```jsx
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  plugins: [
    new StylelintPlugin({
      configFile: "stylelint.config.js",
      fix: true,
    }),
  ],
};
```

安裝 SMACSS sorting order

```bash
yarn add stylelint-config-property-sort-order-smacss -D
```

建立 stylelint.config.js

```bash
vim stylelint.config.js
```

內容如下：

```jsx
const sortOrderSmacss = require("stylelint-config-property-sort-order-smacss/generate");

module.exports = {
  root: true,
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-order": [sortOrderSmacss()],
  },
};
```

當 build webpack 的時候，就會自動 sorting css 裡的 order 了 🎉。
