import _ from 'lodash';
import store from '../store';

const addMovieList = (id, data) => {
  const { getState } = store;
  const { movie } = getState();

  const clone = { ...movie };
  const obj = {};
  if (_.isEmpty(clone[id])) {
    obj[id] = data;

    return obj;
  }
  const merge = [...clone[id], ...data];
  obj[id] = merge;
  return obj;
};

export default { addMovieList };
