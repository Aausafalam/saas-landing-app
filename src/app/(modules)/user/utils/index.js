import userConstants from "./constants";

class UserUtils {
    static getRoles = () => {
        return Object.entries(userConstants.ROLES || {}).map(([key, value]) => ({ label: key, value }));
    };
    static getPlans = () => {
        return Object.entries(userConstants.PLANS || {}).map(([key, value]) => ({ label: key, value }));
    };
    static getBillings = () => {
        return Object.entries(userConstants.BILLINGS || {}).map(([key, value]) => ({ label: value, value }));
    };
    static getUserStatus = () => {
        return Object.entries(userConstants.USER_STATUS || {}).map(([key, value]) => ({ label: key, value }));
    };
}
export default UserUtils;
