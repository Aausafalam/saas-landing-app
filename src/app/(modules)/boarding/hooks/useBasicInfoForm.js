import { useInstitute } from "@/services/context/institute";
import { useWizardStep } from "./useWizardStep";
import { useMemo } from "react";
import BoardingUtils from "../utils";
import GlobalUtils from "@/lib/utils";

const useBasicInfoForm = (data) => {
    const { instituteSetupBasicInfo, onboardedUser } = useInstitute();
    const { currentStep, handleStepChange } = useWizardStep();

    const basicFormConfig = useMemo(
        () => [
            {
                type: "text",
                name: "ownerName",
                label: "Owner Name",
                grid: 2,
                defaultValue: data?.ownerName,
                placeholder: "Jon Doe",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "tel",
                name: "ownerPhone",
                label: "Owner Phone",
                grid: 2,
                defaultValue: data?.ownerPhone,
                placeholder: "7033432213",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "instituteName",
                label: "Institute Name",
                grid: 2,
                defaultValue: data?.instituteName,
                placeholder: "Harvard  Institute",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "select",
                name: "instituteType",
                label: "Institute Type",
                grid: 2,
                defaultValue: data?.instituteType,
                placeholder: "Select Institute Type",
                options: BoardingUtils.getInstituteOptions(),
                validateOnChange: true,
                validationRules: {
                    required: true,
                },
            },
            {
                type: "text",
                name: "brandName",
                label: "Brand Name",
                grid: 2,
                defaultValue: data?.brandName,
                placeholder: "abc",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
        ],
        [data]
    );

    const handleBasicSubmit = (formData) => {
        console.log("Basic Info Submit:", formData);
        const options = {
            targetKeys: ["ownerName", "ownerPhone", "instituteName", "instituteType", "brandName"],
            trimStrings: true,
            precisionForNumbers: 2,
            ignoreEmptyValues: true,
        };
        if (GlobalUtils.hasFormChanges(formData, onboardedUser.data, options)) {
            instituteSetupBasicInfo.execute({
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

    return { basicFormConfig, handleBasicSubmit, isBasicFormLoading: instituteSetupBasicInfo.isLoading, basicInfoFormErrors: instituteSetupBasicInfo.errorMessages };
};

export default useBasicInfoForm;
