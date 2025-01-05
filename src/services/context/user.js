"use client";

import { createContext, useContext } from "react";
import { useUserList } from "../hooks/user";

const UserContext = createContext(null); // Set a default value if required

export const UserProvider = ({ children, initialData = { userList: [] } }) => {
    const userListState = useUserList(initialData.userList);
    return <UserContext.Provider value={{ ...userListState }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === null) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
