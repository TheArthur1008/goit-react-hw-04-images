import axios from 'axios';
const imageApi = axios.create({
  baseURL: 'https://pixabay.com/api',
});

const imagesFetch = async ({ page = 1, searchQuery = '' }) => {
  const response = await imageApi.get('/', {
    params: {
      q: searchQuery,
      page,
      key: '29970576-9b76d84290c725bde7fe9f5e7',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data.hits;
};

export default imagesFetch;
