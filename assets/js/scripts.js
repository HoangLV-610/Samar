//Header fixed
let header = document.querySelector("#header .section-content");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 40) {
    header.classList.add("is-fixed");
  } else {
    header.classList.remove("is-fixed");
  }
});

// div feature
let divItems = document.querySelectorAll(
  ".wrap-list-features .div-item .div-content"
);

divItems.forEach((item) => {
  //khi chạm vào div feature thì xoá tất cả active và thêm active vào div vừa chạm
  item.addEventListener("mouseenter", function () {
    divItems.forEach((div) => {
      // Tắt hiệu ứng hình ảnh cho tất cả các div
      const divImage = div.querySelector(".div-img img");
      if (divImage) {
        divImage.src = divImage.src.replace("white", "pink");
        divImage.classList.remove("show");
      } else {
        console.log("Không có");
      }
      div.classList.remove("active");
    });

    item.classList.add("active");
    //hình featere
    // Hiện thị hiệu ứng cho div hiện tại
    let divImage = item.querySelector(".div-img img");
    if (divImage) {
      divImage.src = divImage.src.replace("pink", "white");
      divImage.classList.add("show");
    }
  });
});

// COUNT UP
$(".counter").countUp({
  time: 5000,
  delay: 100,
  easing: "easeInOutQuad",
});

// FANCYBOX
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// TESTMONIAL
$(".wrap-list-comments").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".wrap-list-user",
});
$(".wrap-list-user").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".wrap-list-comments",
  centerMode: true,
  focusOnSelect: true,
});

// CAROSEL BLOGS
$(".wrap-list-logos ").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
