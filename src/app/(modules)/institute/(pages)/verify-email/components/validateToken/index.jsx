import React, { useEffect } from "react";
import styles from "./index.module.css";
import { useInstitute } from "@/services/context/institute";
import AuthHeader from "@/app/(modules)/institute/components/header";
import { useRouter } from "next/navigation";

const ValidateToken = ({ token }) => {
    const { instituteVerifyEmail } = useInstitute();

    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    const handleTokenVerification = (token) => {
        if (token) {
            instituteVerifyEmail.execute({
                payload: { token },
                onSuccess: () => handleNavigation("/institute/verified-email"),
                onError: () => handleNavigation(`/institute/expired-email?token=${token}`),
            });
        }
    };

    useEffect(() => {
        handleTokenVerification(token);
    }, [token]);

    return (
        <div className={styles.container}>
            <AuthHeader
                heading={
                    <>
                        Validating Your Request <span className="loading_dot"></span>
                    </>
                }
                subHeading={<>Hold on a moment while we verify your email. This won't take long!</>}
            />
        </div>
    );
};

export default ValidateToken;
