///////// menu

// gnb
$("#menu_btn").on("click", (e) => {
  e.preventDefault();
  $("#gnb").slideToggle();
});

// hamburger menu
$("#menu_btn").on("click", function () {
  $(this).toggleClass("on");
});

// project
// let swiper = new Swiper(".mySwiper", {
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     hide: true,
//   },
// });
