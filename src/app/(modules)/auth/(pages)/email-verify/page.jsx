"use client";
import styles from "./index.module.css";
import AuthHeader from "../../components/header";
import AuthWrapper from "../../components/authWrapper";
import EmailVerifyForm from "./components/emailVerifyForm";

export default function EmailVerify() {
    const email = localStorage.getItem("auth_email") || "hello@example.com";
    return (
        <AuthWrapper>
            <AuthHeader
                heading={"Verify your email ✉️"}
                subHeading={
                    <>
                        Account activation link sent to your email address: <span className="font-bold">{email}</span> email Please follow the link inside to continue.
                    </>
                }
            />
            <EmailVerifyForm />
        </AuthWrapper>
    );
}
