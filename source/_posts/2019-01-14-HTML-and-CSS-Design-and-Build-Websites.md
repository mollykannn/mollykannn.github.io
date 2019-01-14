---
title: HTML & CSS 網站設計建置優化之道
date: 2019-01-14 20:09:21
category: 
  - Book
  - Front-End
tags:
  - CSS
  - HTML
photos: /images/post/2019-01-14-HTML-and-CSS-Design-and-Build-Websites.jpg
---

Url: [HTML&CSS：網站設計建置優化之道](https://www.books.com.tw/products/0010546014)

入門Web必看的書之一﹐清楚介紹了HTML跟CSS基本會用的語法。這邊節錄了一些經常忘記的語法....

這系列還有另一本介紹Javascript跟jQuery (雖然現在jQuery都在死亡邊緣)﹐我自己還沒有看過﹐有空拿來看看吧....

<!-- more -->

## HTML
> - &#60;sup> 
>   字母向上, 4<sup>th</sup> 
>
> - &#60;sub> 
>   字母向下, H<sub>2</sub>O
>
> - &#60;strong> & &#60;em>
>   都是顯示粗體，但現在常用的是&#60;em>
>
> - &#60;blockquote> & &#60;q>
>   引用，現在常用的是&#60;blockquote>
>
> - &#60;abbr>
>   縮寫, &#60;abbr title="Professor">Prof&#60;/abbr>
>
> - &#60;dfn>
>   解釋術語
>
> - &#60;address>
>   地址
>
> - &#60;del>
>   刪除該句子

#### &#60;table>
> - &#60;table>, &#60;tr>, &#60;td>
> - &#60;colspan>, &#60;rowspan>
> - &#60;cellpadding>, &#60;cellspacing>, &#60;border>, &#60;bgcolor>
> - &#60;th> // 標題
> - &#60;thead>, &#60;tbody>, &#60;tfoot> // 包在tr外

#### &#60;video>
> - src, width, height
> - poster="image.jpg" (播放之前所顯示的圖像)
> - controls (播放控制鈕)
> - autoplay (自動播放)
> - loop (重覆播放)
> - preload - none (之前不載入視訊), auto (自動載入視訊), metadata (收集第一個影格, 片長, 播放清單) 

#### &#60;audio>
> - src, width, height
> - poster="image.jpg" (播放之前所顯示的圖像)
> - controls (播放控制鈕)
> - autoplay (自動播放)
> - loop (重覆播放)
> - preload - none (之前不載入視訊), auto (自動載入視訊), metadata (收集第一個影格, 片長, 播放清單) 
    
#### HTML5 版面元素
    <div id="page">
        <header>, <nav>
        <hgroup> (標題群組)
        <div id ="content">
            <article>
            <section> (將相關內容組在一起)
            <figure>, <figcaption> (圖表)
        </div>
            <aside> (附加)
        <footer>
    </div>

### Meta
> - description, keywords, author
> - robots - 是否應將此頁加到搜查結果 (nofollow)
> - pragma - 避免儲存快取 (no-cache)
> - expires - 標示快取何時過期 (日期格式)

### 跳脫字元
> [HTML Character Escape Codes and Entity References](http://www.htmlandcssbook.com/extras/html-escape-codes/)

## CSS

#### Selector
> - &#8727; {}
>
> - h1, h2, h3 {}
>
> - .note {} 
>
> - p.note {}
>   尋找p是note的class屬性
>
> - #introduction
>
> - li>a {} 
>   尋找li中的a子屬性
>
> - p a {}
>   尋找p中的a屬性, 即使兩者之間還有堆疊其他元素
>
> - h1+p {} 
>   尋找h1後第一個p屬性, h1不需包圍p
>
> - h1~p {}
>   尋找h1後的p屬性, h1不需包圍p
>
> - p[class] 
>   尋找有class屬性的元素p
>
> - p[class="dog"]
>   尋找class屬性值為dog的元素p
>
> - p[class~="dog"]
>   尋找class屬性在字與字之間有空格隔開之中有dog字眼的元素p
>
> - p[attr^"d"]
>   尋找class屬性的字母是d的元素p
>
> - p[attr*"do"]
>   尋找class屬性包含do的元素p
>
> - p[attr$"g"]
>   尋找class屬性的字尾是g的元素p

#### Color
> - RGB(102,205,170) // RGB值
> - #66cdaa // HEX碼
> - MediumAquaMarine // 顏色名
> - 彩度 - 一個顏色中的灰色量
> - 明度 - 一個顏色中的白色/黑色量 

#### 其他語法
> - Display:none vs Visibility:hidden
>   none不會留下空白位置, hidden會留下空白位置
>
> - border-radius
>   Eg: border-radius: 80px 50px <=可變橢圓形
>
> - list
>   list-style-type (disc, circle, square)
>   list-style-image
>   list-style-position (outside, inside)
>   list-style (Eg: inside circle)
>
> - table
>   empty-cells (show, hide, inherit)
>
> - cursor 游標樣式
>   (auto, crosshair, default, pointer, move, text, wait, help, url("cursor.gif")
>
> - @import
    import CSS in .CSS file     

