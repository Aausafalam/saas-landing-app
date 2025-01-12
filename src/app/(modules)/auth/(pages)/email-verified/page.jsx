"use client";
import styles from "./index.module.css";
import AuthHeader from "../../components/header";
import AuthWrapper from "../../components/authWrapper";
import AuthICONS from "../../utils/icons";

export default function EmailVerified() {
    const email = localStorage.getItem("auth_email") || "hello@example.com";
    return (
        <AuthWrapper>
            <div className={styles.verified_icon}>{AuthICONS.VERIFIED}</div>
            <AuthHeader style={{ textAlign: "center" }} heading={"Email Verified Successfully!"} subHeading={<>Your email has been verified. Redirecting to details page...</>} />
        </AuthWrapper>
    );
}
