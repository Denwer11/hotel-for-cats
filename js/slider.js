
$(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      loop: true,
      dots: false,
      nav: true,
      navText: ["<img src='./icons/prev.svg' class='prev_button slider-button'>","<img src='./icons/next.svg' class='next_button slider-button'>"],
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
