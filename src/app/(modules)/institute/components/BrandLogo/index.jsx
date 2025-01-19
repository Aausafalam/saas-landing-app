import React from "react";
import styles from "./index.module.css";
import logo from "../../assets/images/logo.svg";
import Image from "next/image";

const BrandLogo = ({ name }) => {
    return (
        <div className={styles.container}>
            <Image src={logo} alt="LOGO" />
            <h2>{name || "Vuexy"}</h2>
        </div>
    );
};

export default BrandLogo;
