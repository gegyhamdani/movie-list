import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import Card from '../Card';

const MovieList = ({ movieList, onOpenModalImage }) => {
  return (
    <div className={`${styles['movie-list']}`}>
      {movieList.map(item => {
        return (
          <Card
            key={item.imdbID}
            title={item.Title}
            year={item.Year}
            imgSrc={item.Poster}
            onOpenModalImage={onOpenModalImage}
          />
        );
      })}
    </div>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.shape({})),
  onOpenModalImage: PropTypes.func
};

MovieList.defaultProps = {
  movieList: [],
  onOpenModalImage: () => {}
};

export default MovieList;
