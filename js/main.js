const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("navDark");
  } else {
    header.classList.remove("navDark");
  }
});

const navToggle = document.querySelector("#navToggle");
const navMenu = document.querySelector("#navMenu");

document.addEventListener("click", function (e) {
  if (e.target.classList == "navMenuItemLink") {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
});

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;

const arrowUp = document.querySelector(".arrowUp");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

const swiper = new Swiper(".projectSlideContent", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,
  //   },
  //   769: {
  //     slidesPerView: 2,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //   },
  // },
});
