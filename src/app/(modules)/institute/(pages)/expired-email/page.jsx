"use client";
import styles from "./index.module.css";
import AuthHeader from "../../components/header";
import AuthWrapper from "../../components/authWrapper";
import ExpiredEmailForm from "./components/expiredEmailForm";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ExpireEmail() {
    const [token, setToken] = useState("");
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const token = params.get("token");
            if (!token) {
                handleNavigation("/institute/login");
            }
            setToken(token);
        }
    }, []);

    return (
        <AuthWrapper>
            <AuthHeader heading={"Looks Like Your Link Expired! ✉️"} subHeading={<>The activation link we sent has expired. Click below to resend the link and verify your email.</>} />
            <ExpiredEmailForm token={token} />
        </AuthWrapper>
    );
}
