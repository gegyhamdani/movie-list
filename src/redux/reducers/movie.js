import { ACTION_TYPES_MOVIE } from '../types';

const initialState = {};

const movie = (state = initialState, action) => {
  const { ADD_MOVIE_LIST, ADD_MOVIE_NAME } = ACTION_TYPES_MOVIE;
  const { type, movieSearchName, movieList } = action;

  const setMovieList = () => {
    return {
      ...state,
      ...movieList
    };
  };

  const setMovieSearchName = () => {
    return {
      ...state,
      movieSearchName
    };
  };

  switch (type) {
    case ADD_MOVIE_LIST:
      return setMovieList();
    case ADD_MOVIE_NAME:
      return setMovieSearchName();
    default:
      return state;
  }
};

export default movie;
