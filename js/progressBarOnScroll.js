(function() {
  var bServ = $(".b-services");
  var bottom = bServ.position().top + bServ.outerHeight(true);
  var progressBar = $(".progress-bar");

  $(document).on("scroll", function() {
    if (
      $(this).scrollTop() >= bServ.position().top &&
      $(this).scrollTop() <= bottom
    ) {
      progressBar.addClass("start");
    } else {
      progressBar.removeClass("start");
    }
  });
})();
