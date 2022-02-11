import React from 'react';
import ThemeChanger from "../theme-changer";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={`${styles.header} col-12`}>
      <div className={styles.header_inner}>
        <h5>Where in the world?</h5>
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Header;
