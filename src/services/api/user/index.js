import apiConstants from "@/services/utils/constants";
import userApiClient from "./config";

const userAPiConstants = apiConstants.user;

export const getUserList = async (signal, params) => {
    const response = await userApiClient.get(userAPiConstants.USERS_LIST, { params, signal });
    return response.data;
};
