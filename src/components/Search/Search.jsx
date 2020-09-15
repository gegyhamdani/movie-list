import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Search = ({ placeholder, onChange, onEnter }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.searchbox}
        onChange={onChange}
        onKeyPress={onEnter}
      />
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onEnter: PropTypes.func
};

Search.defaultProps = {
  placeholder: '',
  onChange: '',
  onEnter: ''
};

export default Search;
