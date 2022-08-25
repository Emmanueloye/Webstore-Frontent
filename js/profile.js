// Preview single image on change
export const previewSingleImage = function (image) {
  image.addEventListener("change", function (e) {
    const reader = new FileReader();
    reader.addEventListener("load", function (e) {
      document.querySelector(".preview-img").src = reader.result;
    });
    reader.readAsDataURL(e.target.files[0]);
  });
};

// Show and hide password
export const revealPassword = function (form) {
  form.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-solid")) {
      const input = e.target
        .closest(".f-group")
        .querySelector(".form-input-plain");
      if (input.type === "password") {
        input.type = "text";
        e.target.classList.remove("fa-eye");
        e.target.classList.add("fa-eye-slash");
      } else {
        input.type = "password";
        e.target.classList.remove("fa-eye-slash");
        e.target.classList.add("fa-eye");
      }
    }
  });
};

export const showAddressBook = function () {
  const formHidden = document.querySelector(".form-sec");
  const addressBtn = document.querySelector(".btn-address");
  formHidden.classList.add("dnone");

  addressBtn.addEventListener("click", function () {
    formHidden.classList.toggle("dblock");
  });
};
