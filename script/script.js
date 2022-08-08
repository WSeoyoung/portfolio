// menu

$("#menu_btn").on("click", (e) => {
  e.preventDefault();
  $("#gnb").slideToggle();
});

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
var menu = ["Slide 1", "Slide 2", "Slide 3"];
var mySwiper = new Swiper(".swiper-container", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu[index] + "</span>";
    },
  },
});
