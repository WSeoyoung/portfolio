// menu

$(document).ready(function () {
  $("#menu_btn").on("click", () => {
    $("#gnb").slideToggle(800);
  });
});




$(".menu>a").click(function(){            var submenu = $(this).next("ul");             // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기            if( submenu.is(":visible") ){                submenu.slideUp();            }else{                submenu.slideDown();            }        });
출처: https://stove99.tistory.com/103 [스토브 훌로구:티스토리]
// project

// skill
