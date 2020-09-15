import React from "react";
import styles from "./app.module.css";
import Search from "./components/Search";

const App = () => {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <h1>Movie Database</h1>
        <Search />
      </section>
    </div>
  );
};

export default App;
