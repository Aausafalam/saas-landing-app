import React from "react";
import boardingConstants from "../../utils/constants";
import GlobalICONS from "@/lib/utils/icons";
import DynamicForm from "@/components/form";
import { useWizardStep } from "../../hooks/useWizardStep";
import styles from "./index.module.css";
import useBasicInfoForm from "../../hooks/useBasicInfoForm";
import useInstituteInfoForm from "../../hooks/useInstituteInfoForm";
import useThemeInfoForm from "../../hooks/useThemeForm";
import usePasswordForm from "../../hooks/usePasswordForm";
import { useInstitute } from "@/services/context/institute";
import Payment from "../payment";
import BoardingIcons from "../../utils/icons";

const WizardSteps = () => {
    const { onboardedUser } = useInstitute();
    const { currentStep, handleStepChange } = useWizardStep(boardingConstants.INITIAL_WIZARD_STEP);
    const { basicFormConfig, handleBasicSubmit, isBasicFormLoading, basicInfoFormErrors } = useBasicInfoForm(onboardedUser.data);
    const { instituteFormConfig, handleInstituteSubmit, isDetailsFormLoading, instituteFormErrors } = useInstituteInfoForm(onboardedUser.data);
    const { themeFormConfig, handleThemeSubmit, isThemeFormLoading, themeFormErrors } = useThemeInfoForm();
    const { passwordFormConfig, handlePasswordSubmit, isPasswordFormLoading, passwordFormErrors } = usePasswordForm();

    // Form buttons configuration
    const getFormButtons = (isFirst = false, isLast = false, isLoading = false) => {
        return [
            currentStep != 1 && {
                label: "Previous",
                onClick: () => handleStepChange(currentStep - 1),
                variant: "secondary",
                flat: true,
                outlined: true,
                icon: GlobalICONS.LEFT_ARROW,
                disabled: isFirst,
                buttonContainerClassName: styles.previous_button_container,
            },
            {
                label: isLast ? "Submit" : "Save & Next",
                type: "Submit",
                icon: !isLast ? GlobalICONS.NEXT_ARROW : undefined,
                iconPosition: "right",
                loading: isLoading,
            },
        ].filter(Boolean);
    };

    // Wizard steps configuration
    const wizardSteps = useMemo(
        () => [
            {
                heading: boardingConstants.WIZARD_STEPS.BASIC_INFO.heading,
                subHeading: boardingConstants.WIZARD_STEPS.BASIC_INFO.subHeading,
                icon: GlobalICONS.DOC,
                number: 1,
                form: (
                    <DynamicForm
                        key="basic-form"
                        formId="basic"
                        formData={basicFormConfig}
                        formButtons={getFormButtons(true, false, isBasicFormLoading)}
                        onSubmit={handleBasicSubmit}
                        responseErrors={basicInfoFormErrors}
                    />
                ),
            },
            {
                heading: boardingConstants.WIZARD_STEPS.PAYMENT.heading,
                subHeading: boardingConstants.WIZARD_STEPS.PAYMENT.subHeading,
                icon: BoardingIcons.PAYMENT,
                number: 2,
                form: <Payment key="payment-form" handleStepChange={handleStepChange} currentStep={currentStep} />,
            },
            {
                heading: boardingConstants.WIZARD_STEPS.INSTITUTE_INFO.heading,
                subHeading: boardingConstants.WIZARD_STEPS.INSTITUTE_INFO.subHeading,
                icon: BoardingIcons.INSTITUTE,
                number: 3,
                form: (
                    <DynamicForm
                        key="institute-form"
                        formId="institute"
                        formData={instituteFormConfig}
                        formButtons={getFormButtons(false, false, isDetailsFormLoading)}
                        onSubmit={handleInstituteSubmit}
                        responseErrors={instituteFormErrors}
                    />
                ),
            },
            {
                heading: boardingConstants.WIZARD_STEPS.THEME.heading,
                subHeading: boardingConstants.WIZARD_STEPS.THEME.subHeading,
                icon: BoardingIcons.THEME,
                number: 4,
                form: (
                    <DynamicForm
                        key="theme-form"
                        formId="theme"
                        formData={themeFormConfig}
                        formButtons={getFormButtons(false, false, isThemeFormLoading)}
                        onSubmit={handleThemeSubmit}
                        responseErrors={themeFormErrors}
                    />
                ),
            },
            {
                heading: boardingConstants.WIZARD_STEPS.PASSWORD.heading,
                subHeading: boardingConstants.WIZARD_STEPS.PASSWORD.subHeading,
                icon: BoardingIcons.CREDENTIALS,
                number: 5,
                lastWizardStep: true,
                form: (
                    <DynamicForm
                        key="password-form"
                        formId="password"
                        formData={passwordFormConfig}
                        formButtons={getFormButtons(false, true, isPasswordFormLoading)}
                        onSubmit={handlePasswordSubmit}
                        responseErrors={passwordFormErrors}
                    />
                ),
            },
        ],
        [onboardedUser, basicFormConfig, instituteFormConfig, themeFormConfig, passwordFormConfig, handleBasicSubmit, handleInstituteSubmit, handleThemeSubmit, handlePasswordSubmit, currentStep]
    );

    return <div>index</div>;
};

export default WizardSteps;
