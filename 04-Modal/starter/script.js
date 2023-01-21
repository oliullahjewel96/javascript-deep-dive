"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}

const clickCloseModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModal.addEventListener("click", clickCloseModal);
overlay.addEventListener("click", clickCloseModal);

document.addEventListener("keydown", (e) => {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    clickCloseModal();
  }
});
