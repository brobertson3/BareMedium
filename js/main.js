$("#main_pic").hover(
  function() {
    $(this).attr("src", "img/waving.jpg");
  }, function() {
    $(this).attr("src", "img/main_pic.jpg");
    $(this).attr("height", "200px");
    $(this).attr("width", "200px");
  }
);