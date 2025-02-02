import DynamicForm from "@/components/form";
import GlobalICONS from "@/lib/utils/icons";
import BoardingIcons from "./icons";
import boardingConstants from "./constants";
import Payment from "../components/payment";

const wizardStepsData = ({
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
    getFormButtons,
}) => [
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
                formButtons={getFormButtons(true, false, isBasicFormLoading, currentStep, handleStepChange)}
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
                formButtons={getFormButtons(false, false, isDetailsFormLoading, currentStep, handleStepChange)}
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
                formButtons={getFormButtons(false, false, isThemeFormLoading, currentStep, handleStepChange)}
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
                formButtons={getFormButtons(false, true, isPasswordFormLoading, currentStep, handleStepChange)}
                onSubmit={handlePasswordSubmit}
                responseErrors={passwordFormErrors}
            />
        ),
    },
];

export default wizardStepsData;
