// Switch image in product slider
export const switchProductImage = function (thumbnail) {
  thumbnail.addEventListener("click", function (e) {
    if (e.target.classList.contains("thumb-img")) {
      // Remove active class
      document
        .querySelectorAll(".thumb-img")
        .forEach((t) => t.classList.remove("thumb-active"));
      // Add active class
      e.target.classList.add("thumb-active");
      //   Switch the image
      document.querySelector(".img-main").src = e.target.src;
    }
  });
};

// Change tab content base on button clicked
export const operateTabs = function (tabContainer, btnTab) {
  tabContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains(btnTab)) {
      // Remove content-active (to show content) class from all content
      document
        .querySelectorAll(".content")
        .forEach((c) => c.classList.remove("content-active"));

      // Remove btn-active class from all tab btns
      document
        .querySelectorAll(`.${btnTab}`)
        .forEach((btn) => btn.classList.remove("btn-tab-active"));

      // Add btn-tab-active to the current button
      e.target.classList.add("btn-tab-active");

      // Add the content-active class to the current tab content
      document
        .querySelector(`.content-${e.target.dataset.tab}`)
        .classList.add("content-active");
    }
  });
};

export const displayReviewForm = function (btnReview) {
  btnReview.addEventListener("click", function () {
    const data = document;
    document.querySelector(".content-1").classList.remove("content-active");
    document
      .querySelector(`.review-${btnReview.dataset.addReview}`)
      .classList.add("content-active");
  });
};

export const openAccordion = function (el) {
  el.addEventListener("click", function (e) {
    if (e.target.classList.contains("accordion")) {
      const panel = e.target.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.visibility = "hidden";
      } else {
        panel.style.visibility = "visible";
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  });
};
