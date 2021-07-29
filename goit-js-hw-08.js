// - Создание и рендер разметки по массиву данных galleryItems из app.js и
// предоставленному шаблону.
// - Реализация делегирования на галерее ul.js - gallery и получение url большого
// изображения.
// - Открытие модального окна по клику на элементе галереи.
// - Подмена значения атрибута src элемента img.lightbox__image.
// - Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// - Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для
// того, чтобы при следующем открытии модального окна, пока грузится изображение,
//     мы не видели предыдущее.


// ---------

// Ссылка на оригинальное изображение должна храниться 
// в data - атрибуте source на элементе img,
// и указываться в href ссылки(это необходимо для доступности).

// <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li>


import galleryList from './app.js';

const refs = {
    gallery: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.js-lightbox'),
    button: document.querySelector('[data-action="close-lightbox"]'),
};

refs.gallery = document.querySelector('.js-gallery');
const imageEl = makeImagesMarkUp(galleryList);

refs.gallery.insertAdjacentHTML('beforeend', imageEl);

function makeImagesMarkUp(galleryList) {
    return galleryList.map(({ preview, original, description }) => {
return `
<li class="gallery__item">
  <a
    class="gallery__link"
    href="${preview}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
 `;
    }).join('');
}



// refs.gallery.addEventListener('click', onImageClick);

// function onImageClick(e) {
// console.log(e.target);
  
// };











