import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper-mob", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    479: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
