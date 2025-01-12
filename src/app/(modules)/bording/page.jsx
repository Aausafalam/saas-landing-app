"use client";
import React, { useMemo, useState } from "react";
import styles from "./styles/index.module.css";
import GlobalICONS from "@/lib/utils/icons";
import Wizard from "@/components/Wizard";
import DynamicForm from "@/components/form";
import BoardingUtils from "./utils";
import BoardingIcons from "./utils/icons";
import { Country, State, City } from "country-state-city";
import Payment from "./components/payment";

const Boarding = () => {
    const [activeWizardStep, setActiveWizardStep] = useState(1);
    const [address, setAddress] = useState({});
    const handleWizardChange = (step) => {
        setActiveWizardStep(step);
    };

    console.log(State.getStatesOfCountry("IN"));

    const formData = useMemo(
        () => [
            {
                type: "text",
                name: "ownerName",
                label: "Owner Name",
                grid: 2,
                defaultValue: "",
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
                defaultValue: "",
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
                defaultValue: "",
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
                defaultValue: "",
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
                defaultValue: "",
                placeholder: "abc",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },

            // {
            //     type: "select",
            //     name: "country",
            //     label: "Country",
            //     grid: 2,
            //     placeholder: "Select Country Name",
            //     options: [{ label: "India", value: "india" }],
            //     validationRules: {
            //         required: true,
            //     },
            //     validateOnChange: true,
            // },
            // {
            //     type: "select",
            //     name: "state",
            //     label: "State",
            //     grid: 2,
            //     placeholder: "Select State Name",
            //     validationRules: {
            //         required: true,
            //     },
            //     options: [{ label: "uttar pradesh", value: "uttar pradesh" }],
            //     validateOnChange: true,
            // },
            // {
            //     type: "select",
            //     name: "city",
            //     label: "City",
            //     grid: 2,
            //     placeholder: "Select City Name",
            //     validationRules: {
            //         required: true,
            //     },
            //     options: [{ label: "Ara", value: "Ara" }],
            //     validateOnChange: true,
            // },
            // {
            //     type: "number",
            //     name: "postalCode",
            //     label: "Postal Code",
            //     grid: 2,
            //     placeholder: "Postal Code",
            //     validationRules: {
            //         required: true,
            //     },
            //     options: [{ label: "", value: "" }],
            //     validateOnChange: true,
            // },
            // {
            //     type: "file",
            //     name: "brandLogo",
            //     label: "Brand Logo",
            //     grid: 2,
            //     accept: ["image/*", ".pdf", ".doc", ".docx"],
            //     multiple: false,
            // },
        ],
        []
    );

    const ownerFormData = useMemo(
        () => [
            {
                type: "text",
                name: "ownerName",
                label: "Owner Name",
                grid: 2,
                placeholder: "Enter Owner Name",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "email",
                name: "ownerEmail",
                label: "Owner Email",
                grid: 2,
                placeholder: "Enter Owner Email",
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
                placeholder: "Enter Owner Phone",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "tel",
                name: "ownerAltPhone",
                label: "Owner Alternate Phone",
                grid: 2,
                placeholder: "Enter Owner Alternate Phone",
                validationRules: {
                    required: false,
                },
                validateOnChange: true,
            },
            {
                type: "select",
                name: "ownerGender",
                label: "Owner Gender",
                grid: 2,
                placeholder: "Select Gender",
                validationRules: {
                    required: true,
                },
                options: BoardingUtils.getGenericOptions(),
                validateOnChange: true,
            },
            {
                type: "file",
                name: "verificationDoc",
                label: "Verification Doc",
                grid: 2,
                accept: ["image/*", ".pdf", ".doc", ".docx"],
                multiple: false,
            },
        ],
        []
    );

    const formButtons = [
        {
            label: "Previous",
            onClick: () => {
                console.log("first");
            },
            variant: "secondary",
            flat: true,
            icon: GlobalICONS.LEFT_ARROW,
            disabled: true,
            buttonContainerClassName: styles.previous_button_container,
        },
        {
            label: "Next",
            type: "Submit",
            // loading: loading,
            // disabled: isSubmitting,
            icon: GlobalICONS.NEXT_ARROW,
            iconPosition: "right",
        },
    ];

    const ownerFormButtons = [
        {
            label: "Previous",
            onClick: () => {
                console.log("first");
            },
            variant: "secondary",
            flat: true,
            icon: GlobalICONS.LEFT_ARROW,
            disabled: true,
            buttonContainerClassName: styles.previous_button_container,
        },
        {
            label: "Next",
            type: "Submit",
            icon: GlobalICONS.NEXT_ARROW,
            iconPosition: "right",
        },
    ];

    const handleSubmit = (formData) => {
        console.log(formData);
    };

    const handleOwnerSubmit = (formData) => {
        console.log(formData);
    };

    const handleInstituteInfoSubmit = (formData) => {
        console.log(formData);
    };

    const handlePasswordFormSubmit = (formData) => {
        console.log(formData);
    };

    const instituteFormData = useMemo(
        () => [
            {
                type: "text",
                name: "brandTagLine",
                label: "Brand Tag Line",
                grid: 2,
                defaultValue: "",
                placeholder: "abc",
            },
            {
                type: "tel",
                name: "alternativePhone",
                label: "Alternate Phone Number",
                grid: 2,
                defaultValue: "",
                placeholder: "abc",
            },
            {
                type: "textarea",
                name: "address",
                label: "Address",
                grid: 1,
                placeholder: "write address here...",
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
                customOnChange: (event) => {
                    setAddress((pre) => ({ ...pre, [event.target.name]: event.target.value }));
                },
                validateOnChange: true,
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
            },
            {
                type: "file",
                name: "brandLogo",
                label: "Brand Logo",
                grid: 2,
                // accept: ["image/*", ".pdf", ".doc", ".docx"],
                multiple: false,
            },
            {
                type: "file",
                name: "identityProof",
                label: "Identity Proof",
                grid: 2,
                // accept: ["image/*", ".pdf", ".doc", ".docx"],
                multiple: false,
            },
        ],
        []
    );

    const instituteFormButtons = useMemo(
        () => [
            {
                label: "Previous",
                onClick: () => {
                    console.log("first");
                },
                variant: "secondary",
                flat: true,
                icon: GlobalICONS.LEFT_ARROW,
                disabled: true,
                buttonContainerClassName: styles.previous_button_container,
            },
            {
                label: "Next",
                type: "Submit",
                icon: GlobalICONS.NEXT_ARROW,
                iconPosition: "right",
            },
        ],
        []
    );

    const passwordSetUpForm = useMemo(() => [
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
        },
    ]);

    const passwordSetUpFormButtons = useMemo(
        () => [
            {
                label: "Previous",
                onClick: () => {
                    console.log("first");
                },
                variant: "secondary",
                flat: true,
                icon: GlobalICONS.LEFT_ARROW,
                disabled: true,
                buttonContainerClassName: styles.previous_button_container,
            },
            {
                label: "Submit",
                type: "Submit",
                iconPosition: "right",
            },
        ],
        []
    );

    const wizardData = [
        {
            heading: "Basic Info",
            subHeading: "Provide Your Basic Details",
            icon: GlobalICONS.DOC,
            number: 1,
            form: <DynamicForm formData={formData} formButtons={formButtons} onSubmit={handleSubmit} />,
        },
        {
            heading: "Subscription Payment",
            subHeading: "Secure and Flexible Payments",
            icon: BoardingIcons.PAYMENT,
            number: 2,
            form: <Payment />,
        },
        {
            heading: "Institute Info",
            subHeading: "Provide Information About Your Institute",
            icon: BoardingIcons.INSTITUTE,
            number: 3,
            form: <DynamicForm formData={instituteFormData} formButtons={instituteFormButtons} onSubmit={handleInstituteInfoSubmit} />,
        },
        {
            heading: "Theme Customization",
            subHeading: "Customize Your Theme Settings",
            icon: BoardingIcons.THEME,
            number: 4,
            form: <div>FORM4</div>,
        },
        {
            heading: "Password Setup",
            subHeading: "Set a Strong Password for Security",
            icon: BoardingIcons.CREDENTIALS,
            number: 5,
            lastWizardStep: true,
            form: <DynamicForm formData={passwordSetUpForm} formButtons={passwordSetUpFormButtons} onSubmit={handlePasswordFormSubmit} />,
        },
    ];

    return (
        <div className={styles.container}>
            <div>
                <Wizard activeWizardStep={activeWizardStep} handleWizardChange={handleWizardChange} wizardData={wizardData} />
            </div>
        </div>
    );
};

export default Boarding;
