const overlayEl = document.querySelector("#data-modal");
const menuSection = document.querySelector(".menu-section");

const toggleMenu = () => {
  overlayEl.classList.toggle("is-hidden");

  document.body.style.overflow = overlayEl.classList.contains("is-hidden")
    ? "auto"
    : "hidden";
};

const closeMenuOnEscape = (event) => {
  if (event.key === "Escape" && !overlayEl.classList.contains("is-hidden")) {
    toggleMenu();
  }
};

menuSection.addEventListener("click", (event) => {
  if (event.target.classList.contains("card-body__button")) {
    toggleMenu();
  }
});

overlayEl.addEventListener("click", (event) => {
  if (event.currentTarget === overlayEl) {
    toggleMenu();
  }
});

document.addEventListener("keydown", closeMenuOnEscape);
