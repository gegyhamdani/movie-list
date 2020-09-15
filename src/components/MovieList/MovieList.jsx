import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import Card from '../Card';

const MovieList = ({ movieList, onOpenModalImage, onOpenMovieDetail }) => {
  return (
    <div className={`${styles['movie-list']}`}>
      {movieList.map(item => {
        return (
          <Card
            key={item.imdbID}
            id={item.imdbID}
            title={item.Title}
            year={item.Year}
            imgSrc={item.Poster}
            onOpenModalImage={onOpenModalImage}
            onOpenMovieDetail={onOpenMovieDetail}
          />
        );
      })}
    </div>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.shape({})),
  onOpenModalImage: PropTypes.func,
  onOpenMovieDetail: PropTypes.func
};

MovieList.defaultProps = {
  movieList: [],
  onOpenModalImage: () => {},
  onOpenMovieDetail: () => {}
};

export default MovieList;
