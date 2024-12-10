$(document).ready(function () {
  $("nav ul li a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );
    }
  })
  $(window).on("scroll", function () {
    let scrollPos = $(window).scrollTop();
    $("nav ul li a").each(function () {
      let sectionOffset = $($(this).attr("href")).offset().top - 100;
      if (scrollPos >= sectionOffset) {
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
      }
    });
  });
});
