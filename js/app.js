// -----------------3-section slider--------------------------
$('.one-time').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1,
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
  // Sldier_for_section3=====================
  function Sim(sldrId) {
    let id = document.getElementById(sldrId);
    if (id) {
      this.sldrRoot = id;
    } else {
      this.sldrRoot = document.querySelector(".sim-slider");
    }
  
    // Carousel objects
    this.sldrList = this.sldrRoot.querySelector(".sim-slider-list");
    this.sldrElements = this.sldrList.querySelectorAll(".sim-slider-element");
    this.sldrElemFirst = this.sldrList.querySelector(".sim-slider-element");
    this.leftArrow = this.sldrRoot.querySelector("div.sim-slider-arrow-left");
    this.rightArrow = this.sldrRoot.querySelector("div.sim-slider-arrow-right");
    this.indicatorDots = this.sldrRoot.querySelector("div.sim-slider-dots");
  
    // Initialization
    this.options = Sim.defaults;
    Sim.initialize(this);
  }
  
  Sim.defaults = {
    // Default options for the carousel
    loop: true, // Бесконечное зацикливание слайдера
    auto: true, // Автоматическое пролистывание
    interval: 1500, // Интервал между пролистыванием элементов (мс)
    arrows: false, // Пролистывание стрелками
    dots: true, // Индикаторные точки
  };
  
  Sim.prototype.elemPrev = function (num) {
    num = num || 1;
  
    let prevElement = this.currentElement;
    this.currentElement -= num;
    if (this.currentElement < 0) this.currentElement = this.elemCount - 1;
  
    if (!this.options.loop) {
      if (this.currentElement == 0) {
        this.leftArrow.style.display = "none";
      }
      this.rightArrow.style.display = "block";
    }
  
    this.sldrElements[this.currentElement].style.opacity = "1";
    this.sldrElements[prevElement].style.opacity = "0";
  
    if (this.options.dots) {
      this.dotOn(prevElement);
      this.dotOff(this.currentElement);
    }
  };
  
  Sim.prototype.elemNext = function (num) {
    num = num || 1;
  
    let prevElement = this.currentElement;
    this.currentElement += num;
    if (this.currentElement >= this.elemCount) this.currentElement = 0;
  
    if (!this.options.loop) {
      if (this.currentElement == this.elemCount - 1) {
        this.rightArrow.style.display = "none";
      }
      this.leftArrow.style.display = "block";
    }
  
    this.sldrElements[this.currentElement].style.opacity = "1";
    this.sldrElements[prevElement].style.opacity = "0";
  
    if (this.options.dots) {
      this.dotOn(prevElement);
      this.dotOff(this.currentElement);
    }
  };
  
  Sim.prototype.dotOn = function (num) {
    this.indicatorDotsAll[num].style.cssText =
      "background-color:#BBB; cursor:pointer;";
  };
  
  Sim.prototype.dotOff = function (num) {
    this.indicatorDotsAll[num].style.cssText =
      "background-color:#556; cursor:default;";
  };
  
  Sim.initialize = function (that) {
    // Constants
    that.elemCount = that.sldrElements.length; // Количество элементов
  
    // Variables
    that.currentElement = 0;
    let bgTime = getTime();
  
    // Functions
    function getTime() {
      return new Date().getTime();
    }
    function setAutoScroll() {
      that.autoScroll = setInterval(function () {
        let fnTime = getTime();
        if (fnTime - bgTime + 10 > that.options.interval) {
          bgTime = fnTime;
          that.elemNext();
        }
      }, that.options.interval);
    }
  
    // Start initialization
    if (that.elemCount <= 1) {
      // Отключить навигацию
      that.options.auto = false;
      that.options.arrows = false;
      that.options.dots = false;
      that.leftArrow.style.display = "none";
      that.rightArrow.style.display = "none";
    }
    if (that.elemCount >= 1) {
      // показать первый элемент
      that.sldrElemFirst.style.opacity = "1";
    }
  
    if (!that.options.loop) {
      that.leftArrow.style.display = "none"; // отключить левую стрелку
      that.options.auto = false; // отключить автопркрутку
    } else if (that.options.auto) {
      // инициализация автопрокруки
      setAutoScroll();
      // Остановка прокрутки при наведении мыши на элемент
      that.sldrList.addEventListener(
        "mouseenter",
        function () {
          clearInterval(that.autoScroll);
        },
        false
      );
      that.sldrList.addEventListener("mouseleave", setAutoScroll, false);
    }
  
    if (that.options.arrows) {
      // инициализация стрелок
      that.leftArrow.addEventListener(
        "click",
        function () {
          let fnTime = getTime();
          if (fnTime - bgTime > 1000) {
            bgTime = fnTime;
            that.elemPrev();
          }
        },
        false
      );
      that.rightArrow.addEventListener(
        "click",
        function () {
          let fnTime = getTime();
          if (fnTime - bgTime > 1000) {
            bgTime = fnTime;
            that.elemNext();
          }
        },
        false
      );
    } else {
      that.leftArrow.style.display = "none";
      that.rightArrow.style.display = "none";
    }
  
    if (that.options.dots) {
      // инициализация индикаторных точек
      let sum = "",
        diffNum;
      for (let i = 0; i < that.elemCount; i++) {
        sum += '<span class="sim-dot"></span>';
      }
      that.indicatorDots.innerHTML = sum;
      that.indicatorDotsAll = that.sldrRoot.querySelectorAll("span.sim-dot");
      // Назначаем точкам обработчик события 'click'
      for (let n = 0; n < that.elemCount; n++) {
        that.indicatorDotsAll[n].addEventListener(
          "click",
          function () {
            diffNum = Math.abs(n - that.currentElement);
            if (n < that.currentElement) {
              bgTime = getTime();
              that.elemPrev(diffNum);
            } else if (n > that.currentElement) {
              bgTime = getTime();
              that.elemNext(diffNum);
            }
            // Если n == that.currentElement ничего не делаем
          },
          false
        );
      }
      that.dotOff(0); // точка[0] выключена, остальные включены
      for (let i = 1; i < that.elemCount; i++) {
        that.dotOn(i);
      }
    }
  };
  
  new Sim();
  
