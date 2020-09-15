import axiosInstance from "./axiosInstance";

const movieList = (movieName, page) => {
  const { getInstance, routes } = axiosInstance;

  return new Promise((resolve, reject) => {
    getInstance()
      .get(routes.movie(movieName, page))
      .then((res) => resolve(res))
      .catch(reject);
  });
};

export default {
  movieList,
};
