// Module imports
import * as Product from "./product.js";
import * as Slider from "./slider.js";
import * as Profile from "./profile.js";

// DOM
const nav = document.querySelector(".main-nav");
const navDropDown = document.querySelectorAll(".nav-link--dropdw");
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".slider-right");
const prevBtn = document.querySelector(".slider-left");
const sliderDotWrap = document.querySelector(".slider-dot");
const thumbnail = document.querySelector(".thumbnails");
const tabContainer = document.querySelector(".tab");
const btnReview = document.querySelector(".btn-review");
const productaside = document.querySelector(".product-aside");
const singleImage = document.querySelector(".photo");
const form = document.querySelector(".form");
const formHidden = document.querySelector(".form-sec");

// Delegation
Slider.getCurrentYear();
// Mobile navigation toggle
if (nav) {
  nav.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-link--dropdw")) {
      e.target.nextElementSibling.classList.toggle("show");
    }
  });
}
//===== Slider Functionality =====//
// Initialise slider
if (slider) {
  Slider.initiateSlider();
}
// Move slider to the next one
if (nextBtn) {
  nextBtn.addEventListener("click", Slider.moveToNextSlide);
}
// Move slider to previous one
if (prevBtn) {
  prevBtn.addEventListener("click", Slider.moveToPrevSlide);
}
// Move slider by clicking on the dots
if (sliderDotWrap) {
  sliderDotWrap.addEventListener("click", function (e) {
    if (e.target.classList.contains("slide-dot")) {
      const { slide } = e.target.dataset;
      Slider.updateSlider(slide);
      Slider.activateDot(slide);
    }
  });
}

// Product slider
if (thumbnail) {
  Product.switchProductImage(thumbnail);
}
// Tab
if (tabContainer) {
  Product.operateTabs(tabContainer, "btn-tab");
}
// Show review form
if (btnReview) {
  Product.displayReviewForm(btnReview);
}
// accordion
if (productaside) {
  Product.openAccordion(productaside);
}

// Profile functionalities
if (singleImage) {
  Profile.previewSingleImage(singleImage);
}
// Toggle show password
if (form) {
  Profile.revealPassword(form);
}

if (formHidden) {
  Profile.showAddressBook();
}
// Owl carousel initialisation
$(".owl-carousel").owlCarousel({
  // loop: true,
  // margin: 0,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    576: {
      items: 2,
      nav: true,
    },
    768: {
      items: 3,
      nav: true,
    },
    995: {
      items: 4,
      nav: true,
    },
    1400: {
      items: 5,
      nav: true,
    },
  },
});
