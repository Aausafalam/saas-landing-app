"use client";
import styles from "./index.module.css";
import RegisterForm from "./components/registerForm";
import AuthBanner from "../../components/banner";
import AuthHeader from "../../components/header";
import SocialAuth from "./components/socialAuth";
import bannerMainImage from "./assets/images/bannerMain.png";
import Link from "next/link";
import Divider from "../../components/divider";

export default function RegisterPage() {
    return (
        <div className="auth_container">
            <AuthBanner bannerMainImage={bannerMainImage} className={styles.banner_container} />
            <div className="form_side">
                <div className="auth_form_container">
                    <AuthHeader heading={"Adventure starts here 🚀"} subHeading={"Make your app management easy and fun!"} />
                    <RegisterForm />

                    <div className={styles.signupPrompt}>
                        <p>
                            Already have an account? <Link href="/auth/login">Sign in instead</Link>
                        </p>
                    </div>

                    <Divider />
                    <SocialAuth />
                </div>
            </div>
        </div>
    );
}
