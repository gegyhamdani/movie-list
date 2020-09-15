import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const ModalMovieImage = ({ open, onClose, imgSrc }) => {
  const onPreventBackgroundClick = e => {
    e.stopPropagation();
  };

  return (
    <div
      className={`${styles['modal-movie-image']}`}
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'initial' : 'none',
        zIndex: open ? 13 : -1
      }}
      onClick={onClose}
      role="button"
      aria-hidden="true"
    >
      <button
        type="button"
        onClick={e => onPreventBackgroundClick(e)}
        className={`${styles['modal-movie-image__unstyleButton']}`}
      >
        <img src={imgSrc} alt="poster" />
      </button>
    </div>
  );
};

ModalMovieImage.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  imgSrc: PropTypes.string
};

ModalMovieImage.defaultProps = {
  open: false,
  onClose: () => {},
  imgSrc: ''
};

export default ModalMovieImage;
