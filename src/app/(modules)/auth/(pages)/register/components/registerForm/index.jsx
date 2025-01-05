import DynamicForm from "@/components/form";
import React, { useMemo, useState } from "react";
import styles from "./index.module.css";

const RegisterForm = () => {
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
                name: "username",
                label: "Username",
                type: "text",
                placeholder: "johndoe",
                grid: 1,
                validationRules: {
                    required: true,
                },
            },
            {
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "johndoe@example.com",
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
                name: "privacyAgree",
                type: "checkbox",
                label: (
                    <div className={styles.privacy_policy_container}>
                        <label htmlFor="remember">I agree to</label>
                        <a href="#" className={styles.privacy_policy}>
                            privacy policy & terms
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
            label: "Sign Up",
            type: "Submit",
            fullWidth: true,
            loading: isLoading,
        },
    ];

    return <DynamicForm formData={formData} formButtons={formButtons} onSubmit={handleSubmit} />;
};

export default RegisterForm;
