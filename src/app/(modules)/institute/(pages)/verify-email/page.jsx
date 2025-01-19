"use client";
import styles from "./index.module.css";
import AuthHeader from "../../components/header";
import AuthWrapper from "../../components/authWrapper";
import EmailVerifyForm from "./components/emailVerifyForm";
import { useEffect, useState } from "react";
import ValidateToken from "./components/validateToken";

export default function EmailVerify() {
    const email = localStorage.getItem("institute_email");
    const [token, setToken] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const token = params.get("token");
            setToken(token);
        }
    }, []);

    return (
        <AuthWrapper>
            {token ? (
                <ValidateToken token={token} />
            ) : (
                <>
                    <AuthHeader
                        heading={"Verify your email ✉️"}
                        subHeading={
                            <>
                                Account activation link sent to your email address: <span className="font-bold">{email}</span> email Please follow the link inside to continue.
                            </>
                        }
                    />
                    <EmailVerifyForm email={email} />
                </>
            )}
        </AuthWrapper>
    );
}
