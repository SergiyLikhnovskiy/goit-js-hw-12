import axios from 'axios';
const MY_API_KEY = '56458630-d01f51161f93b41d033a282d5';
const BASE_URL = 'https://pixabay.com/api/';
axios.defaults.baseURL = BASE_URL;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: MY_API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  };
  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
