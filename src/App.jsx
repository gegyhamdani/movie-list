/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './app.module.css';
import Search from './components/Search';
import MovieList from './components/MovieList';
import movieApi from './services/movieApi';
import ModalMovieImage from './components/Modal/ModalMovieImage';

const App = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isOpenModalImage, setOpenModalImage] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [page, setPage] = useState(1);

  const handleSearchMovie = e => {
    if (e.key === 'Enter') {
      movieApi
        .getMovieList(movieTitle, page)
        .then(res => setMovieList(res.data.Search));
    }
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

  return (
    <div className={styles.container}>
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
        />
      </section>
    </div>
  );
};

export default App;
