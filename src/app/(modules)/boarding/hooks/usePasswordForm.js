import { useMemo } from "react";
import { useInstitute } from "@/services/context/institute";
import { useWizardStep } from "./useWizardStep";
import GlobalUtils from "@/lib/utils";

const usePasswordForm = (data) => {
    const { instituteSetupPassword, onboardedUser } = useInstitute();
    const { currentStep, handleStepChange } = useWizardStep();

    const passwordFormConfig = useMemo(
        () => [
            {
                type: "password",
                name: "password",
                label: "Password",
                grid: 2,
                defaultValue: "",
                placeholder: "**********",
                validationRules: {
                    required: true,
                },
                defaultValue: data?.password,
            },
            {
                type: "password",
                name: "confirmPassword",
                label: "Confirm Password",
                grid: 2,
                defaultValue: "",
                placeholder: "**********",
                validationRules: {
                    required: true,
                },
                defaultValue: data?.confirmPassword,
            },
        ],
        [data]
    );

    const handlePasswordSubmit = (formData) => {
        console.log("Password  Submit:", formData);
        const options = {
            targetKeys: ["password", "confirmPassword"],
            trimStrings: true,
            precisionForNumbers: 2,
            ignoreEmptyValues: true,
        };
        if (GlobalUtils.hasFormChanges(formData, onboardedUser.data, options)) {
            instituteSetupPassword.execute({
                payload: formData,
                onSuccess: () => {
                    onboardedUser.fetch({});
                    handleStepChange(currentStep + 1);
                },
            });
        } else {
            handleStepChange(currentStep + 1);
        }
    };

    return { passwordFormConfig, handlePasswordSubmit, isPasswordFormLoading: instituteSetupPassword.isLoading, passwordFormErrors: instituteSetupPassword.errorMessages };
};

export default usePasswordForm;
