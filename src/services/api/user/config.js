import apiClient from "../config";

const userApiClient = apiClient.create({
    baseURL: `${apiClient.defaults.baseURL}/user`,
    headers: {
        ...apiClient.defaults.headers,
        "X-User-Specific-Header": "SomeValue",
    },
});

userApiClient.interceptors.request.use(
    (config) => {
        console.log("User module request:", config);
        return config;
    },
    (error) => Promise.reject(error)
);

userApiClient.interceptors.response.use(
    (response) => {
        console.log("User module response:", response);
        return response;
    },
    (error) => Promise.reject(error)
);

export default userApiClient;
