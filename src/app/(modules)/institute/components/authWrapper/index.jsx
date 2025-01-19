import React from "react";
import BrandLogo from "../BrandLogo";
import AuthICONS from "../../utils/icons";
import styles from "./index.module.css";

const AuthWrapper = ({ children }) => {
    return (
        <div className={styles.auth_container}>
            <div>
                <div class={styles.top_shape}>{AuthICONS.AUTH_TOP_SHAPE}</div>
                <div className={styles.form_side}>
                    <div className={styles.auth_form_container}>
                        <BrandLogo />
                        {children}
                    </div>
                </div>
                <div class={styles.bottom_shape}>{AuthICONS.AUTH_BOTTOM_SHAPE}</div>
            </div>
        </div>
    );
};

export default AuthWrapper;
