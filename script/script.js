// menu move
$(".menuOverlay").on("click", function () {
  $(this).toggleClass("open");
});

// hamburger menu
$("#menu_btn").on("click", function () {
  $(this).toggleClass("on");
});

// gnb
$("#menu_btn").on("click", (e) => {
  e.preventDefault();
  $("#gnb").slideToggle();
});

// gnb li 클릭후 원래대로 돌아오게
const menuBtn = document.querySelector("#menu_btn");
const gnbLi = document.querySelectorAll("li");

gnbLi.forEach((gnbLi) => {
  gnbLi.addEventListener("click", (event) => {
    // Close menu
    menuBtn.classList.remove("on");
    $("#gnb").slideUp();
  });
});

// project (slide ing + tab menu)
$("#pjBtns li").on("click", function () {
  let idx = $(this).index();
  $("#pjImg_wrap").animate({ marginLeft: `${-100 * idx}%` });
});

// const pjBtn = document.querySelectorAll("#pjBtns li");

// pjBtn.forEach((pjBtn) => {
//   pjBtn.classList.remove("on");
//   pjBtn.addEventListener("click", () => {
//     pjBtn.classList.add("on");
//   });
// });
