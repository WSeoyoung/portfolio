// 모바일 nav 사이드 메뉴

const toggleMenu = document.querySelector("#toggle_menu");
const toggleBtn = document.querySelector("#toggle_btn");
const pcNav = document.querySelector("#pc_nav");

toggleMenu.addEventListener("click", (e) => {
  e.preventDefault();
  pcNav.style.transform = "translateX(0)";
  pcNav.classList.toggle("on");
});

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  pcNav.style.transform = "translateX(300px)";
  pcNav.classList.toggle("on");
});

// 스크롤 이벤트

const nav = document.querySelector("nav");
const slideTxt = document.querySelector("#slide_txt");

addEventListener("scroll", () => {
  if (scrollY > slideTxt.offsetTop - 180) {
    nav.classList.add("style");
  } else if (scrollY <= slideTxt.offsetTop - 180) {
    nav.classList.remove("style");
  }
});

///////////////////////////////////////////////////////////////

// // 사이드 메뉴 서브메뉴

$("#gnb>li>a")
  .mouseover(function () {
    $(this).find(".sub_menu").stop().slideDown(500);
  })
  .mouseout(function () {
    $(this).find(".sub_menu").stop().slideUp(500);
  });
