import React from "react";
import styles from "./index.module.css";

const LayoutWithoutSidebarNavbar = ({ children }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default LayoutWithoutSidebarNavbar;
