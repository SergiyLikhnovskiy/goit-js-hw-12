import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMore,
  refs,
  showLoader,
  showLoadMore,
} from './js/render-functions';

let page = 1;
let searchQuery = '';
const perPage = 15;

refs.formEl.addEventListener('submit', async event => {
  event.preventDefault();
  const userInput = event.currentTarget.elements['search-text'].value.trim();
  if (userInput === '') {
    iziToast.error({
      message: 'error',
    });
    return;
  }
  searchQuery = userInput;
  page = 1;

  clearGallery();
  showLoader();
  hideLoadMore();

  try {
    const { hits, totalHits } = await getImagesByQuery(searchQuery, page);

    if (!hits || hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    createGallery(hits);
    const totalPages = Math.ceil(totalHits / perPage);

    if (totalPages > page) {
      showLoadMore();
    } else {
      iziToast.info({
        title: 'info',
        message: "Were sorry,but you've reached the end of search results.",
        position: 'topRight',
      });
      hideLoadMore();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
    });
  } finally {
    hideLoader();
    refs.formEl.reset();
  }
});

//!loadMore//

if (refs.loadMore) {
  refs.loadMore.addEventListener('click', async () => {
    hideLoadMore();
    showLoader();

    page += 1;
    console.log(page);
    try {
      const { hits, totalHits } = await getImagesByQuery(searchQuery, page);
      createGallery(hits);
      hideLoader();

      let elements = refs.galleryEl.querySelector('.gallery-item');
      if (elements) {
        const cardHeight = elements.getBoundingClientRect().height;
        window.scrollBy({
          top: cardHeight * 2,
          behavior: 'smooth',
        });
      }

      const totalPages = Math.ceil(totalHits / perPage);

      if (totalPages > page) {
        showLoadMore();
      } else {
        iziToast.info({
          title: 'info',
          message: "Were sorry,but you've reached the end of search results.",
          position: 'topRight',
        });
        hideLoadMore();
      }
    } catch (error) {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'Failed to load more images.',
        position: 'topRight',
      });
    }
  });
}
