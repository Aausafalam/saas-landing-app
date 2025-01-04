"use client";
import Table from "@/components/table";
import ICON from "@/components/table/utils/icon";
import UserAvatar from "@/components/UserAvatar";
import Utils from "@/utils";
import React, { useState } from "react";
import styles from "./index.module.css";
import TableUtils from "@/components/table/utils";

const UserTable = () => {
    const initializeTableData = {
        totalPages: 16,
        totalDocuments: 156,
        data: [
            {
                _id: "6486cae1284e1728606f902c",
                name: "Mridul Chamoli",
                email: "mridul@cse.iitk.ac.in",
                role: "Editor",
                plan: "Company",
                billing: "Manual-Case",
                status: "Active",
                image: "https://demos.pixinvent.com/vuexy-vuejs-laravel-admin-template/demo-1/build/assets/avatar-1-DMk2FF1-.png",
            },
            {
                _id: "6486cae1284e1728606f902c",
                name: "Paulie Durber",
                email: "pdurber1c@gov.uk",
                role: "Admin",
                plan: "Team",
                billing: "Manual-PayPal",
                status: "Inactive",
                image: "https://demos.pixinvent.com/vuexy-vuejs-laravel-admin-template/demo-1/build/assets/avatar-2-D5OQ4OGs.png",
            },
        ],
    };
    const externalFilters = {
        title: "Users Filters",
        // filterOnSubmit: true,
        filterFields: [
            {
                type: "select",
                name: "role",
                grid: 3,
                options: [
                    { label: "Admin", value: "admin" },
                    { label: "Author", value: "author" },
                    { label: "Editor", value: "editor" },
                    { label: "Maintainer", value: "Maintainer" },
                    { label: "Subscriber", value: "subscriber" },
                ],
                placeholder: "Select Role",
            },
            {
                type: "select",
                name: "plan",
                grid: 3,
                options: [
                    { label: "Basic", value: "basic" },
                    { label: "Company", value: "company" },
                    { label: "Enterprise", value: "enterprise" },
                    { label: "Maintainer", value: "Maintainer" },
                    { label: "Subscriber", value: "subscriber" },
                ],
                placeholder: "Select Plan",
            },
            {
                type: "select",
                name: "status",
                grid: 3,
                options: [
                    { label: "Pending", value: "pending" },
                    { label: "Inactive", value: "inactive" },
                    { label: "Active", value: "active" },
                ],
                placeholder: "Select Status",
            },
        ],
        parentPayloadKey: `[search][filters]`,
    };

    const tableHeader = {
        limit: {
            defaultValue: "20",
            limitStart: "10",
            limitEnd: "50",
            multipleOf: "10",
        },
        actionButtons: [
            {
                variant: "primary",
                icon: ICON.PLUS,
                label: "Add New User",
                onClick: () => console.log("user clicked add user button"),
            },
            {
                variant: "secondary",
                flat: true,
                className: styles.export,
                icon: ICON.EXPORT,
                label: "Export",
                onClick: () => console.log("user clicked export button"),
            },
        ],
        filters: [
            {
                type: "text",
                name: "searchText",
                grid: 2,
                placeholder: "Select User",
                autoSuggestion: {
                    initialData: TableUtils.formatDataForAutoSuggestion(initializeTableData.data, ["name", "email", "role"]),
                    autoSuggestionUrl: "/api/suggestions",
                    minChars: 1,
                    maxSuggestions: 5,
                },
            },
            // {
            //     type: "select",
            //     name: "role",
            //     grid: 2,
            //     options: [
            //         { label: "Admin", value: "admin" },
            //         { label: "Author", value: "author" },
            //         { label: "Editor", value: "editor" },
            //         { label: "Maintainer", value: "Maintainer" },
            //         { label: "Subscriber", value: "subscriber" },
            //     ],
            //     placeholder: "Select Role",
            // },
        ],
    };

    function getTableData(data) {
        return {
            title: "Active Employees List",
            rows: data?.data?.map((item) => {
                item.userDetails = {
                    name: item.name,
                    image: item.image,
                    email: item.email,
                    _id: item._id,
                };
                const roleICon = {
                    editor: ICON.EDIT,
                    admin: ICON.CRON,
                };
                const data = {
                    Id: { key: "_id", value: item._id, type: "hidden" },
                    User: {
                        key: "name",
                        value: <UserAvatar userDetails={item.userDetails} />,
                        originalValue: Utils.capitalizeEachWord(item.userDetails?.name) || "",
                        suggestionValue: Utils.capitalizeEachWord(item.userDetails?.name) || "",
                    },
                    Role: {
                        key: "role",
                        value: (
                            <p className={styles.editor}>
                                <span>{roleICon[item.role.toLowerCase()]}</span>
                                <span>{item.role}</span>
                            </p>
                        ),
                    },
                    Plan: { key: "plan", value: item.plan },
                    billing: { key: "billing", value: <span className={styles.billing}>{item.billing}</span> },
                    status: { key: "status", value: <span className={`${styles.status} ${styles[item.status]}`}>{item.status}</span> },
                };
                return data;
            }),
            actionData: [
                {
                    name: "Delete",
                    functions: (row) => {
                        console.log(row);
                    },
                    label: "Delete Employee",
                    Id: "Id",
                },
                {
                    name: "View",
                    functions: (row) => {
                        console.log("hg", row["Id"].value);
                    },
                    label: "View Employee Details",
                    Id: "Id",
                },
            ],
            url: `/getlistofuserdata`,
            pagination: {
                totalPage: data.totalPages || "0",
                totalItemCount: data.totalDocuments || "0",
            },
            sorting: {
                initialSort: "User",
                initialSortOrder: "asc",
            },
            getTableData: getTableData,
            rowClickHandler: (row) => {
                console.log(row);
            },
            externalFilters,
            tableHeader,
            checkbox: true,
        };
    }

    const tableData = React.useMemo(() => getTableData(initializeTableData), []);

    return <div>{<Table tableData={tableData} />}</div>;
};

export default UserTable;
