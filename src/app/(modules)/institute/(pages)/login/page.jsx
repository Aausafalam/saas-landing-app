"use client";
import styles from "./index.module.css";
import LoginForm from "./components/loginForm";
import AuthHeader from "../../components/header";
import SocialAuth from "./components/socialAuth";
import Divider from "../../components/divider";
import AuthWrapper from "../../components/authWrapper";

export default function LoginPage() {
    return (
        <AuthWrapper>
            <AuthHeader heading={"Welcome to LMS"} subHeading={"Please Verify your email to proceed with your subscription and payment process."} />
            <LoginForm />
            <Divider />
            <SocialAuth />
        </AuthWrapper>
    );
}
