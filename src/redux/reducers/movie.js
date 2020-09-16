import { ACTION_TYPES_MOVIE } from '../types';

const initialState = {
  movieList: []
};

const movie = (state = initialState, action) => {
  const { ADD_MOVIE_LIST } = ACTION_TYPES_MOVIE;
  const { type, movieSearchName, movieList } = action;

  const setMovieList = () => {
    const clone = { ...state };
    clone[movieSearchName] = movieList;

    return clone;
  };

  if (type === ADD_MOVIE_LIST) return setMovieList();
  return state;
};

export default movie;
