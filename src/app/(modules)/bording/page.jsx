"use client";
import React, { useMemo, useState } from "react";
import styles from "./styles/index.module.css";
import GlobalICONS from "@/lib/utils/icons";
import Wizard from "@/components/Wizard";
import DynamicForm from "@/components/form";
import BoardingUtils from "./utils";

const Boarding = () => {
    const [activeWizardStep, setActiveWizardStep] = useState(1);

    const handleWizardChange = (step) => {
        setActiveWizardStep(step);
    };

    //     //Institute
    // model Institutes {
    //     id                   String @id @default(uuid())
    //     legalNameOfInstitute String @unique @db.VarChar(255)
    //     type                 String @unique @db.VarChar(255)

    //     // Branding details
    //     brandName    String  @unique @db.VarChar(255)
    //     brandLogo    String  @unique @db.VarChar(255)
    //     brandTagLine String? @unique @db.VarChar(255)

    //     // Address details
    //     address    String @db.Text
    //     city       String @db.VarChar(255)
    //     state      String @db.VarChar(255)
    //     country    String @db.VarChar(255)
    //     postalCode Int

    //     // Owner details
    //     ownerName       String          @db.VarChar(255)
    //     ownerEmail      String          @unique
    //     ownerPhone      String          @unique
    //     ownerAltPhone   String?
    //     ownerGender     Gender          @default(PREFER_NOT_TO_SAY)
    //     // Status and metadata
    //     status          InstituteStatus @default(ACTIVE)
    //     verificationDoc String?

    const formData = useMemo(
        () => [
            {
                type: "text",
                name: "legalNameOfInstitute",
                label: "Legal Name Of Institute",
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
                name: "type",
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
            {
                type: "text",
                name: "brandTagLine",
                label: "Brand Tag Line",
                grid: 2,
                defaultValue: "",
                placeholder: "abc",
            },
            {
                type: "select",
                name: "country",
                label: "Country",
                grid: 2,
                placeholder: "Select Country Name",
                options: [{ label: "India", value: "india" }],
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "select",
                name: "state",
                label: "State",
                grid: 2,
                placeholder: "Select State Name",
                validationRules: {
                    required: true,
                },
                options: [{ label: "uttar pradesh", value: "uttar pradesh" }],
                validateOnChange: true,
            },
            {
                type: "select",
                name: "city",
                label: "City",
                grid: 2,
                placeholder: "Select City Name",
                validationRules: {
                    required: true,
                },
                options: [{ label: "Ara", value: "Ara" }],
                validateOnChange: true,
            },
            {
                type: "number",
                name: "postalCode",
                label: "Postal Code",
                grid: 2,
                placeholder: "Postal Code",
                validationRules: {
                    required: true,
                },
                options: [{ label: "", value: "" }],
                validateOnChange: true,
            },
            {
                type: "file",
                name: "brandLogo",
                label: "Brand Logo",
                grid: 2,
                accept: ["image/*", ".pdf", ".doc", ".docx"],
                multiple: false,
            },
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

    const wizardData = [
        {
            heading: "Institute Info",
            subHeading: "Setup Institute Details",
            icon: GlobalICONS.DOC,
            number: 1,
            form: <DynamicForm formData={formData} formButtons={formButtons} onSubmit={handleSubmit} />,
        },
        {
            heading: "Owner Info",
            subHeading: "Add Owner Info",
            icon: GlobalICONS.USER,
            number: 2,
            form: <DynamicForm formData={ownerFormData} formButtons={ownerFormButtons} onSubmit={handleOwnerSubmit} />,
        },
        {
            heading: "Social Links",
            subHeading: "Add social links",
            icon: GlobalICONS.LINK,
            number: 3,
            lastWizardStep: true,
            form: <div>FORM3</div>,
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
