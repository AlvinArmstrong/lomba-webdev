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

//Double language
const translations = {
  en: {
    "slogan": "Sunking in the Beauty of",
    "desc-hero": "The beauty of Negeri kahyanganajgluhaeuighlshg.auerhghwebgawu"
  },
  id: {
    "slogan": "Terbenam dalam Keindahan",
    "desc-hero": "Nuansa negeri dongeng di lembah Gunung Merbabu bak negeri kahyangan yang asri dan pastinya instagramable. Dilengkapi dengan berbagai fasilitas yang lengkap serta nyaman membuat Negeri Kahyangan suatu destinasi wisata yang ramah keluarga."
  }
};

function setLanguage(lang) {
  $('[data-i18n]').each(function() {
    const key = $(this).data('i18n');
    $(this).text(translations[lang][key]);
  });
}

setLanguage('en');