import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper-menu", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    depth: 10,
  },

  autoplay: {
    delay: 1500,
  },

  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 5,
    },

    900: {
      slidesPerView: 3,
      spaceBetween: 5,
    },

    1024: {
      slidesPerView: 3.5,
    },

    1150: {
      slidesPerView: 3.8,
    },
    1250: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  },
});

function toggleMenuButton(activeSlide) {
  const cardInfoEl = document.querySelectorAll(".card-body__info");

  cardInfoEl.forEach((cardInfoEl) => {
    cardInfoEl.querySelectorAll(".card-body__button").forEach((button) => {
      button.remove();
    });
  });

  const button = document.createElement("button");
  button.classList.add("card-body__button");
  button.setAttribute("type", "button");
  button.textContent = "Открыть меню";

  const titleElement = activeSlide.querySelector(".card-body__title");
  titleElement.parentNode.insertBefore(button, titleElement);
}

const activeSlide = swiper.slides[swiper.activeIndex];
toggleMenuButton(activeSlide);

swiper.on("slideChange", () => {
  const activeSlide = swiper.slides[swiper.activeIndex];
  toggleMenuButton(activeSlide);
});
