// -----------------3-section slider--------------------------
$('.sliderS').slick({
  dots: true,
  infinite: true,
  speed: 900,
  fade: true,
  cssEase: 'linear',
  centerMode: true,
  arrows: false,
});
$('#slider-news').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:true,
  arrows:false,
  autoplay:true,
  autoplaySpeed:6000,
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

  $(window).on("load", function () {
    // makes sure the whole site is loaded
    $(".table").delay(1050).fadeOut("fast"); // will first fade out the loading animation
  
  let countdown = document.getElementById("countdown");
  let countdown1 = document.getElementById("status");
  // let focusCount = countdown + countdown1;
  
  // function
   let countItDown = function(element, text = '') {
    let currentTime = parseFloat(countdown.textContent);
    let currentTimE = parseFloat(countdown1.textContent);
    if (currentTime < 100) {
      countdown.textContent = currentTime + 10;
      countdown1.textContent = currentTimE + 10 + text;
    } else {
      countdown.textContent = 0;
      countdown1.textContent = 0;
    }
  };
  
  // call interval 
  let timer = window.setInterval(countItDown, 190);
  let timerPercent = setInterval(function() {countItDown(status, '%')}, 190);
  
  
  
  // -------ANIMATIONS------- //
  
  $("#main")
    .bind("touchstart", function() {
      $(this).addClass("active");
    })
    .bind("touchend", function() {
      $(this).removeClass("active");
    });
    let mode = "home";
  
  $('#main').click(function() {
    if (mode == "home") {
      TweenMax.to($('#home'), 0.4, {
        y: -360
      })
      // TweenMax.fromTo($('#car'), 0.4, {
      //   y: 360,
      //   autoAlpha: 1
      // }, {
      //   y: 0
      // })
    //   mode = "car";
    // } else if (mode == "car") {
    //   TweenMax.to($('#car'), 0.4, {
    //     y: -360
    //   })
    //   TweenMax.fromTo($('#cardva'), 0.4, {
    //     y: 360,
    //     autoAlpha: 1
    //   }, {
    //     y: 0
        
  
    //   })
      // mode = "cardva";
      // } else if (mode == "cardva") {
      // TweenMax.to($('#home'), 0.2, {
      //   y: 0
      // })
      // TweenMax.fromTo($('#cardva'), 0.2, {
      //   y: 0,
      //   autoAlpha: 1
      // }, {
      //   y: 360
      // })
      // mode = "home";
     
    }
  });
  
  // ----- On render -----
  $(function() {
  
    makeRadial({
      el: $('#radial'),
      radials: 100
    })
  
  //==============Make radial==============================
  function makeRadial(options) {
    if (options && options.el) {
      let el = options.el;
      let radials = 60;
      if (options.radials) {
        radials = options.radials;
      }
      let degrees = 360 / radials;
      let i = 0;
      for (i = 0; i < (radials / 2); i++) {
        let newTick = $('<div class="tick"></div>').css({
          '-moz-transform': 'rotate(' + (i * degrees) + 'deg)'
        }).css({
          '-webkit-transform': 'rotate(' + (i * degrees) + 'deg)'
        }).css({
          'transform': 'rotate(' + (i * degrees) + 'deg)'
        })
        el.prepend(newTick);
      }
    }
  }
  // $(window).load(function() {
  //   setTimeout(function () { 
  //     $(".table").delay(100).fadeOut().remove();   
  //   }, 2000);  
  });
  });
  
  
  