const navmenu = document.getElementById("menu");
const myHeader = document.querySelector(".header");
const coverLayer = document.querySelector(".cover");
const closerIocn = document.querySelector(".closer");
navmenu.addEventListener("click", function () {
  myHeader.classList.toggle("toggle-header");
  coverLayer.classList.toggle("toggle-cover");
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 1025) {
    myHeader.classList.remove("toggle-header");
    coverLayer.classList.remove("toggle-cover"); // remove cover layer with side navbar
  }
});

closerIocn.addEventListener("click", function () {
  myHeader.classList.remove("toggle-header");
  coverLayer.classList.remove("toggle-cover");
});
// change background

let images = [
  "./images/adidas.jpg",
  "./images/puma.jpg",
  "./images/hero-banner.png",
];
let secOne = document.querySelector(".sec-1");
let secOneButton = document.querySelector(".sec-1 .info button");
setInterval(() => {
  randomImage = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  secOne.style.backgroundImage = `url(${images[randomImage]})`;

  if (randomImage == 2) {
    secOne.style.color = "black";
    secOneButton.style.color = "white";
    secOneButton.style.backgroundColor = "hsl(5, 100%, 69%)";
  } else {
    secOne.style.color = "hsl(5, 100%, 69%)";
    secOneButton.style.color = "black";
    secOneButton.style.backgroundColor = "rgb(222, 216, 216)";
  }
}, 5000);

// work on slider image
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const imageWrapper = document.querySelector(".image-wrapper");

let scrollPosition = 0;

leftButton.addEventListener("click", () => {
  scrollPosition -= 400;
  if (scrollPosition < 0) {
    scrollPosition = 0;
  }
  imageWrapper.style.transform = `translateX(${-scrollPosition}px)`;
});

rightButton.addEventListener("click", () => {
  scrollPosition += 400;
  const maxScrollPosition = imageWrapper.scrollWidth - imageWrapper.clientWidth;
  if (scrollPosition > maxScrollPosition) {
    scrollPosition = maxScrollPosition;
  }
  imageWrapper.style.transform = `translateX(${-scrollPosition}px)`;
});

const up = document.getElementById("go-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    up.classList.remove("hide-btn");
  } else {
    up.classList.add("hide-btn");
  }
});

up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
