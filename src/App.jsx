/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './app.module.css';
import Search from './components/Search';
import movieApi from './services/movieApi';

const App = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [page, setPage] = useState(1);

  const handleSearchMovie = e => {
    if (e.key === 'Enter') {
      movieApi.getMovieList(movieTitle, page).then();
    }
  };

  const handleChangeMovie = e => {
    const title = e.target.value;
    setMovieTitle(title);
  };

  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <h1>Movie Database</h1>
        <Search onChange={handleChangeMovie} search={handleSearchMovie} />
      </section>
    </div>
  );
};

export default App;
