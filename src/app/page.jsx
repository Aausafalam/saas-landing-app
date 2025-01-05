"use client";

import DynamicForm from "@/components/form";
import { ICON } from "@/components/form/utils/icons";
import { useUser } from "@/services/context/user";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { fetchUserList, userList } = useUser();
    useEffect(() => {
        fetchUserList();
    }, []);
    console.log(userList);
    const formData = useMemo(
        () => [
            {
                type: "text",
                name: "name",
                label: "Name",
                grid: 2,
                defaultValue: "",
                placeholder: "Aausaf alam",
                validationRules: {
                    required: { message: "Please enter a name", value: true },
                    minLength: 10 || { message: `Please enter atlest 10 number`, value: 10 },
                    maxLength: 200 || { message: `Please enter atlest 200 number`, value: 200 },
                    // numeric: { message: "Please enter a number", value: true },
                    //pattern: { message: "Please enter a pattern", value: /^[a-zA-Z\s]*$/ },
                    //max: { message: "Please enter a number less than 20", value: 20 },
                    //min: { message: "Please enter a number greater than 10", value: 10 },
                },
                validateOnChange: true,
            },
            {
                type: "email",
                name: "email",
                label: "Email",
                grid: 2,
                defaultValue: "",
                placeholder: "aausaf@gmail.com",
                validateOnChange: true,
                validationRules: {
                    required: true,
                },
            },
            {
                type: "textarea",
                name: "remarks",
                label: "Remarks",
                grid: 2,
                defaultValue: "",
                placeholder: "Add any additional remarks or notes",
                style: { input: { minHeight: "5.65rem" } },
                validationRules: {
                    required: { message: "Please enter a name", value: true },
                    minLength: 10 || { message: `Please enter atlest 10 number`, value: 10 },
                    maxLength: 200 || { message: `Please enter atlest 200 number`, value: 200 },
                },
                validateOnChange: true,
            },
            {
                type: "textarea",
                name: "domains",
                label: "Domains",
                grid: 2,
                dependentField: "alertState",
                dependentValue: ["5", "6"],
                propertiesToBeModified: [{ key: "isHidden", modifiedValue: true, originalValue: false }],
                placeholder: "Enter domain names (comma-separated)",
                style: { input: { minHeight: "5.65rem" } },
            },
            {
                type: "select",
                name: "violation",
                label: "Violation(s)",
                grid: 2,
                multiple: true,
                options: [
                    { label: "Unauthorized Access", value: "unauthorized_access" },
                    { label: "Data Breach", value: "data_breach" },
                    { label: "Phishing Attack", value: "phishing_attack" },
                    { label: "Malware Infection", value: "malware_infection" },
                    { label: "Denial of Service (DoS)", value: "dos_attack" },
                    { label: "Insider Threat", value: "insider_threat" },
                    { label: "Privilege Abuse", value: "privilege_abuse" },
                    { label: "Network Intrusion", value: "network_intrusion" },
                    { label: "Compliance Violation", value: "compliance_violation" },
                    { label: "Weak Passwords", value: "weak_passwords" },
                    { label: "Ransomware Attack", value: "ransomware_attack" },
                ],
                placeholder: "Select violation types (multiple allowed)",
                validateOnChange: true,
                validationRules: {
                    required: { message: "Please enter a Select", value: true },
                },
            },
            {
                type: "select",
                name: "viol",
                label: "Example",
                grid: 2,
                multiple: false,
                options: [
                    { label: "Unauthorized Access", value: "unauthorized_access" },
                    { label: "Data Breach", value: "data_breach" },
                    { label: "Phishing Attack", value: "phishing_attack" },
                    { label: "Malware Infection", value: "malware_infection" },
                    { label: "Denial of Service (DoS)", value: "dos_attack" },
                    { label: "Insider Threat", value: "insider_threat" },
                    { label: "Privilege Abuse", value: "privilege_abuse" },
                    { label: "Network Intrusion", value: "network_intrusion" },
                    { label: "Compliance Violation", value: "compliance_violation" },
                    { label: "Weak Passwords", value: "weak_passwords" },
                    { label: "Ransomware Attack", value: "ransomware_attack" },
                ],
                placeholder: "Select violation types",
                validateOnChange: true,
                validationRules: {
                    required: { message: "Please enter a Select", value: true },
                },
            },
            {
                type: "file",
                name: "documents",
                label: "Documents",
                grid: 2,
                // accept: "image/*,.pdf,.doc,.docx",
                multiple: true,
            },
            {
                type: "checkbox",
                name: "remember",
                label: "Remember me",
                grid: 1,
            },
        ],
        []
    );

    const buttons = [
        {
            label: isSubmitting ? "Submitting..." : "Primary", // Update label
            type: "Submit",
            loading: loading,
            //icon: isSubmitting ? ICON.LOADING : ICON.CHECK_MARK, // Use a loader icon
            disabled: isSubmitting, // Disable
        },
        {
            label: "Secondary",
            onClick: () => {
                console.log("first");
            },
            variant: "secondary",
            //icon: ICON.CANCEL,
        },
        {
            label: "Success",
            onClick: () => {
                console.log("first");
            },
            variant: "success",
            //icon: ICON.CANCEL,
        },
        {
            label: "Information",
            onClick: () => {
                console.log("first");
            },
            variant: "info",
            //icon: ICON.CANCEL,
        },
        {
            label: "Warning",
            onClick: () => {
                console.log("first");
            },
            variant: "warning",
            //icon: ICON.CANCEL,
        },
        {
            label: "Cancel",
            onClick: () => {
                console.log("first");
            },
            variant: "danger",
            //icon: ICON.CANCEL,
        },

        {
            label: isSubmitting ? "Submitting..." : "Primary", // Update label
            type: "Submit",
            loading: loading,
            //icon: isSubmitting ? ICON.LOADING : ICON.CHECK_MARK, // Use a loader icon
            disabled: isSubmitting,
            variant: "primary",
            outlined: true, // Disable
        },

        {
            label: "Secondary",
            onClick: () => {
                console.log("first");
            },
            variant: "secondary",
            outlined: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Success",
            onClick: () => {
                console.log("first");
            },
            variant: "success",
            outlined: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Information",
            onClick: () => {
                console.log("first");
            },
            variant: "info",
            outlined: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Warning",
            onClick: () => {
                console.log("first");
            },
            variant: "warning",
            outlined: true,
            outlined: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Cancel",
            onClick: () => {
                console.log("first");
            },
            variant: "danger",
            outlined: true,
            //icon: ICON.CANCEL,
        },

        {
            label: isSubmitting ? "Submitting..." : "Primary", // Update label
            type: "Submit",
            loading: loading,
            //icon: isSubmitting ? ICON.LOADING : ICON.CHECK_MARK, // Use a loader icon
            disabled: isSubmitting,
            variant: "primary",
            flat: true, // Disable
        },

        {
            label: "Secondary",
            onClick: () => {
                console.log("first");
            },
            variant: "secondary",
            flat: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Success",
            onClick: () => {
                console.log("first");
            },
            variant: "success",
            flat: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Information",
            onClick: () => {
                console.log("first");
            },
            variant: "info",
            flat: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Warning",
            onClick: () => {
                console.log("first");
            },
            variant: "warning",
            flat: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Cancel",
            onClick: () => {
                console.log("first");
            },
            variant: "danger",

            flat: true,
            //icon: ICON.CANCEL,
        },

        {
            label: isSubmitting ? "Submitting..." : "Primary", // Update label
            type: "Submit",
            loading: loading,
            //icon: isSubmitting ? ICON.LOADING : ICON.CHECK_MARK, // Use a loader icon
            disabled: isSubmitting,
            rounded: true, // Disable
        },
        {
            label: "Secondary",
            onClick: () => {
                console.log("first");
            },
            variant: "secondary",
            rounded: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Success",
            onClick: () => {
                console.log("first");
            },
            variant: "success",
            rounded: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Information",
            onClick: () => {
                console.log("first");
            },
            variant: "info",
            rounded: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Warning",
            onClick: () => {
                console.log("first");
            },
            variant: "warning",
            rounded: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Cancel",
            onClick: () => {
                console.log("first");
            },
            variant: "danger",
            rounded: true,
            //icon: ICON.CANCEL,
        },

        {
            label: isSubmitting ? "Submitting..." : "Primary", // Update label
            type: "Submit",
            loading: loading,
            //icon: isSubmitting ? ICON.LOADING : ICON.CHECK_MARK, // Use a loader icon
            disabled: isSubmitting,
            text: true, // Disable
        },
        {
            label: "Secondary",
            onClick: () => {
                console.log("first");
            },
            variant: "secondary",
            text: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Success",
            onClick: () => {
                console.log("first");
            },
            variant: "success",
            text: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Information",
            onClick: () => {
                console.log("first");
            },
            variant: "info",
            text: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Warning",
            onClick: () => {
                console.log("first");
            },
            variant: "warning",
            text: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Cancel",
            onClick: () => {
                console.log("first");
            },
            variant: "danger",
            text: true,
            //icon: ICON.CANCEL,
        },

        {
            label: isSubmitting ? "Submitting..." : "Primary", // Update label
            type: "Submit",
            loading: loading,
            //icon: isSubmitting ? ICON.LOADING : ICON.CHECK_MARK, // Use a loader icon
            disabled: isSubmitting,
            plain: true, // Disable
        },
        {
            label: "Secondary",
            onClick: () => {
                console.log("first");
            },
            variant: "secondary",
            plain: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Success",
            onClick: () => {
                console.log("first");
            },
            variant: "success",
            plain: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Information",
            onClick: () => {
                console.log("first");
            },
            variant: "info",
            plain: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Warning",
            onClick: () => {
                console.log("first");
            },
            variant: "warning",
            plain: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Cancel",
            onClick: () => {
                console.log("first");
            },
            variant: "danger",
            plain: true,
            //icon: ICON.CANCEL,
        },

        {
            label: isSubmitting ? "Submitting..." : "Primary", // Update label
            type: "Submit",
            loading: loading,
            //icon: isSubmitting ? ICON.LOADING : ICON.CHECK_MARK, // Use a loader icon
            disabled: isSubmitting,
            tonal: true, // Disable
        },
        {
            label: "Secondary",
            onClick: () => {
                console.log("first");
            },
            variant: "secondary",
            tonal: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Success",
            onClick: () => {
                console.log("first");
            },
            variant: "success",
            tonal: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Information",
            onClick: () => {
                console.log("first");
            },
            variant: "info",
            tonal: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Warning",
            onClick: () => {
                console.log("first");
            },
            variant: "warning",
            tonal: true,
            //icon: ICON.CANCEL,
        },
        {
            label: "Cancel",
            onClick: () => {
                console.log("first");
            },
            variant: "danger",
            tonal: true,
            //icon: ICON.CANCEL,
        },

        {
            label: isSubmitting ? "Submitting..." : "Add New User", // Update label
            type: "Submit",
            loading: loading,
            icon: ICON.PLUS,
            disabled: isSubmitting,
        },
        {
            label: "Secondary",
            onClick: () => {
                console.log("first");
            },
            variant: "secondary",
            icon: ICON.CANCEL,
        },
        {
            label: "Success",
            onClick: () => {
                console.log("first");
            },
            variant: "success",
            icon: ICON.SUCCESS,
        },
        {
            label: "Upload",
            onClick: () => {
                console.log("first");
            },
            variant: "info",
            icon: ICON.UPLOAD,
        },
        {
            label: "Warning",
            onClick: () => {
                console.log("first");
            },
            variant: "warning",
            icon: ICON.WARNING,
        },
        {
            label: "Cancel",
            onClick: () => {
                console.log("first");
            },
            variant: "danger",
            icon: ICON.CANCEL,
        },

        {
            label: isSubmitting ? "Submitting..." : "Primary", // Update label
            type: "Submit",
            loading: loading,
            icon: ICON.BAG,
            iconOnly: true,
            disabled: isSubmitting,
        },
        {
            label: "Login", // Update label
            type: "Submit",
            loading: loading,
            fullWidth: true,
        },
    ];

    const formButtons = [
        {
            label: "Cancel",
            onClick: () => {
                console.log("first");
            },
            variant: "danger",
            outlined: true,
        },
        {
            label: isSubmitting ? "Submitting..." : "Save", // Update label
            type: "Submit",
            loading: loading,
            variant: "success",
            //icon: isSubmitting ? ICON.LOADING : ICON.CHECK_MARK, // Use a loader icon
            disabled: isSubmitting, // Disable
        },
    ];

    const handleSubmit = (formData) => {
        console.log(formData);
    };
    return (
        <div className="card">
            {" "}
            <DynamicForm formData={formData} formButtons={formButtons} onSubmit={handleSubmit} />
        </div>
    );
}
