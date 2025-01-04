/* eslint-disable @next/next/no-img-element */
// pages/login.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, EyeOffIcon, Facebook, Twitter, Github } from "lucide-react";
import styles from "./index.module.css";

// Social login providers
const SOCIAL_PROVIDERS = [
    {
        Icon: Facebook,
        color: "#497CE2",
        alt: "Facebook Login",
    },
    {
        Icon: Twitter,
        color: "#1DA1F2",
        alt: "Twitter Login",
    },
    {
        Icon: Github,
        color: "#333333",
        alt: "GitHub Login",
    },
    {
        Icon: () => (
            <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5c1.617 0 3.077.571 4.223 1.715l3.187-3.187A11.966 11.966 0 0 0 12 0C7.392 0 3.397 2.698 1.386 6.66l3.716 2.88C6.119 6.549 8.847 5 12 5z" />
                <path fill="#34A853" d="M23.896 12.262c0-.815-.073-1.6-.21-2.352H12v4.448h6.723a5.744 5.744 0 0 1-2.49 3.766l3.367 2.613c1.962-1.81 3.087-4.478 3.087-7.575z" />
                <path fill="#4285F4" d="M5.102 14.461C4.869 13.687 4.75 12.873 4.75 12c0-.873.119-1.687.352-2.461L1.386 6.66C.547 8.295 0 10.1 0 12c0 1.9.547 3.705 1.386 5.34l3.716-2.879z" />
                <path fill="#FBBC05" d="M12 19c3.153 0 5.881-1.549 7.078-4.219l-3.367-2.613c-.93.624-2.114.99-3.71.99-3.153 0-5.881-2.137-6.848-5.016L1.386 11.02C3.397 15.282 7.392 19 12 19z" />
            </svg>
        ),
        color: "#DD4B39",
        alt: "Google Login",
    },
];

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Simulating API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
        } catch (error) {
            console.error("Login failed", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.loginContainer}>
            {/* Left side - Image */}
            <div className={styles.illustrationSide}>
                <div className={styles.branding}>
                    <img src="/assets/images/logo.svg" alt="Vuexy Logo" />
                    <h2>Vuexy</h2>
                </div>
                <img src="/assets/images/auth-v2-login-illustration-light-C4sKfRS1.png" alt="Login illustration" className={styles.illustration} />
                <img src="/assets/images/misc-mask-light-7GUBPWb3.png" alt="Login mask" className={styles.illustrationMask} />
            </div>

            {/* Right side - Login Form */}
            <div className={styles.formSide}>
                <div className={styles.formContainer}>
                    {/* Welcome Text */}
                    <div className={styles.welcomeText}>
                        <h1>Welcome to Vuexy! 👋🏻 </h1>
                        <p>Please sign-in to your account and start the adventure</p>
                    </div>

                    {/* Login Form */}
                    <motion.form className={styles.loginForm} onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <div className={styles.formGroup}>
                            <label>Email or Username</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className={styles.formInput} />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Password</label>
                            <div className={styles.passwordWrapper}>
                                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className={styles.formInput} />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.passwordToggle}>
                                    {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        <div className={styles.formActions}>
                            <div className={styles.rememberMe}>
                                <input type="checkbox" id="remember" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className={styles.checkbox} />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <a href="#" className={styles.forgotPassword}>
                                Forgot Password?
                            </a>
                        </div>

                        <motion.button type="submit" className={styles.submitButton} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={isLoading}>
                            {isLoading ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            ) : (
                                "Sign in"
                            )}
                        </motion.button>
                    </motion.form>

                    <motion.div className={styles.signupPrompt} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                        <p>
                            New on our platform? <a href="#">Create an account</a>
                        </p>
                    </motion.div>

                    <div className={styles.divider}>
                        <div className={styles.dividerLine} />
                        <span>or</span>
                    </div>

                    {/* Social Login */}
                    <motion.div className={styles.socialLogin} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                        {SOCIAL_PROVIDERS.map(({ Icon, color, alt }, index) => (
                            <motion.button
                                key={index}
                                className={styles.socialButton}
                                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(115, 103, 240, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={alt}
                            >
                                <Icon className="h-6 w-6" style={{ color }} />
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
