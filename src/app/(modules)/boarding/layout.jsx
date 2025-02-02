import React from "react";
import styles from "./styles/index.module.css";
// import Navbar from "@/app/layouts/WithNavbarSidebar/components/Navbar2";

const BoardingLayout = ({ children }) => {
    return (
        <div className={styles.layout_container}>
            {/* <Navbar /> */}
            {children}
        </div>
    );
};

export default BoardingLayout;
