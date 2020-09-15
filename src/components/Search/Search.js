import React from "react";
import styles from "./index.module.css";

const Search = ({ handleInput, search }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search for a movie title..."
        className={styles.searchbox}
        onChange={handleInput}
        onKeyPress={search}
      />
    </div>
  );
};

export default Search;
