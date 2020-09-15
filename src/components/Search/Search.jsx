import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Search = ({ placeholder, onChange, onKeyPress }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.searchbox}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
};

Search.defaultProps = {
  placeholder: '',
  onChange: '',
  onKeyPress: ''
};

export default Search;
