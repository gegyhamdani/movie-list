import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const ModalMovieDetail = ({ open, onClose }) => {
  return (
    <div
      className={`${styles['modal-movie-detail']}`}
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'initial' : 'none',
        zIndex: open ? 13 : -1
      }}
      onClick={onClose}
      role="button"
      aria-hidden="true"
    >
      <div />
    </div>
  );
};

ModalMovieDetail.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
};

ModalMovieDetail.defaultProps = {
  open: false,
  onClose: () => {}
};

export default ModalMovieDetail;
