// slide 좌우

let slideCount = $(".slideImg").length;
let currentIndex = 0;
let slidePosition;

setInterval(() => {
  if (currentIndex < slideCount - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  slidePosition = currentIndex * -100 + "vw";
  $(".slideList").animate({ left: slidePosition }, 400);
}, 3000);
