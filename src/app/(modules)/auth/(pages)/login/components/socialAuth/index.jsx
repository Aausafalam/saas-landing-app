import React from "react";
import AuthICONS from "../../../../utils/icons";
import { motion } from "framer-motion";
import styles from "./index.module.css";

const SocialAuth = () => {
    const SOCIAL_PROVIDERS = [
        // {
        //     Icon: AuthICONS.FACEBOOK,
        //     color: "#497CE2",
        //     alt: "Facebook Login",
        // },
        // {
        //     Icon: AuthICONS.TWITTER,
        //     color: "#1DA1F2",
        //     alt: "Twitter Login",
        // },
        // {
        //     Icon: AuthICONS.GITHUB,
        //     color: "#333333",
        //     alt: "GitHub Login",
        // },
        {
            Icon: AuthICONS.GOOGLE,
            color: "#DD4B39",
            text: "Continue With Google",
        },
    ];
    return (
        <motion.div className={styles.socialLogin}>
            {SOCIAL_PROVIDERS.map(({ Icon, color, text }, index) => (
                <motion.button key={index} className={styles.socialButton} whileHover={{ scale: 1.01, boxShadow: "0 0 15px rgba(115, 103, 240, 0.1)" }} whileTap={{ scale: 0.95 }} aria-label={text}>
                    <span style={{ color }} className={styles.auth_icon}>
                        {Icon}
                    </span>
                    <span>{text}</span>
                </motion.button>
            ))}
        </motion.div>
    );
};

export default SocialAuth;
