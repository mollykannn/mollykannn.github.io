---
layout: post
category: 
  - Front-End
tags: 
  - CSS
published: true
title: CSS - 關閉按鈕
date: 2016-06-27 00:00:00
photo: /images/post/2016-06-27-css-close-button.png
---
<!-- more -->
<p data-height="486" data-theme-id="dark" data-slug-hash="XKjwvW" data-default-tab="result" data-user="mollykannn" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/mollykannn/pen/XKjwvW/">CSS - Close Button</a> by Molly Kan (<a href="http://codepen.io/mollykannn">@mollykannn</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


HTML

    <div class="sample-1">
      <span class="sample-1-close"></span>
    </div>
    <div class="sample-2">
      <div class="sample-2-close">
        <div class="sample-2-close--left"></div>
        <div class="sample-2-close--right"></div>
      </div>
    </div>

CSS

    .sample-1-close {
      position: absolute;
      cursor: pointer;
      color: #fff;
      font-size: 50px;
      font-family: Arial,sans-serif;
      border-radius: 50px;
      background: #605F61;
      line-height: 0px;
      padding: 23px 9px 23px 9px;  
    }

    .sample-1-close:before {
      content: "\00d7";
    }

    .sample-2-close {
      position:relative;
      cursor: pointer;
      top:0;
      left:0;
      width:50px;
      height:50px;
    }

    .sample-2-close--left, .sample-2-close--right {
      position:absolute;
      width: 0;
      top: 22px;
      left: 9px;
      height: 5px;
      border-style:solid;
      border-width:0 0 0 30px;  
    }

    .sample-2-close--left {
      border-color:#000;
      transform: rotate(45deg);
    }

    .sample-2-close--right {
      border-color:#000;
      transform: rotate(-45deg);
    }

<br/>
