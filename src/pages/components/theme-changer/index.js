import React, {useContext} from "react";
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import { ThemeContext } from "../../../themeProvider";

import styles from "./themeChanger.module.scss";

const ThemeChanger = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={styles.themeChanger} onClick={toggleTheme}>
      {theme === "light" ? (
        <>
          <BulbOutlined height="20px" width="20px" />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <BulbFilled height="20px" width="20px" />
          <span>Light Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeChanger;
