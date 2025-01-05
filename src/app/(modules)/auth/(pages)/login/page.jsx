"use client";
import styles from "./index.module.css";
import LoginForm from "./components/loginForm";
import AuthBanner from "../../components/banner";
import AuthHeader from "../../components/header";
import SocialAuth from "./components/socialAuth";
import Link from "next/link";
import Divider from "../../components/divider";

export default function LoginPage() {
    return (
        <div className="auth_container">
            <AuthBanner />
            <div className="form_side">
                <div className="auth_form_container">
                    <AuthHeader subHeading={"Please sign-in to your account and start the adventure"} />
                    <LoginForm />

                    <div className={styles.signupPrompt}>
                        <p>
                            New on our platform? <Link href="/auth/register">Create an account</Link>
                        </p>
                    </div>

                    <Divider />
                    <SocialAuth />
                </div>
            </div>
        </div>
    );
}
