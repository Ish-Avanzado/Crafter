const burger = document.querySelector(".toggle__menu");
const hnav = document.querySelector(".header__navm");
const cta = document.querySelector(".header__ctam");
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    hnav.classList.toggle("open");
    cta.classList.toggle("open");
});

const hColor = document.querySelector(".header");
window.addEventListener("scroll", () => {
  window.console.log(scrollY);
  if (window.scrollY >= 1) {
    hColor.classList.add("bg");
  } else {
    hColor.classList.remove("bg");
  }
});