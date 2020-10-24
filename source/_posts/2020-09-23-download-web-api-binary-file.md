---
title: 下載Web API返回的Binary格式檔案
date: 2020-09-23 19:55:16
category: 
  - Javascript
tags:
  - Javascript
  - Binary file
photos:
---

{% asset_img banner banner/banner.jpeg %}

碰到舊project要下載API返回的xlsx檔案﹐API返回的全都是Binary格式。一般來說利用axios 加上 responseType: "arraybuffer"就下載到了。但很可惜的是，舊project還是在用Yii + jQuery....

<!-- more -->

於是在找$.ajax能不能這樣做，後來發現是不行的🤪。有些plugin好像可以解決到這個問題 (Eg: download.js)，不過還是堅持不加上新的plugin。最後發現最原始的XMLHttpRequest就能解決問題了 🤯 （甚麼？！）

```jsx
var xhr = new XMLHttpRequest();
        xhr.open('POST', "{{API URL}}", true); //GET也可以
        xhr.responseType = "blob";
        xhr.onload = function() {
            if (this.status === 200) {
                var blob = this.response;
                var reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = function(e) {
                    var a = document.createElement('a');
                    a.download = "{{FILE NAME}}";
                    a.href = e.target.result;
                    $("body").append(a);
                    a.click();
                    $(a).remove();
                }
            }
        };
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.send("{{POST DATA}}");
```