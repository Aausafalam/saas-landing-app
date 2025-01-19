import React from "react";
import styles from "./index.module.css";

const ColorOptions = ({ color }) => {
    return (
        <div className={styles.color_options}>
            <div style={{ background: color }}></div>
        </div>
    );
};

export default ColorOptions;
