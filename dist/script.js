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

const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const targetDate = new Date("June 18 2025 00:00:00").getTime();

function timer() {
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;

  const days = Math.floor(distance / 1000 / 60 / 60 / 24);
  const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(distance / 1000 / 60) % 60;
  const seconds = Math.floor(distance / 1000) % 60;

  // console.log(days + ":" + hours + ":" + minutes + ":" + seconds);

  Days.innerHTML = days;
  Hours.innerHTML = hours;
  Minutes.innerHTML = minutes;
  Seconds.innerHTML = seconds;

  if (distance < 0) {
    Days.innerHTML = "00";
    Hours.innerHTML = "00";
    Minutes.innerHTML = "00";
    Seconds.innerHTML = "00";
  }
}

setInterval(timer, 1000);

//  Sched Tabs
const schedNav = document.querySelectorAll(".sched__nav");
const schedItem = document.querySelectorAll(".sched__item");

schedNav.forEach((schedN) => {
  schedN.addEventListener("click", () => {
    removeActiveFaqN();
    schedN.classList.add("active");

    const activeItem = document.querySelector(`#${schedN.id}-content`);
    removeActiveContent();
    activeItem.classList.add("active");
  });
});

function removeActiveFaqN() {
  schedNav.forEach((schedN) => {
    schedN.classList.remove("active");
  });
}

function removeActiveContent() {
  schedItem.forEach((content) => {
    content.classList.remove("active"); 
  });
}

