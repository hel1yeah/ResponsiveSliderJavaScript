const images = document.querySelectorAll(".slider .slider-line img");
const sliderLine = document.querySelector(".slider-line");
const nextArrow = document.querySelector(".slider-next");
const prevArrow = document.querySelector(".slider-prev")
let count = 0;
let width;

function init() {
  console.log("resize");
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.heigth = "auto";
  });
  rollSlider()
}

window.addEventListener("resize", init);
init();

nextArrow.addEventListener("click", () => {
  count++;
  count >= images.length ? count = 0 : ''
  rollSlider()
});
prevArrow.addEventListener("click", () => {
  count--;
  count < 0 ? count = images.length - 1 : ''
  rollSlider()
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' +count*width+ 'px)';
  console.log(sliderLine.style.transform);
}
