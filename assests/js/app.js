$("#testimonialscarousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    '<i class="fa-solid fa-caret-left"></i>',
    '<i class="fa-solid fa-caret-right"></i>',
  ],
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
