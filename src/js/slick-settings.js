

$(document).ready(function(){
  const windowWidth = window.matchMedia("(min-width: 768px)");

  if (windowWidth.matches) {
      $('.portfolio-card').slick({
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
      });
      $('.blog-holder').slick({
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000
      });
  } else {
    $('.portfolio-card').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
      });
    $('.blog-holder').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000
      });
  }
});