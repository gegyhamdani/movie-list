import React from "react";
import styles from "./index.module.css";

const Search = ({ placeholder, onChange, search }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.searchbox}
        onChange={onChange}
        onKeyPress={search}
      />
    </div>
  );
};

export default Search;
