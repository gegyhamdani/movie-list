/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './app.module.css';

import Search from './components/Search';
import MovieList from './components/MovieList';
import ModalMovieImage from './components/Modal/ModalMovieImage';
import ModalMovieDetail from './components/Modal/ModalMovieDetail';
import Spinner from './components/Spinner';

import movieApi from './services/movieApi';

import useInfiniteScroll from './hooks/useInfiniteScroll';

import {
  setMovieList as setMovieListAction,
  setMovieSearchName as setMovieSearchNameAction
} from './redux/actions/movie';

const App = ({ movie, movieSearchName, setMovieList, setMovieSearchName }) => {
  const [movieTitle, setMovieTitle] = useState('');
  const [isOpenModalImage, setOpenModalImage] = useState(false);
  const [isOpenModalDetail, setOpenModalDetail] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [movieId, setMovieId] = useState('');
  const [movieDetail, setMovieDetail] = useState({});
  const [isMovieListLoading, setMovieListLoading] = useState(false);
  const [isMovieDetailloading, setMovieDetailLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchMoreListItems = () => {};

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  const handleSearchMovie = e => {
    if (e.key === 'Enter') {
      setMovieList([]);
      setMovieListLoading(true);
      movieApi
        .getMovieList(movieTitle, page)
        .then(res => {
          if (res.data.Response === 'True') {
            setMovieList(movieTitle, res.data.Search);
            setMovieSearchName(movieTitle);
          }
        })
        .finally(() => setMovieListLoading(false));
    }
  };

  const handleGetMovieDetail = () => {
    setMovieDetailLoading(true);
    movieApi
      .getMovieDetail(movieId)
      .then(res => setMovieDetail(res.data))
      .finally(() => setMovieDetailLoading(false));
  };

  const handleChangeMovie = e => {
    const title = e.target.value;
    setMovieTitle(title);
  };

  const handleOpenModalImage = imgSrc => {
    setModalImageSrc(imgSrc);
    setOpenModalImage(true);
  };

  const handleCloseModalImage = () => {
    setOpenModalImage(false);
    setTimeout(() => {
      setModalImageSrc('');
    }, 400);
  };

  const handleOpenModalDetail = id => {
    setOpenModalDetail(true);
    setMovieId(id);
  };

  const handleCloseModalDetail = () => {
    setOpenModalDetail(false);
    setTimeout(() => {
      setMovieDetail({});
      setMovieId('');
    }, 400);
  };

  useEffect(() => {
    if (movieId) handleGetMovieDetail();
  }, [movieId]);

  return (
    <div className={styles.container}>
      <ModalMovieDetail
        open={isOpenModalDetail}
        isLoading={isMovieDetailloading}
        onClose={handleCloseModalDetail}
        movieData={movieDetail}
      />
      <ModalMovieImage
        open={isOpenModalImage}
        onClose={handleCloseModalImage}
        imgSrc={modalImageSrc}
      />
      <section className={styles.wrapper}>
        <h1>Movie Database</h1>
        <Search
          onChange={handleChangeMovie}
          onKeyPress={handleSearchMovie}
          placeholder="Search for movie by Title"
        />
        {isMovieListLoading && <Spinner />}
        {movie[movieSearchName] === undefined && !isMovieListLoading && (
          <p className={`${styles['no-movie']}`}>No movies are shown</p>
        )}
        <MovieList
          movieList={movie[movieSearchName]}
          onOpenModalImage={handleOpenModalImage}
          onOpenMovieDetail={handleOpenModalDetail}
        />
      </section>
    </div>
  );
};

App.propTypes = {
  movie: PropTypes.shape({}),
  movieSearchName: PropTypes.string,
  setMovieList: PropTypes.func,
  setMovieSearchName: PropTypes.func
};

App.defaultProps = {
  movie: {},
  movieSearchName: '',
  setMovieList: () => {},
  setMovieSearchName: () => {}
};

const mapStateToProps = state => {
  const { movie } = state;
  const { movieSearchName } = movie;
  return { movie, movieSearchName };
};

const mapDispatchToProps = dispatch => {
  return {
    setMovieList: (movieName, movieData) =>
      dispatch(setMovieListAction(movieName, movieData)),
    setMovieSearchName: movieName =>
      dispatch(setMovieSearchNameAction(movieName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
