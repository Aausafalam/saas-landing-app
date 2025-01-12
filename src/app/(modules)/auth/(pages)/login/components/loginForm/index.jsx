import DynamicForm from "@/components/form";
import React, { useMemo, useState } from "react";
import styles from "./index.module.css";
import GlobalICONS from "@/lib/utils/icons";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };
    const handleSubmit = async (formData) => {
        console.log(formData);
        localStorage.setItem("auth_email", formData.email);
        setIsLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
        } catch (error) {
            console.error("Login failed", error);
        } finally {
            setIsLoading(false);
            handleNavigation("/auth/email-verify");
        }
    };

    const formData = useMemo(
        () => [
            {
                name: "email",
                label: "Email",
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
            label: "Continue With Email",
            type: "Submit",
            fullWidth: true,
            loading: isLoading,
            icon: GlobalICONS.NEXT_ARROW,
            iconPosition: "right",
        },
    ];

    return <DynamicForm formData={formData} formButtons={formButtons} onSubmit={handleSubmit} />;
};

export default LoginForm;
