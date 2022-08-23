// nav sticky
const nav = document.querySelector("#navWrap");
const main = document.querySelector("main");

addEventListener("scroll", () => {
  if (scrollY > 10) {
    nav.classList.add("sticky");
  } else if (scrollY <= 10) {
    nav.classList.remove("sticky");
  }
});

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

// better pop mousemove
const pop1 = document.querySelector(".pop1");
const pop2 = document.querySelector(".pop2");
const pop3 = document.querySelector(".pop3");
const pop4 = document.querySelector(".pop4");

addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  pop1.style.top = `${x / -15}px`;
  pop1.style.left = `${y / -3}px`;

  pop2.style.top = `${x / -20}px`;
  pop2.style.left = `${y / 2}px`;

  pop3.style.top = `${x / -20}px`;
  pop3.style.right = `${y / 2}px`;

  pop4.style.top = `${x / 15}px`;
  pop4.style.right = `${y / -3}px`;
});
