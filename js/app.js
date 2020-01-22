// -----------------3-section slider--------------------------
$('.sliderS').slick({
  // dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  centerMode: true,
});
$('#slider-news').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:true,
  arrows:false,
  autoplay:true,
  autoplaySpeed:3000,
});

  // -------------------------For ScrollArrow-------------------------------------------
  let allArrow = document.querySelectorAll(".header-arrow");
  for (let i = 0; i < allArrow.length; i++) {
    allArrow[i].onclick = function (event) {
      event.preventDefault();
      let blockID = this.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  for (let i = 0; i < allArrow.length; i++) {
    allArrow[i].ontouchstart = function (event) {
      event.preventDefault();
      let blockID = this.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }