import React from "react";
import styles from "./index.module.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar/indes";

const LayoutWithSidebarNavbar = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <div className={styles.body}>
                <Navbar />
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
};

export default LayoutWithSidebarNavbar;
