import store from '../store';

const addMovieList = (id, data, isPrefetch = false) => {
  const { getState } = store;
  const { movie } = getState();

  const clone = { ...movie };
  const obj = {};
  if (isPrefetch) {
    obj[id] = data;

    return obj;
  }
  const merge = [...clone[id], ...data];
  obj[id] = merge;
  return obj;
};

export default { addMovieList };
