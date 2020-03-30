  // -------------------------For ScrollArrow-------------------------------------------
  let allArrow = document.querySelectorAll(".arrowGen");
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
  // ==============================================================Scroll_nav===============================
  $(window).scroll(function () {
		if ($(window).scrollTop() >= 400) {
			$(".dots_nav_link").css({
				'color': '#ff69B4'
			});	
		}
		else 
		{
		$(".dots_nav_link").css({
			'color': 'white'
		});
		};
  });

//============================================///================Burger==========================///================

function burgerMenu(selector){
  let menu = $(selector);
  let button = menu.find(".burger-menu_button");
  let links = menu.find(".burger_menu__link");
  let overlay = menu.find (".burger_menu__overlay");
  
  button.on("click", (e)=> {
    e.preventDefault();
    toggleMenu();
  });

    links.on("click", () => toggleMenu());
    overlay.on("click", () => toggleMenu());

  function toggleMenu(){
    menu.toggleClass("burger-menu_active");

    if (menu.hasClass("burger-menu_active")) {
      $("body").css("overflow", "hidden");
    } else{
      $("body").css("overflow", "visible");
    }
  }
}
burgerMenu(".burger-menu");

//====================================================================loader==============================================
$(window).on("load", function () {
  // makes sure the whole site is loaded
  $(".table").delay(1100).fadeOut("slow"); // will first fade out the loading animation
let countdown = document.getElementById("countdown");
let countuP = document.getElementsByClassName("count");
let j = "status + countdown";
// function
 let countItDown = function() {
  let currentTime = parseFloat(countdown.textContent);
  if (currentTime < 100) {
    countdown.textContent = currentTime + 10;
  } else {
    countdown.textContent = 0;
  }
};

// call interval 
let timer = window.setInterval(countItDown, 100);


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
    TweenMax.fromTo($('#car'), 0.4, {
      y: 360,
      autoAlpha: 1
    }, {
      y: 0
    })
    mode = "car";
  } else if (mode == "car") {
    TweenMax.to($('#car'), 0.4, {
      y: -360
    })
    TweenMax.fromTo($('#cardva'), 0.4, {
      y: 360,
      autoAlpha: 1
    }, {
      y: 0
      

    })
    mode = "cardva";
    } else if (mode == "cardva") {
    TweenMax.to($('#home'), 0.2, {
      y: 0
    })
    TweenMax.fromTo($('#cardva'), 0.2, {
      y: 0,
      autoAlpha: 1
    }, {
      y: 360
    })
    mode = "home";
   
  }
});

// ----- On render -----
$(function() {

  makeRadial({
    el: $('#radial'),
    radials: 100
  })


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


