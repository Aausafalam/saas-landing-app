import boardingConstants from "@/app/(modules)/boarding/utils/constants";
import DynamicForm from "@/components/form";
import GlobalICONS from "@/lib/utils/icons";

const basicInfoForm = {
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
};

export default basicInfoForm;
