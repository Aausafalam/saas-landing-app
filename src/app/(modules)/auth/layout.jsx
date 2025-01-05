import React from "react";
import styles from "./styles/index.module.css";
import LayoutWithoutSidebarNavbar from "../../layouts/WithoutNavbarSidebar";
import "./styles/index.css";

const AuthLayout = ({ children }) => {
    return (
        <LayoutWithoutSidebarNavbar>
            <div id="auth_module">{children}</div>
        </LayoutWithoutSidebarNavbar>
    );
};

export default AuthLayout;
