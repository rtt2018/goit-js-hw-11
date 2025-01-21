import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import iconSvgError from '../img/allert.svg';

const API_KEY = '48329924-6906af0078b1de986ec16b549';
const galleryList = document.querySelector('.gallery');
const loaderElement = document.querySelector('.loader');

const errFindImagesMessage = {
  message:
    'Sorry, there are no images matching \n your search query. Please, try again!',
  messageColor: '#fff',
  backgroundColor: '#ef4040',
  position: 'topRight',
  iconUrl: iconSvgError,
  timeout: false,
};

function addImagesElements(responseAnswerObject) {
  const elementsArray = responseAnswerObject.hits.map(element => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = element;
    const addListItem = document.createElement('li');
    addListItem.classList.add('gallery-item');
    const imgLink = document.createElement('a');
    imgLink.classList.add('gallery-link');
    imgLink.href = largeImageURL;
    const addImage = document.createElement('img');
    addImage.alt = tags;
    addImage.src = webformatURL;
    addImage.classList.add('gallery-image');
    imgLink.appendChild(addImage);
    addListItem.appendChild(imgLink);
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');
    descriptionContainer.innerHTML = `<div class="item-desc-container"><span class="description-name">Likes</span><span class="description-counts">${likes}</span></div>
    <div class="item-desc-container"><span class="description-name">Views</span><span class="description-counts">${views}</span></div>
    <div class="item-desc-container"><span class="description-name">Comments</span><span class="description-counts">${comments}</span></div>
    <div class="item-desc-container"><span class="description-name">Downloads</span><span class="description-counts">${downloads}</span></div>`;

    addListItem.appendChild(descriptionContainer);
    return addListItem;
  });
  galleryList.append(...elementsArray);
}

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

gallery.on('show.simplelightbox', function () {});

gallery.on('error.simplelightbox', function (e) {
  console.log(e);
});

const requestForm = document.querySelector('.search-form');
requestForm.addEventListener('submit', searchImages);

function searchImages(event) {
  // 1. Показуємо лоадер
  // 2. Відсилаємо запит
  // 3. Отримуємо респонз від беку
  // 4. Ховаємо лоадер
  // 5. Обробляємо результат
  //   5.1 Якщо результат прийшов без зображень, то виводимо повідомленння
  //   5.2 Якщо зображення знайдено, додаємо елементи у галерею
  // 6.Робимо релоад сімпллайтбоксу
  event.preventDefault();
  loaderElement.classList.remove('visually-hidden');
  galleryList.innerHTML = '';
  const URL =
    'https://pixabay.com/api/?key=' +
    API_KEY +
    '&q=' +
    encodeURIComponent(event.currentTarget.requestField.value);
  console.log('searchImages  URL:', URL);

  fetch(URL, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error(response.status);
      }
      setTimeout(2000);
      loaderElement.classList.add('visually-hidden');
      console.log(data);
      addImagesElements(data);
      gallery.refresh();
    })
    .catch(() => {
      iziToast.show(errFindImagesMessage);
    })
    .finally(() => {
      loaderElement.classList.add('visually-hidden');
    });
}
