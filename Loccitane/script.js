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

// // 사이드 메뉴 서브메뉴

// const sub1 = document.querySelector(".sub1");
// const sub2 = document.querySelector(".sub2");
// const sub3 = document.querySelector(".sub3");
// const sub4 = document.querySelector(".sub4");
// const sub5 = document.querySelector(".sub5");
// const subMenu = document.querySelector(".sub_menu");

// sub1.addEventListener("click", () => {
//   subMenu.style.display = "block";
// });
