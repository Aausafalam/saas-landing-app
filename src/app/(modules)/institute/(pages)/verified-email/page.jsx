"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import AuthHeader from "../../components/header";
import AuthWrapper from "../../components/authWrapper";
import AuthICONS from "../../utils/icons";
import { useInstitute } from "@/services/context/institute";

export default function EmailVerified() {
    const { onboardedUser } = useInstitute();
    const router = useRouter();
    const handleNavigation = (path) => {
        router.push(path);
    };

    useEffect(() => {
        onboardedUser.fetch({});
    }, []);

    useEffect(() => {
        if (onboardedUser.data?.currentOnboardingStep) {
            const timer = setTimeout(() => {
                handleNavigation(`boarding?wizardStep=${onboardedUser.data?.currentOnboardingStep}`);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [onboardedUser.data]);

    return (
        <AuthWrapper>
            <div className={styles.verified_icon}>{AuthICONS.VERIFIED}</div>
            <AuthHeader
                style={{ textAlign: "center" }}
                heading={"Email Verified Successfully!"}
                subHeading={
                    <>
                        Your email has been successfully verified. <br /> Redirecting to the details page<span className="loading_dot"></span>
                    </>
                }
            />
        </AuthWrapper>
    );
}
