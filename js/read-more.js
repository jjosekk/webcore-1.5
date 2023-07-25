const btnReadMore = document.querySelector(".btn");
const cards = Array.from(document.querySelectorAll(".repaired-brands__item"));
const expandImg = document.querySelector(".repaired-brands__expand");
let isOpen = false;

window.addEventListener("resize", (evt) => {
  if (evt.target.window.innerWidth >= 768) showMoreTablet();
  if (evt.target.window.innerWidth >= 1120) showMoreDesktop();
});

const showMoreDesktop = () => {
  if (window.innerWidth >= 1120) {
    cards.forEach((item, index) => {
      item.classList.add("hidden");
      if (index < 8) {
        item.classList.remove("hidden");
      }
    });
  }
};

const showMoreTablet = () => {
  if (window.innerWidth < 1120 && window.innerWidth >= 768) {
    cards.forEach((item, index) => {
      item.classList.add("hidden");
      if (index < 6) {
        item.classList.remove("hidden");
      }
    });
  }
};

const showMore = () => {
  if (window.innerWidth >= 1120 && !isOpen) {
    cards.forEach((item) => item.classList.remove("hidden"));
    isOpen = true;
    btnReadMore.textContent = "Скрыть";
    expandImg.style.transform = "rotate(180deg)";
  } else if (window.innerWidth >= 1120 && isOpen) {
    showMoreDesktop();
    btnReadMore.textContent = "Показать все";
    expandImg.style.transform = "none";
    isOpen = false;
  }

  if (window.innerWidth < 1120 && window.innerWidth >= 768 && !isOpen) {
    cards.forEach((item) => item.classList.remove("hidden"));
    isOpen = true;
    btnReadMore.textContent = "Скрыть";
    expandImg.style.transform = "rotate(180deg)";
  } else if (window.innerWidth < 1120 && window.innerWidth >= 768 && isOpen) {
    showMoreTablet();
    btnReadMore.textContent = "Показать все";
    expandImg.style.transform = "none";
    isOpen = false;
  }
};

btnReadMore.addEventListener("click", showMore);

showMoreDesktop();
showMoreTablet();

const slider = document.querySelector(".slider");
const swiperWrapper = document.querySelector(".repaired-brands__list");
const swiperSlide = document.querySelectorAll(".repaired-brands__item");
const swiperPagination = document.querySelector(".repaired-brands__pagination");

const mobileSlider = () => {
  if (window.innerWidth < 768) {
    slider.classList.add("swiper");

    slider.classList.add("swiper-initialized");

    swiperWrapper.classList.add("swiper-wrapper");

    swiperSlide.forEach((item) => {
      item.classList.add("swiper-slide");
      console.log(item);
    });

    swiperPagination.classList.add("swiper-pagination");
  }
};

mobileSlider();

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },

    528: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});
