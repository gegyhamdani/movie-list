import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import Button from '../Button';

const Card = ({
  imgSrc,
  title,
  year,
  id,
  onOpenModalImage,
  onOpenMovieDetail
}) => {
  return (
    <div className={`${styles['card-item']}`}>
      <div className={styles.card}>
        <div
          className={`${styles['card-image']}`}
          onClick={() => onOpenModalImage(imgSrc)}
          role="button"
          aria-hidden="true"
        >
          <img alt="poster" src={imgSrc} />
        </div>
        <h5 className={styles.title}>{title}</h5>
        <p>{year}</p>
        <Button
          label="detail-movie"
          className={`${styles['card-button']}`}
          onClick={() => onOpenMovieDetail(id)}
        >
          Detail
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  id: PropTypes.string,
  onOpenModalImage: PropTypes.func,
  onOpenMovieDetail: PropTypes.func
};

Card.defaultProps = {
  imgSrc: '',
  title: '',
  year: '',
  id: '',
  onOpenModalImage: () => {},
  onOpenMovieDetail: () => {}
};

export default Card;
