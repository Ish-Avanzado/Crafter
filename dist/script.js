const burger = document.querySelector(".toggle__menu");
const hnav = document.querySelector(".header__navm");
const cta = document.querySelector(".header__ctam");
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    hnav.classList.toggle("open");
    cta.classList.toggle("open");
});