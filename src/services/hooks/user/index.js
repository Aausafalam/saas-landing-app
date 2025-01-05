import { getUserList } from "@/services/api/user";
import { useState, useCallback } from "react";

export const useUserList = (initialData) => {
    const [userList, setUserList] = useState(initialData);

    const fetchUserList = useCallback(async (params) => {
        const controller = new AbortController();
        try {
            const list = await getUserList(controller.signal, params);
            setUserList(list.data);
        } catch (error) {
            setUserList([]);
            console.error("Error fetching User list:", error);
        } finally {
            controller.abort();
        }
    }, []);

    return { userList, fetchUserList };
};
