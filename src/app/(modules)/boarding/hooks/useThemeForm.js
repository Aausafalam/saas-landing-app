import { useEffect, useMemo } from "react";
import boardingConstants from "../utils/constants";
import ColorOptions from "../components/colorOptions";
import ThemeOptions from "../components/themeOptions";
import { useInstitute } from "@/services/context/institute";
import { useWizardStep } from "./useWizardStep";
import LandingTemplateOption from "../components/landingTemplateOption";
import GlobalUtils from "@/lib/utils";
import { useTemplate } from "@/services/context/template";

const useThemeInfoForm = (data) => {
    const { instituteSetupTheme, onboardedUser } = useInstitute();
    const { templateList } = useTemplate();
    const { currentStep, handleStepChange } = useWizardStep();

    const themeFormConfig = useMemo(
        () => [
            {
                type: "customSelect",
                name: "templateId",
                label: "LMS Landing Template",
                grid: 1,
                options: boardingConstants.TEMPLATE_OPTIONS.map((option) => ({ ...option, icon: <LandingTemplateOption label={option.label} url={option.url} thumbnail={option.thumbnail} /> })),
                defaultValue: data?.templateId || "7868225f-8b11-4a68-9e26-89ac72e5d5fb",
                validationRules: {
                    required: true,
                },
            },
            ,
            {
                type: "customSelect",
                name: "primaryColor",
                label: "Primary Color",
                grid: 1,
                options: boardingConstants.COLOR_OPTIONS.map((option) => ({ ...option, icon: <ColorOptions color={option.value} /> })),
                defaultValue: data?.primaryColor || "rgb(115, 103, 240)",
                validationRules: {
                    required: true,
                },
            },
            {
                type: "customSelect",
                name: "theme",
                label: "Theme",
                grid: 1,
                options: boardingConstants.THEME_OPTIONS.map((option) => ({ ...option, icon: <ThemeOptions themeIcon={option.icon} /> })),
                defaultValue: data?.theme || "light",
                validationRules: {
                    required: true,
                },
            },
            {
                type: "customSelect",
                name: "skin",
                label: "Skin",
                grid: 1,
                options: boardingConstants.SKIN_OPTIONS,
                defaultValue: data?.skin || "DEFAULT",
                validationRules: {
                    required: true,
                },
            },
        ],
        [data]
    );

    const handleThemeSubmit = (formData) => {
        console.log("Theme Info Submit:", formData);
        const options = {
            targetKeys: ["templateId", "primaryColor", "theme", "skin"],
            trimStrings: true,
            precisionForNumbers: 2,
            ignoreEmptyValues: true,
        };
        console.log(formData, onboardedUser.data);
        if (GlobalUtils.hasFormChanges(formData, onboardedUser.data, options)) {
            instituteSetupTheme.execute({
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
    useEffect(() => {
        templateList.fetch({});
    }, []);
    return { themeFormConfig, handleThemeSubmit, isThemeFormLoading: instituteSetupTheme.isLoading, themeFormErrors: instituteSetupTheme.errorMessages };
};

export default useThemeInfoForm;
