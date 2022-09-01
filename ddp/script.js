// hamburger menu /////////////////////////
$(".menu_btn").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("on");
});

// mobile nav /////////////////////////
$(".btn_open").click((e) => {
  e.preventDefault();
  $(".overlay").fadeToggle(200);
  $(this).addClass("open");
  $(".logo img").addClass("open");
});

$(".btn_close").click((e) => {
  e.preventDefault();
  $(".overlay").fadeToggle(200);
  $(this).removeClass("open");
  $(".logo img").removeClass("open");
});

// nav scroll shadow + logo black /////////////////////////
const nav = document.querySelector("nav");
const logoB = document.querySelector(".logo img");
const logoW = document.querySelector(".logoW img");

addEventListener("scroll", () => {
  if (scrollY > 10) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }
});

// gnb li 클릭시 menu 화면 꺼짐 => 왜 안될까...
// const gnbLis = document.querySelectorAll("#gnb li");
// const menu = document.querySelector(".overlay");

// gnbLis.forEach((gnbLis) => {
//   gnbLis.addEventListener("click", (e) => {
//     e.preventDefault();
//     // Close menu
//     $(menu).removeClass("open");
//   });
// });

// swiper /////////////////////////
let swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// intro txt 스크롤시 나타남 /////////////////////////
const introTxt = document.querySelector("#intro_txt");

addEventListener("scroll", () => {
  if (scrollY > 400) {
    introTxt.classList.add("show");
  } else {
    introTxt.classList.remove("show");
  }
});

// subscribe /////////////////////////
const subscribe = document.querySelector(".subscribe");
const infoWrap = document.querySelector(".info_text_wrap");

let height = infoWrap.offsetTop + 1000;
// console.log(height);

addEventListener("scroll", () => {
  // console.log(scrollY);
  if (scrollY >= height) {
    subscribe.classList.add("on");
  } else if (scrollY < height) {
    subscribe.classList.remove("on");
  }
});

// hide more program /////////////////////////
$(".morePro_btn").click((e) => {
  e.preventDefault();
  $(".hidePro").slideDown(200);
  $(".hidePro").addClass("more");
});
