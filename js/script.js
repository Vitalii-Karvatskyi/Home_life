$(document).ready(function () {
  $(".scroll-to").click(function(e) {
    e.preventDefault();
    const id = $(this).attr('href');
    $([document.documentElement, document.body]).animate({
        scrollTop: $(id).offset().top
    }, 1000);
  });

  $(".burger").click(function(e) {
    $(this).toggleClass("open")
  })

  $(".open-modal").click(function(e) {
    e.preventDefault();
    $(".modal-wrapper").addClass("active")
  })

  $(".modal-wrapper, .modal-window .close").click(function(e) {
    if (e.target === this) {
      $(".modal-wrapper").removeClass("active")
    }
  })

  $('.slider1').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
    });

  new WOW().init();
})