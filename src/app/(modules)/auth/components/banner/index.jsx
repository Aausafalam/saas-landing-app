import React from "react";
import styles from "./index.module.css";
import defaultBannerMainImage from "../../assets/images/defaultBannerMain.png";
import defaultBannerFooterImage from "../../assets/images/defaultBannerFooter.png";
import logo from "../../assets/images/logo.svg";
import Image from "next/image";

const AuthBanner = ({ bannerMainImage, bannerFooterImage, className }) => {
    return (
        <div className={`${styles.illustrationSide} ${className}`}>
            <div className={styles.branding}>
                <Image src={logo} alt="Vuexy Logo" />
                <h2>Vuexy</h2>
            </div>
            <Image src={bannerMainImage || defaultBannerMainImage} alt="Login illustration" className={styles.illustration} />
            <Image src={bannerFooterImage || defaultBannerFooterImage} alt="Login mask" className={styles.illustrationMask} />
        </div>
    );
};

export default AuthBanner;
