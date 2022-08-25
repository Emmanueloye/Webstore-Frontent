const slides = document.querySelectorAll(".slide");
const sliderDot = document.querySelector(".slider-dot");
let slidePosition = 0;
const slideLength = slides.length;

// Get current year for footer
export const getCurrentYear = () => {
  const now = new Date();
  document.querySelector("#year").textContent = now.getFullYear();
};

// Update slider position
export const updateSlider = function (currSlide) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currSlide)}%)`;
  });
};

// Move slider to the next slide
export const moveToNextSlide = function () {
  if (slidePosition === slideLength - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlider(slidePosition);
  activateDot(slidePosition);
};

// Move Slider to the previous slide
export const moveToPrevSlide = function () {
  if (slidePosition === 0) {
    slidePosition = slideLength - 1;
  } else {
    slidePosition--;
  }
  updateSlider(slidePosition);
  activateDot(slidePosition);
};

// Create Slider dots
export const createSliderDot = function () {
  slides.forEach((_, i) => {
    const dotHTML = `<span class="slide-dot" data-slide="${i}"></span>`;
    sliderDot.insertAdjacentHTML("beforeend", dotHTML);
  });
};

// Add active class to each dot of active slider
export const activateDot = function (currSlide) {
  document.querySelectorAll(".slide-dot").forEach((dot, i) => {
    dot.classList.remove("slide-dot-active");
  });
  document
    .querySelector(`.slide-dot[data-slide="${currSlide}"]`)
    .classList.add("slide-dot-active");
};

// To initialise slider on the first load
export const initiateSlider = function () {
  updateSlider(0);
  createSliderDot();
  activateDot(0);
  setInterval(() => moveToNextSlide(), 6000);
};
