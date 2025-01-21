export default function getElementsArray(responseAnswerObject) {
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
  return elementsArray;
}
