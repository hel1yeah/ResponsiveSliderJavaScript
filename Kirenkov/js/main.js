const sliderItem = [...document.querySelectorAll(".hover-slider__item")];
const navItem = [...document.querySelectorAll(".hover-slider-nav__item")];

sliderItem.forEach((item, index) => {
  item.dataset.index = index;
  if (index === 0) {
    item.classList.add("hover-slider__item--active");
  }
});

navItem.forEach((item, index) => {
  item.dataset.index = index;
  if (index === 0) {
    item.classList.add("hover-slider-nav__item--active");
  }
});

function toggleActivity (index) {
  console.log(index);
  for (let i = 0; i < sliderItem.length; i++){
    if (i === Number(index)){
      sliderItem[i].classList.add('hover-slider__item--active');
      navItem[i].classList.add('hover-slider-nav__item--active');
    } else {
      sliderItem[i].classList.remove('hover-slider__item--active');
      navItem[i].classList.remove('hover-slider-nav__item--active');
    }
  }
}

document.querySelector('.hover-slider-nav').addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('hover-slider-nav__item')) {
    console.log('asdsad');
    toggleActivity(event.target.dataset.index)
  }
})