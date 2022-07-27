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

///////////////////////////////////////////////////////////////

// 리미티드 txt

const lmtTitles = document.querySelectorAll(".lmt_txt_title");
const lmtBtns = document.querySelectorAll(".carousel");
const lmtNum = document.querySelectorAll(".lmtnum");
let num = 1;

lmtTitles.forEach((lmtTitles) => {
  lmtTitles.addEventListener("click", (e) => {
    if (num) {
      e.currentTarget.style.borderBottom = "2px solid #ffcb00";
      e.currentTarget.style.paddingBottom = "10px";
      num = 0;
    } else {
      e.currentTarget.style.borderBottom = "none";
      e.currentTarget.style.paddingBottom = "10px";
      num = 1;
    }
  });
});

lmtBtns.forEach((lmtBtns) => {
  lmtBtns.addEventListener("click", (e) => {
    if (num) {
      e.currentTarget.style.transform = "rotate(180deg)";
      e.currentTarget.classList.toggle("on");
      num = 0;
    } else {
      e.currentTarget.style.transform = "rotate(-180deg)";
      e.currentTarget.classList.toggle("off");
      num = 1;
    }
  });
});

lmtBtns.forEach((lmtBtns) => {
  lmtBtns.addEventListener("click", (e) => {
    e.currentTarget.style.transform = "rotate(180deg)";
    lmtBtns.classList.toggle("on");
  });
});

/*
let num = 1;


*/

// const btnEvent = (e) => {
//   const current = e.currentTarget;

//   lmtBtns.forEach((lmtBtns) => lmtBtns.classList.remove("active"));
//   current.parentNode.classList.add("active");
// };

///////////////////////////////////////////////////////////////

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
