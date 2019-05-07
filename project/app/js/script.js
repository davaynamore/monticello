(function() {
  $(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 30,
      loop: true,
      nav: true,
      autoplay: true,
      responsive:{
        0:{
          items:1
        },
        768:{
          items:2
        },
        1180:{
          items:3
        }
      }
    });
  });
})();