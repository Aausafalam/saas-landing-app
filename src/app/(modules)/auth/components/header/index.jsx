import React from "react";
import styles from "./index.module.css";

const AuthHeader = ({ heading, subHeading }) => {
    return (
        <div className={styles.welcomeText}>
            <h1> {heading || " Welcome to Vuexy! 👋🏻"} </h1>
            {subHeading && <p>{subHeading}</p>}
        </div>
    );
};

export default AuthHeader;
