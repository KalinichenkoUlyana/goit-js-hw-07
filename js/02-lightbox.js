import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imageMarkup = createaImagesGallery(galleryItems);

gallery.insertAdjacentHTML('afterbegin', imageMarkup);

function createaImagesGallery(items) {
    return items
        .map(({ preview, original, description }) => {
            return`<div class="gallery__item">
            <a class="gallery__item"
            href="${original}">
      <img class="gallery__image"
        src="${preview}"
        alt="${description}" />
            </a>
               
            </div>`;
        }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250, captionPosition: "bottom"});
