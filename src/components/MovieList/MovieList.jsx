import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import Card from '../Card';

const MovieList = ({ movieList }) => {
  return (
    <div className={`${styles['movie-list']}`}>
      {movieList.map(item => {
        return (
          <Card
            key={item.imdbID}
            title={item.Title}
            year={item.Year}
            imgSrc={item.Poster}
          />
        );
      })}
    </div>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.shape({}))
};

MovieList.defaultProps = {
  movieList: []
};

export default MovieList;
