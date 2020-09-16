import store from '../store';

const addMovieList = (id, data) => {
  const { getState } = store;
  const { movie } = getState();

  const clone = { ...movie };

  return [...clone[id], ...data];
};

export default { addMovieList };
