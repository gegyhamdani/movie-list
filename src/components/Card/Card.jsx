import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Card = ({ imgSrc, title, year }) => {
  return (
    <div className={`${styles['card-item']}`}>
      <div className={styles.card}>
        <div className={`${styles['card-image']}`}>
          <img alt="poster" src={imgSrc} className={styles.image} />
        </div>
        <h5 className={styles.title}>{title}</h5>
        <p>{year}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string
};

Card.defaultProps = {
  imgSrc: '',
  title: '',
  year: ''
};

export default Card;
