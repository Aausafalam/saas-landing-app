import { useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";
import boardingConstants from "../utils/constants";

export const useWizardStep = (initialStep = 1) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentStep = boardingConstants.WIZARD_STEP[searchParams.get("wizardStep") || initialStep];
    console.log(currentStep);
    const stepNames = Object.fromEntries(Object.entries(boardingConstants.WIZARD_STEP).map(([key, value]) => [value, key]));

    const handleStepChange = useCallback(
        (step) => {
            const params = new URLSearchParams(searchParams);
            params.set("wizardStep", stepNames[step]);
            router.push(`?${params.toString()}`);
        },
        [searchParams, stepNames, router]
    );

    return {
        currentStep,
        handleStepChange,
    };
};
