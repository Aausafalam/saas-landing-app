const { UserProvider } = require("./user");

const ContextProviders = ({ children }) => {
    return <UserProvider>{children}</UserProvider>;
};
export default ContextProviders;
