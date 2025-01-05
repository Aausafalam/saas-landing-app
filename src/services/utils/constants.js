const apiConstants = {
    BACKEND_API_BASE_URL: "https://api-lms.c3ihub.org",
    user: {
        BASE_Route: "/user",
        USERS_LIST: `/user-list`,
        ADD_USER: `/add-user`,
        UPDATE_USER: `/update-user`,
        DELETE_USER: `/delete-user`,
    },
    course: {
        BASE_Route: "/course",
        USERS_LIST: `/get-courses-list`,
        ADD_USER: `/add-courses`,
        UPDATE_USER: `/update-courses`,
        DELETE_USER: `/delete-courses`,
    },
};
export default apiConstants;
