var cheerio = require("cheerio");

hexo.extend.filter.register("after_post_render", function (data) {
  var config = hexo.config;
  if (config.post_asset_folder) {
    var link = data.permalink;
    if (link.lastIndexOf("/") != link.length - 1) {
      return;
    }

    var toprocess = ["excerpt", "more", "content"];
    for (var i = 0; i < toprocess.length; i++) {
      var key = toprocess[i];

      var $ = cheerio.load(data[key], {
        ignoreWhitespace: false,
        xmlMode: false,
        lowerCaseTags: false,
        decodeEntities: false,
      });
      //替换img内的标签
      //观察生成的post.content中img，有下面两种
      //在post中写的img标签，有高度宽度。<img width="600px" data-src="/raspberrypi/raspberrypi-summary/sumup1.png">
      //在post中写的{% asset_img bg-1.png %}标签。<img data-src="/hexo/next-theme-custom-background-img-using-unsplash/bg-1.png">
      $("img").each(function () {
        if ($(this).attr("title") == "banner") {
          src = $(this).attr("src").replace(/.([^/]*)$/, "/123" + '$1');
          $(this).replaceWith(`<picture>
            <source media="(min-width: 770px)" srcset="${$(this).attr("src")}" />
            <source media="(min-width: 480px)" srcset="${$(this).attr("src").replace(/.([^/]*)$/, `/medium_$1`)}" />
            <img src="${$(this).attr("src").replace(/.([^/]*)$/, `/small_$1`)}" title="${$(this).attr("title")}" />
          </picture>`);

          // var src = ($(this).attr("data-src") || $(this).attr("src")).replace(
          //   "\\",
          //   "/"
          // );
          // src = src.replace(/(^\s*)|(\s*$)/g, "");
          // if (/^\/.*\.(gif|png|jpg|bmp|jpeg)$/i.test(src)) {
          //   $(this).attr(
          //     "data-src",
          //     "https://cdn.jsdelivr.net/gh/maplesugarr/blog-assets@latest/posts" +
          //       src
          //   );
          // }
        }
      });
      data[key] = $.html();
    }
  }
});
