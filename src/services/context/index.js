import { NotificationProvider } from "./notification";
import { InstituteProvider } from "./institute";
import { LoadingProvider } from "./loading";

const ContextProviders = ({ children }) => {
    return (
        <LoadingProvider>
            <NotificationProvider>
                <InstituteProvider>{children}</InstituteProvider>
            </NotificationProvider>
        </LoadingProvider>
    );
};
export default ContextProviders;
