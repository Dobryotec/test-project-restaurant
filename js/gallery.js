import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery-images__list");
gallery.addEventListener("click", onCardClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
    <img
      class="gallery__image"
      width="358"
      height="269"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />

  </li>`
    )
    .join("");
}

gallery.innerHTML = createGalleryMarkup(galleryItems);

function onCardClick(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `
     <img
      class="gallery__image"
      src="${event.target.dataset.source}"
    />`,
    {
      onShow: (instance) => {
        gallery.addEventListener("keydown", onEscapeClick);
      },
      onClose: (instance) => {
        gallery.removeEventListener("keydown", onEscapeClick);
      },
    }
  );
  instance.show();
  function onEscapeClick(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
