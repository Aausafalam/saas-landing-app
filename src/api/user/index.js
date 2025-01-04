import apiClient from "../config";

export const getUserList = async (signal, params) => {
    const response = await apiClient.get("/user-list", { params, signal });
    return response.data;
};
