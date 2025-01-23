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
var multipleCardCarousel = document.querySelector("#carouselReview");

if (window.matchMedia("(min-width: 768px)").matches) {
  var carouselInner = $(".carousel-inner");
  var carouselWidth = carouselInner[0].scrollWidth;
  var cardWidth = $(".carousel-item").outerWidth(true); // Hitung termasuk margin
  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - carouselInner.width()) {
      scrollPosition += cardWidth;
      carouselInner.animate({ scrollLeft: scrollPosition }, 600);
    }
  });

  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      carouselInner.animate({ scrollLeft: scrollPosition }, 600);
    }
  });

  new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}

//Cegah refresh waktu submit
const form = document.querySelector('form'); 
 
form.addEventListener('submit', function(event) { 
  event.preventDefault();  
}); 

//collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}