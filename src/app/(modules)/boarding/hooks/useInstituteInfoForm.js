import { useMemo } from "react";
import { Country } from "country-state-city";
import { useInstitute } from "@/services/context/institute";
import { useWizardStep } from "./useWizardStep";
import GlobalUtils from "@/lib/utils";

const useInstituteInfoForm = (data) => {
    const { instituteSetupDetails, onboardedUser } = useInstitute();
    const { currentStep, handleStepChange } = useWizardStep();

    const instituteFormConfig = useMemo(
        () => [
            {
                type: "text",
                name: "brandTagLine",
                label: "Brand Tag Line",
                grid: 2,
                defaultValue: data?.brandTagLine,
                placeholder: "brand tag line",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "tel",
                name: "alternatePhone",
                label: "Alternate Phone Number",
                grid: 2,
                defaultValue: data?.alternatePhone,
                placeholder: "7033432213",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "textarea",
                name: "address",
                label: "Address",
                grid: 1,
                placeholder: "write address here...",
                defaultValue: data?.address,
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "select",
                name: "country",
                label: "Country",
                grid: 4,
                placeholder: "Select Country Name",
                options: Country.getAllCountries().map((country) => ({ label: country.name, value: `${country.name}_${country.isoCode}` })),
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
                defaultValue: data?.country,
            },
            {
                type: "select",
                name: "state",
                label: "State",
                grid: 4,
                placeholder: "Select State Name",
                validationRules: {
                    required: true,
                },
                options: [],
                dynamicOptions: true,
                validateOnChange: true,
                defaultValue: data?.state,
            },
            {
                type: "select",
                name: "city",
                label: "City",
                grid: 4,
                placeholder: "Select City Name",
                validationRules: {
                    required: true,
                },
                options: [],
                dynamicOptions: true,
                validateOnChange: true,
                defaultValue: data?.city,
            },
            {
                type: "number",
                name: "postalCode",
                label: "Postal Code",
                grid: 4,
                placeholder: "Postal Code",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
                defaultValue: data?.postalCode,
            },
            {
                type: "file",
                name: "brandLogo",
                label: "Brand Logo",
                grid: 2,
                accept: ["image"],
                multiple: false,
                defaultValue: data?.brandLogo,
                url: "/brand/logo/upload",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "file",
                name: "identityProof",
                label: "Identity Proof",
                grid: 2,
                accept: ["image", "pdf"],
                multiple: false,
                defaultValue: data?.identityProof,
                url: "/owners/documents/identity-proof/upload",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
        ],
        [data]
    );

    const handleInstituteSubmit = (formData) => {
        console.log("Institute Info Submit:", formData);
        const options = {
            targetKeys: ["brandTagLine", "alternatePhone", "address", "country", "state", "city", "postalCode", "brandLogo", "identityProof"],
            trimStrings: true,
            precisionForNumbers: 2,
            ignoreEmptyValues: true,
        };
        if (GlobalUtils.hasFormChanges(formData, onboardedUser.data, options)) {
            instituteSetupDetails.execute({
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

    return { instituteFormConfig, handleInstituteSubmit, instituteFormErrors: instituteSetupDetails.errorMessages, isDetailsFormLoading: instituteSetupDetails.isLoading };
};

export default useInstituteInfoForm;
