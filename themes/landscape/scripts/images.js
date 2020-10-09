"use strict";

// if (!hexo.config.lazyload || !hexo.config.lazyload.enable) {
//   return;
// }
// if (hexo.config.lazyload.onlypost) {
//   hexo.extend.filter.register("after_post_render", function (data) {
//     return lazyProcess.call(this, data.content);
//   });
// } else {
hexo.extend.filter.register("after_render:html", function (htmlContent) {
  return lazyProcess.call(this, htmlContent);
});
// }

const fs = require("hexo-fs");
function lazyProcess(htmlContent) {
  return htmlContent.replace(
    /<img(\s*?)src="(.*?)"(.*?)>/gi,
    (str, p1, p2, p3) => {
      if (/data-src/gi.test(str)) {
        return str;
      }
      if (/title="banner"/gi.test(str)) {
        return str.replace(
          str,
          `<picture>
            <source media="(min-width: 770px)" data-srcset="${p2}" />
            <source media="(min-width: 480px)" data-srcset="${p2.replace(
              /.([^/]*)$/,
              `/medium_$1`
            )}" />
            <img class="lazy" src="images/preload.jpg" data-src="${p2.replace(
              /.([^/]*)$/,
              `/small_$1`
            )}">
          </picture>`
        );
      }
      return str.replace(p3, `${p3} class="lazy" src="images/preload.jpg" data-src="${p2}"`);
    }
  );
}
