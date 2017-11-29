$(document).ready(function() {
  $(".navbar-container ul li").hover(
    function() {
      // over
      // console.log("mouse in");
      var height = $(this).children('.sub_menu').innerHeight();
      // console.log(height);
      height = height * -1;
      var prop = {
        bottom: height + "px"
      };
      $(this).children(".sub_menu").css(prop);
    },
    function() {
      // out
      // console.log("mouse out");
      var prop = {
        bottom: '100%'
      };
      $(this).children(".sub_menu").css(prop);
    }
  );
});
