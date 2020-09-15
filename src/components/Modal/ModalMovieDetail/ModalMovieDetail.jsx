import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import Button from '../../Button';
import Spinner from '../../Spinner';

const ModalMovieDetail = ({ open, isLoading, onClose, movieData }) => {
  const {
    Poster,
    Title,
    Plot,
    Released,
    Rated,
    Director,
    Actors,
    Genre,
    Runtime,
    Language,
    Awards,
    imdbRating,
    imdbVotes,
    Production
  } = movieData;

  return (
    <div
      className={`${styles['modal-movie-detail']}`}
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'initial' : 'none',
        zIndex: open ? 13 : -1
      }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={`${styles['movie-detail']}`}>
          <div className={`${styles.movie}`}>
            <div className={`${styles['movie-poster']}`}>
              <img alt="poster" src={Poster} />
            </div>
            <Button className={`${styles['movie-button']}`} onClick={onClose}>
              Close
            </Button>
          </div>

          <div className={`${styles.detail}`}>
            <h3>{Title}</h3>
            <p className={`${styles['little-detail']}`}>
              {`${Released}, ${Rated}`}
            </p>
            <p className={styles.plot}>{Plot}</p>
            <ul>
              <li>
                <span>Director</span>
                <p>{Director}</p>
              </li>
              <li>
                <span>Cast</span>
                <p>{Actors}</p>
              </li>
              <li>
                <span>Genre</span>
                <p>{Genre}</p>
              </li>
              <li>
                <span>Duration</span>
                <p>{Runtime}</p>
              </li>
              <li>
                <span>Language</span>
                <p>{Language}</p>
              </li>
              <li>
                <span>Awards</span>
                <p>{Awards}</p>
              </li>
              <li>
                <span>Rate</span>
                <p className={styles.rate}>{imdbRating}</p>
                <p className={styles.votes}>{`${imdbVotes} review`}</p>
              </li>
              <li>
                <span>Production</span>
                <p>{Production}</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

ModalMovieDetail.propTypes = {
  open: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClose: PropTypes.func,
  movieData: PropTypes.shape({
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Plot: PropTypes.string,
    Released: PropTypes.string,
    Rated: PropTypes.string,
    Director: PropTypes.string,
    Actors: PropTypes.string,
    Genre: PropTypes.string,
    Runtime: PropTypes.string,
    Language: PropTypes.string,
    Awards: PropTypes.string,
    imdbRating: PropTypes.string,
    imdbVotes: PropTypes.string,
    Production: PropTypes.string
  })
};

ModalMovieDetail.defaultProps = {
  open: false,
  isLoading: false,
  onClose: () => {},
  movieData: {}
};

export default ModalMovieDetail;
