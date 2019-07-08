window.onload = function() {
  function showModal(e) {
    e.preventDefault();
    document.querySelector(".backdrop").classList.add("open");
  }

  function closeModal(e) {
    e.preventDefault();
    document.querySelector(".backdrop").classList.remove("open");
  }

  document.querySelector(".button-contact-us").addEventListener("click", showModal);
  document.querySelector(".modal-close").addEventListener("click", closeModal);
};
