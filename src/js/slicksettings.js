// eslint-disable-next-line no-undef
$('.team_carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    // centerMode: true,
    arrows:  false,
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        }
      },
    
    ]
  });
