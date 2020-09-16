/* eslint-disable import/prefer-default-export */
import { ACTION_TYPES_MOVIE } from '../types';

const { ADD_MOVIE_LIST, ADD_MOVIE_NAME } = ACTION_TYPES_MOVIE;

export const setMovieList = (movieSearchName, movieList) => ({
  type: ADD_MOVIE_LIST,
  movieSearchName,
  movieList
});

export const setMovieSearchName = movieSearchName => ({
  type: ADD_MOVIE_NAME,
  movieSearchName
});
