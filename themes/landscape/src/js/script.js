window.searchArticle = function () {
  var element = document.getElementById("search-form-wrap");
  if (element.classList.contains("on")) {
    element.classList.remove('on'); 
  } else {
    element.classList.add('on');
    document.getElementsByClassName("search-form-input")[0].focus();
  }
};

window.shareLink = function (id) {
  var element = document.getElementById(id);
  if (element.classList.contains("on")) {
    element.classList.remove('on'); 
  } else {
    element.classList.add('on');
  }
};