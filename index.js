$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    items: 2,
    nav: true,
    navText: [
      "<img src='./assets/media/arrow-left.svg'/>",
      "<img src='./assets/media/arrow-right.svg'/>",
    ],
    smartSpeed: 750,
    animateIn: "linear",
    animateOut: "linear",
    responsive: {
      0: {
        stagePadding: 24,
        margin: 12,
      },
      768: {
        stagePadding: 120,
        margin: 32,
      },
    },
  });
});
