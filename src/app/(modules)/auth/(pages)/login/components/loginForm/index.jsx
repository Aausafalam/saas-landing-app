import DynamicForm from "@/components/form";
import React, { useMemo, useState } from "react";
import styles from "./index.module.css";

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (formData) => {
        console.log(formData);
        setIsLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
        } catch (error) {
            console.error("Login failed", error);
        } finally {
            setIsLoading(false);
        }
    };

    const formData = useMemo(
        () => [
            {
                name: "emailOrUsername",
                label: "Email or Username",
                type: "email",
                placeholder: "john@example.com",
                grid: 1,
                validationRules: {
                    required: true,
                },
            },
            {
                name: "password",
                label: "Password",
                grid: 1,
                validationRules: {
                    required: true,
                },
            },
            {
                name: "rememberMe",
                type: "checkbox",
                label: (
                    <div className={styles.remember_me_container}>
                        <label htmlFor="remember">Remember me</label>
                        <a href="/auth/forgot-password" className={styles.forgotPassword}>
                            Forgot Password?
                        </a>
                    </div>
                ),
                className: styles.checkbox_container,
                grid: 1,
            },
        ],
        []
    );

    const formButtons = [
        {
            label: "Login", // Update label
            type: "Submit",
            fullWidth: true,
            loading: isLoading,
        },
    ];

    return <DynamicForm formData={formData} formButtons={formButtons} onSubmit={handleSubmit} />;
};

export default LoginForm;
