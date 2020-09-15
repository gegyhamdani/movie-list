/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import Search from './components/Search';
import MovieList from './components/MovieList';
import movieApi from './services/movieApi';
import ModalMovieImage from './components/Modal/ModalMovieImage';
import ModalMovieDetail from './components/Modal/ModalMovieDetail';

const App = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isOpenModalImage, setOpenModalImage] = useState(false);
  const [isOpenModalDetail, setOpenModalDetail] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [movieId, setMovieId] = useState('');
  const [movieDetail, setMovieDetail] = useState({});
  const [page, setPage] = useState(1);

  const handleSearchMovie = e => {
    if (e.key === 'Enter') {
      movieApi
        .getMovieList(movieTitle, page)
        .then(res => setMovieList(res.data.Search));
    }
  };

  const handleGetMovieDetail = () => {
    movieApi.getMovieDetail(movieId).then(res => setMovieDetail(res.data));
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
        <Search onChange={handleChangeMovie} onKeyPress={handleSearchMovie} />
        <MovieList
          movieList={movieList}
          onOpenModalImage={handleOpenModalImage}
          onOpenMovieDetail={handleOpenModalDetail}
        />
      </section>
    </div>
  );
};

export default App;
