// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

// 1. Add code in HTML
const galery = document.querySelector(".gallery");
const itemsMarkup = galleryItems.map( galleryItem => 
    `<a class="gallery__link" href="${galleryItem.original}">
            <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
    </a>`
    ).join(""); 

galery.insertAdjacentHTML('beforeend', itemsMarkup)


// 2. Add library
let gallery = new SimpleLightbox('.gallery a', 
    {
        captionsData: "alt", 
        captionDelay: "250",
    }
);
