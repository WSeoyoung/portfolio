// menu
const menuBtn = document.querySelector('#menu_btn')
const nav = document.querySelector('nav')
const gnb = document.querySelector('#gnb')

// menuBtn.addEventListener('click', () => {
//   nav.classList.toggle('on')
// })

// menuBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   $("#gnb").slideToggle(800);

// })

$(document).ready(function () {
  $("#menu_btn").on("click", (e) => {
    e.preventDefault();
    $("#gnb").slideToggle(500);
  });
});

// project

// skill
