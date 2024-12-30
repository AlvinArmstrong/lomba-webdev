const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
});

navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

//Ulasan


var multipleCardCarousel = document.querySelector(
  "#carouselReview"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
      scrollPosition += cardWidth;  //update scroll position
      $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
    }
  });
  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $(".carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}