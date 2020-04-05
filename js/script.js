window.onload = function() {
  function showModal(e) {
    e.preventDefault();
    document.querySelector(".backdrop").classList.add("open");
  }

  function closeModal(e) {
    e.preventDefault();
    document.querySelector(".backdrop").classList.remove("open");
  }

  var button = document.querySelector(".button-contact-us");
  var closeButton = document.querySelector(".modal-close");

  if (button) {
    button.addEventListener("click", showModal);
  }

  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }
};
