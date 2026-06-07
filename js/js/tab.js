for (let i = 0; i < $(".tab-button").length; i++) {
  document
    .querySelectorAll(".tab-button")
    [i].addEventListener("click", function () {
      $(".tab-button").removeClass("orange");
      $(".tab-content").removeClass("show");
      document.querySelectorAll(".tab-button")[i].classList.add("orange");
      document.querySelectorAll(".tab-content")[i].classList.add("show");
    });
}

// 좋은 관습 : 반복적인 셀렉터는 변수에 넣어서 쓰기
// var 버튼 = $(".tab-button");
