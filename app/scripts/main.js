// LETS CAST SOME SPELLS:

  var $hamburger = $(".hamburger");
  var $box = $(".box");

  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $box.toggleClass("is-open").toggle("drop");
  });