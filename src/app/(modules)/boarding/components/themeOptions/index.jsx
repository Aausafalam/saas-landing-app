import React from "react";
import styles from "./index.module.css";
const ThemeOptions = ({ themeIcon }) => {
    return (
        <div className={styles.theme_options}>
            <div>{themeIcon}</div>
        </div>
    );
};

export default ThemeOptions;
