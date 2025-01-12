import React from "react";
import styles from "./index.module.css";

const Heading = ({ style, heading, subHeading }) => {
    return (
        <div style={style} className={styles.welcomeText}>
            <h1> {heading} </h1>
            {subHeading && <p>{subHeading}</p>}
        </div>
    );
};

export default Heading;
