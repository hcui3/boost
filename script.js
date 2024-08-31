//select nav element
const nav = document.querySelector(".nav");

// select menu button
const menu = document.querySelector(".menu");

// select nav close button
const navClose = document.querySelector("#navCloseBtn");

// add a click event listener to the nav open button
menu.addEventListener("click", () => {
  nav.classList.add("is-open");
});

// add a click event listener to the nav close button
navClose.addEventListener("click", () => {
  nav.classList.remove("is-open");
});

// select header
const header = document.querySelector(".header");

// add a scroll event listener to the window object
window.addEventListener("scroll", () => {
  window.scrollY > 50 ? header.classList.add("is-active") : header.classList.remove("is-active");
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// faq
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");

    const iconClass = isOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line";
    const iconElement = item.querySelector("i");
    iconElement.classList = iconClass;
  });
});
