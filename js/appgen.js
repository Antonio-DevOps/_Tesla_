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
		if ($(window).scrollTop() >= 600) {
			$(".dots_nav_link").css({
				'color': 'black'
			});	
		}
		else 
		{
		$(".dots_nav_link").css({
			'color': 'white'
		});
		};
  });
  
//   var scrolled;
// window.onscroll = function() {
//     scrolled = window.pageYOffset || document.documentElement.scrollTop;
//     if(scrolled >= 450){
//         $(".dots_nav_link").css({'color': 'black'})
//     }
//     if(900 <= scrolled){
//         $(".dots_nav_link").css({"color": "white"})         
//     }
//     else(this.scrolled >=450)
//     {
//       $(".dots_nav_link").css({
//         	'color': 'white'
//         });
//     }
//     // 		else 
// 		// {
// 		// 	$(".dots_nav").css({
// 		// 	'color': 'white'
// 		// });
// 		// $(".dots_nav_link").css({
// 		// 	'color': 'white'
// 		// });
// 		// };
//   }