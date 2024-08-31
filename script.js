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

// scroll reveal
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 600,
  reset: true,
});

// custom configurations for specific elements
const revealWithDelay = {
  distance: "100px",
  delay: 400,
};

// banner
sr.reveal(".banner__text", { origin: "top" });
sr.reveal(".banner__img");

// brands
sr.reveal(".brands__title", revealWithDelay);
sr.reveal(".brands__img", { distance: "100px", interval: 100 });

// benefits
sr.reveal(".benefits__title");
sr.reveal(".benefit__text", { distance: "100px", origin: "left" });
sr.reveal(".benefit__img", { distance: "100px", origin: "right" });
sr.reveal(".benefit--2 .benefit__img", { distance: "100px", origin: "left" });
sr.reveal(".benefit--2 .benefit__text", { distance: "100px", origin: "right" });

// testimonials
sr.reveal(".testimonials, .testimonials__container", {
  distance: "100px",
});

// services
sr.reveal(".services__title, .services__item", { distance: "100px", interval: 100 });

// FAQ
sr.reveal(".faq__img", { distance: "100px", origin: "top", interval: 100 });

sr.reveal(".faq__title, .faq__item", { distance: "100px", interval: 100 });

// contact
sr.reveal(".contact__form-wrapper");
sr.reveal(".contact__img", { origin: "top" });

// footer
sr.reveal(".footer");
