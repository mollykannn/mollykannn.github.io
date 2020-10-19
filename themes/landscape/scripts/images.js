"use strict";
hexo.extend.filter.register("after_render:html", function (htmlContent) {
  return htmlContent.replace(
    /<img(.*?)src="(.*?)"(.*?)>/gi,
    (str, p1, p2, p3) => {
      if (/data-src/gi.test(str)) {
        return str;
      }
      if (/class="banner"/gi.test(str)) {
        return str.replace(
          str,
          `<picture>
            <source media="(min-width: 770px)" data-srcset="${p2}" />
            <source media="(min-width: 480px)" data-srcset="${p2.replace(
              /.([^/]*)$/,
              `/medium_$1`
            )}" />
            <img class="lazy banner" src="/images/preload.jpg" alt="banner" data-src="${p2.replace(
              /.([^/]*)$/,
              `/small_$1`
            )}">
          </picture>`
        );
      } else if (/class="(.*?)"/gi.test(str)){
        str = str.replace(/class="(.*?)"/gi, (classStr, p1) => {
            return classStr.replace(p1, `${p1} lazy`);
        })
        return str.replace(p2, `/images/preload.jpg" data-src="${p2}`);
      }
      return str.replace(str, `<img${p1}class="lazy" src="/images/preload.jpg" data-src="${p2}"${p3}>`);
    }
  );
});