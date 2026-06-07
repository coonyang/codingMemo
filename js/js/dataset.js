// for (let i = 0; i < $(".tab-button").length; i++) {
//   document
//     .querySelectorAll(".tab-button")
//     [i].addEventListener("click", function () {
//       탭열기(i);
//     });
// }

$(".list").click(function (e) {
  탭열기(e.target.dataset.id);
  // if (e.target == document.querySelectorAll(".tab-button")[0]) {
  //  탭열기(0);
  // }
  //   if (e.target == document.querySelectorAll(".tab-button")[1]) {
  //     탭열기(1);
  //   }
  //   if (e.target == document.querySelectorAll(".tab-button")[2]) {
  //     탭열기(2);
  //   }
});

function 탭열기(숫자) {
  $(".tab-button").removeClass("orange");
  $(".tab-content").removeClass("show");
  document.querySelectorAll(".tab-button")[숫자].classList.add("orange");
  document.querySelectorAll(".tab-content")[숫자].classList.add("show");
}
