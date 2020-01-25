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