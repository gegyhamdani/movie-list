import axios from 'axios';

const apiUrlBase = 'http://www.omdbapi.com';

const apiKey = 'faf7e5bb&s';

const apiUrl = `${apiUrlBase}/?apikey=${apiKey}`;

const errorResponseHandler = error => {
  return Promise.reject(error);
};

const getInstance = () => {
  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 10000
  });

  instance.interceptors.response.use(
    response => response,
    errorResponseHandler
  );
  return instance;
};

const routes = {
  movieList: (title, page) => `&s=${title}&page=${page}`,
  movieDetail: id => `&i=${id}`
};

export default {
  getInstance,
  routes
};
