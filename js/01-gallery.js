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
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`;
        }).join('');
}

gallery.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" >
`)

    instance.show()
    
    gallery.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close()
		}
	})
})
