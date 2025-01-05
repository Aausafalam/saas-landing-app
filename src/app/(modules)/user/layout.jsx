import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import LayoutWithSidebarNavbar from "@/app/layouts/WithNavbarSidebar";

const AuthLayout = ({ children }) => {
    return (
        <LayoutWithSidebarNavbar>
            <div id="user_module">{children}</div>
        </LayoutWithSidebarNavbar>
    );
};

export default AuthLayout;
