// let slides = document.querySelectorAll(".slide-single");
// let slider = [];
// for (let i = 0; i < slides.length; i++) {
//   slider[i] = slides[i].src;
//   slides[i].remove();
// }

// let step = 0;
// let offset = 0;

// function draw() {
//   let img = document.createElement("img");
//   img.src = slider[step];
//   img.classList.add("slide-single");
//   img.style.left = offset * 250 + "px";
//   document.querySelector("#slide").appendChild(img);
//   step++;
//   if (step + 1 == slider.length) {
//     step = 0;
//   } else {
//     step++;
//   }
//   offset = 1;
// }
//  function left(){
//    document.onclick = null;
//    let slides2 = document.querySelectorAll(".slide-single");
//    let offset2 = 0;
//    for (let i=0; i < slides2.length; i++){
//      slides2[i].style.left = offset2*250 - 250 + "px";
//      offset2++;
//    }
//    setTimeout(function(){
//     slides2[0].remove();
//      draw();
//      document.onclick = left;
//    }, 1000); 
//    }
// draw();draw();
// document.onclick = left;







let btn_prev = document.querySelector("#gallery .buttons  .prev");
let btn_next = document.querySelector("#gallery .buttons  .next");

let images = document.querySelectorAll("#gallery .photos img");
let i = 0;

btn_prev.onclick = function () {
   images[i].style.display = "none";
  i--;
  if (i < 0 ) {
    i = images.length - 1;
  }
  images[i].style.display = "block";
};

// =============================================
btn_next.onclick = function () {
  images[i].style.display = "none";
  i++;
  if (i >= images.length) {
    i = 0;
  }
  images[i].style.display = "block";
};
