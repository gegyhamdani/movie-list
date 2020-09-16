/* eslint-disable import/prefer-default-export */
import { ACTION_TYPES_MOVIE } from '../types';

const { ADD_MOVIE_LIST } = ACTION_TYPES_MOVIE;

export const setMovieList = (movieSearchName, movieList) => ({
  type: ADD_MOVIE_LIST,
  movieSearchName,
  movieList
});
