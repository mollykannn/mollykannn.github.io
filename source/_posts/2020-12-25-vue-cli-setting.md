---
title: 安裝vue-cli (vue3.0) 時的基本設定
date: 2020-12-25 20:38:48
category: 
  - vueJS
tags:
  - Javascript
photos:
---

{% asset_img banner banner/banner.jpeg %}
這次說明一下個人安裝vue-cli (vue3.0) 時所做的基本設定吧👋🏻👋🏻👋🏻。

先下載vue-cli

```bash
yarn global add @vue/cli
```

如要Upgrade可打上

```bash
yarn global upgrade --latest @vue/cli
```

建立新project

```bash
vue create new-project
```

<!-- more -->

是次設定為這樣﹐因為這次只做單一頁面和不用store東西，所以不安裝vuex跟vue-router了：

![vue-cli-cmd.png](vue-cli-cmd.png)

(個人習慣eslint都會使用standard和lint on save 🤧)

安裝完成後，先加上stylelint（統一檢查css format)

```bash
yarn add stylelint stylelint-config-standard stylelint-webpack-plugin stylelint-config-property-sort-order-smacss
// stylelint-config-standard <= 使用standard config
// stylelint-webpack-plugin <= build時自動檢查format
// stylelint-config-property-sort-order-smacss <= 使用smacss的sort order
```

新增.stylelintrc.js

```jsx
const sortOrderSmacss = require("stylelint-config-property-sort-order-smacss/generate");

module.exports = {
  root: true,
  extends: "stylelint-config-standard",
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-order": [sortOrderSmacss()],
    "no-descending-specificity": null
  }
};
```

新增vue.config.js

```jsx
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  productionSourceMap: false, // 關閉map file
  runtimeCompiler: true,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'web page title' // 更改web標題
        return args
      })
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') { // build file的時候run一下stylelint
      return {
        plugins: [ 
          new StyleLintPlugin({
            files: ['**/*.{html,vue,css,sass,scss}'],
            fix: true //自動fix error
          })
        ]
      }
    }
  },
  devServer: {
    open: true, // localhost設定
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
```

個人習慣會做用normalize.css來reset所有browser的各類style type

```bash
yarn add normalize.css
```

然後在main.js加上：

```jsx
import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css' // 加上這句
import '@/assets/css/style.scss'

createApp(App).mount('#app')
```