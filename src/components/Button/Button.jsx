import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const Button = ({ children, onClick, className, label }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${className}`}
      aria-label={label}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string
};

Button.defaultProps = {
  children: null,
  className: '',
  onClick: () => {},
  label: 'Base'
};

export default Button;
