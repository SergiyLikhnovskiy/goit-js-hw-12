import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
  formEl: document.querySelector('.form'),
  galleryEl: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMore: document.querySelector('.Load_more'),
  galleryItem: document.querySelector('.gallery-item'),
};

export const simplelightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const galleryMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            loading="lazy"
          />
        </a>
        <div class="info-box">
          <p>
            <b>Likes:</b> ${likes}
          </p>
          <p>
            <b>Views:</b> ${views}
          </p>
          <p>
            <b>Comments:</b> ${comments}
          </p>
          <p>
            <b>Downloads:</b> ${downloads}
          </p>
        </div>
      </li>`;
      }
    )
    .join('');
  refs.galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
  simplelightbox.refresh();
}

export function clearGallery() {
  refs.galleryEl.innerHTML = '';
}
export function hideLoader() {
  refs.loader.classList.add('is-hidden');
}
export function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

export function hideLoadMore() {
  refs.loadMore.classList.add('is-hidden');
}
export function showLoadMore() {
  refs.loadMore.classList.remove('is-hidden');
}
