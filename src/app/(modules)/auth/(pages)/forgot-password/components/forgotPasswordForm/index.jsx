import DynamicForm from "@/components/form";
import React, { useMemo, useState } from "react";
import styles from "./index.module.css";

const ForgotPasswordForm = () => {
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
        ],
        []
    );

    const formButtons = [
        {
            label: "Send Reset Link", // Update label
            type: "Submit",
            fullWidth: true,
            loading: isLoading,
        },
    ];

    return <DynamicForm formData={formData} formButtons={formButtons} onSubmit={handleSubmit} />;
};

export default ForgotPasswordForm;
