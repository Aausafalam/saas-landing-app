"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { useWizardStep } from "./hooks/useWizardStep";
import { useInstitute } from "@/services/context/institute";
import Wizard from "@/components/Wizard";
import styles from "./styles/index.module.css";
import wizardStepsData from "./utils/wizardStepsData";
import BoardingUtils from "./utils";
import useBasicInfoForm from "./hooks/useBasicInfoForm";
import useInstituteInfoForm from "./hooks/useInstituteInfoForm";
import useThemeInfoForm from "./hooks/useThemeForm";
import usePasswordForm from "./hooks/usePasswordForm";
import { useNavigation } from "@/app/components/navigation";

const Boarding = () => {
    const hasRedirected = useRef(false);
    const { navigate } = useNavigation();
    const { currentStep, handleStepChange } = useWizardStep();
    const { onboardedUser } = useInstitute();
    const { basicFormConfig, handleBasicSubmit, isBasicFormLoading, basicInfoFormErrors } = useBasicInfoForm(onboardedUser.data);
    const { instituteFormConfig, handleInstituteSubmit, isDetailsFormLoading, instituteFormErrors } = useInstituteInfoForm(onboardedUser.data);
    const { themeFormConfig, handleThemeSubmit, isThemeFormLoading, themeFormErrors } = useThemeInfoForm();
    const { passwordFormConfig, handlePasswordSubmit, isPasswordFormLoading, passwordFormErrors } = usePasswordForm();

    const wizardSteps = useMemo(
        () =>
            wizardStepsData({
                currentStep,
                handleStepChange,
                basicFormConfig,
                handleBasicSubmit,
                isBasicFormLoading,
                basicInfoFormErrors,
                instituteFormConfig,
                handleInstituteSubmit,
                isDetailsFormLoading,
                instituteFormErrors,
                themeFormConfig,
                handleThemeSubmit,
                isThemeFormLoading,
                themeFormErrors,
                passwordFormConfig,
                handlePasswordSubmit,
                isPasswordFormLoading,
                passwordFormErrors,
                getFormButtons: BoardingUtils.getFormButtons,
            }),
        [currentStep, onboardedUser]
    );

    useEffect(() => {
        onboardedUser.fetch({
            onError: () => navigate("/institute/login"),
        });
    }, []);

    useEffect(() => {
        if (!hasRedirected.current && onboardedUser.data) {
            const navigationResult = BoardingUtils.validateCurrentStep(onboardedUser);
            if (navigationResult?.isAllowed === false) {
                hasRedirected.current = true;
                navigate(navigationResult.redirectUrl);
            }
        }
    }, [onboardedUser.data]);

    return (
        <div className={styles.container}>
            <Wizard activeWizardStep={currentStep} handleWizardChange={handleStepChange} wizardData={wizardSteps} />
        </div>
    );
};

export default Boarding;
