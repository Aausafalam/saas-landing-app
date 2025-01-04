import axios from "axios";

class Utils {
    static capitalizeEachWord = (name) => {
        if (name && typeof name === "string") {
            return name.replace(/\b\w/g, (match) => match.toUpperCase());
        } else {
            return "";
        }
    };

    static getCurrentMonthName() {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const currentDate = new Date();
        const currentMonthIndex = currentDate.getMonth();
        return monthNames[currentMonthIndex];
    }

    static GetTableData = () => {
        return {
            title: "",
            rows: "",
            action: true,
            actionData: [],
            searchBar: true,
            searchUrl: "",
            export: true,
            exportDataUrl: ``,
            print: true,
            printUrl: ``,
            reset: true,
            pagination: true,
            paginationUrl: ``,
            totalPage: 1,
            totalItemCount: 1,
            autoSuggestionUrl: "",
            sorting: true,
            initialSort: "name",
            initialSortOrder: "asc",
            getTableData: this.GetTableData,
            allAction: "",
        };
    };

    static getFormattedDate = (timestamp) => {
        const dateObj = new Date(timestamp * 1000);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let day = dateObj.getDate();
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();

        if (day < 10) {
            day = "0" + day;
        }

        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate; // Return in the format "DD-MMM-YYYY"
    };

    static getFormattedDateWithTime = (timestamp) => {
        const dateObj = new Date(timestamp * 1000);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let day = dateObj.getDate();
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();

        if (day < 10) {
            day = "0" + day;
        }

        let hours = dateObj.getHours();
        let minutes = dateObj.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        const formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;
        return formattedDate;
    };

    static handleViewFile = async (fileUrl) => {
        try {
            const response = await axios.get(fileUrl, {
                responseType: "blob",
            });

            const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers["content-type"] }));
            window.open(url);

            setTimeout(() => {
                window.URL.revokeObjectURL(url);
            }, 1000);
        } catch (error) {
            console.error("View failed:", error);
        }
    };

    static appendTokenToUrl = (url, token) => {
        if (!url) return null;
        const hasQueryParams = url.includes("?");
        return `${url}${hasQueryParams ? "&" : "?"}token=${token}`;
    };

    static getToken() {
        return process.env.REACT_APP_EXPORT_TOKEN;
    }

    static formatDateForDateInput = (dateString) => {
        if (!dateString) {
            return "";
        }

        const parts = dateString.split("-");
        return `${parts[2]}-${parts[0]}-${parts[1]}`;
    };

    static renderJson = (json, primaryColor, secondaryColor, fontWeight) => {
        const formatJson = (obj) => {
            const entries = Array.isArray(obj) ? obj.map((value, index) => [index, value]) : Object.entries(obj);

            return entries.map(([key, value]) => {
                const isObject = value && typeof value === "object";
                const isArray = Array.isArray(value);
                const displayValue = isArray ? value : JSON.stringify(value);

                return (
                    <div key={key} style={{ marginBottom: "10px" }}>
                        <span style={{ color: primaryColor || "#ff9800", fontWeight: fontWeight || "bold" }}>{key}: </span>
                        {isObject && !isArray ? (
                            <div style={{ paddingLeft: "20px" }}>{formatJson(value)}</div>
                        ) : (
                            <span style={{ color: secondaryColor || "#4caf50", wordBreak: "break-all" }}>{isArray ? displayValue : displayValue}</span>
                        )}
                    </div>
                );
            });
        };

        return formatJson(json);
    };

    static getTimeline = () => {
        const today = new Date();
        let startDate, endDate;

        if (today.getDate() >= 21) {
            startDate = new Date(today.getFullYear(), today.getMonth() - 1, 21);
            endDate = new Date(today.getFullYear(), today.getMonth(), 20);
        } else {
            startDate = new Date(today.getFullYear(), today.getMonth() - 2, 21);
            endDate = new Date(today.getFullYear(), today.getMonth() - 1, 20);
        }

        // Formatting dates to 'YYYY-MM-DD'
        const formatDate = (date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");
            return `${year}-${month}-${day}`;
        };

        return {
            startDate: formatDate(startDate),
            endDate: formatDate(endDate),
        };
    };

    static dateToUnixTimestamp(dateString) {
        const date = new Date(dateString);
        const unixTimestamp = Math.floor(date.getTime() / 1000);
        return unixTimestamp;
    }

    static unixTimestampToDate(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000);

        const options = {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour12: false,
        };

        const formattedDate = date.toLocaleString("en-GB", options);

        return formattedDate;
    }

    static unixTimestampToDateTime(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000);

        const options = {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        };

        const formattedDate = date.toLocaleString("en-GB", options);

        return formattedDate;
    }
    static getProgressNumber(progress) {
        const progressMap = {
            Todo: 0,
            "In-Progress": 50,
            "In-Review": 75,
            Completed: 100,
        };

        return progressMap[progress] || 0;
    }

    static formatUnixDateToInput = (unixTimestamp) => {
        if (!unixTimestamp) return "";
        const date = new Date(unixTimestamp * 1000);
        return date.toISOString().split("T")[0];
    };

    static formatUnixDateTimeToInput = (unixTimestamp) => {
        if (!unixTimestamp) return "";

        const date = new Date(unixTimestamp * 1000);
        const datePart = date.toISOString().split("T")[0];
        const timePart = date.toTimeString().slice(0, 5);
        return `${datePart}T${timePart}`;
    };

    static transformDataForRevisionCompare(inputData) {
        const result = [];

        for (const [key, value] of Object.entries(inputData)) {
            const row = {
                Key: this.capitalizeEachWord(key).replace(/_/g, " "),
                "Previous Value": typeof value.previousValue === "object" ? this.renderJson(value.previousValue || {}) : value.previousValue,
                "New Value": typeof value.newValue === "object" ? this.renderJson(value.newValue || {}) : value.newValue,
            };
            result.push(row);
        }

        return result;
    }

    static isDateExceeded(timestamp) {
        // Convert the timestamp to milliseconds and create a Date object
        const dueDate = new Date(timestamp * 1000);

        // Get the current date and set time to midnight (start of the day)
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Check if the due date is before today
        if (dueDate < today) {
            // Calculate the number of days overdue
            const diffTime = today - dueDate;
            const overdueDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // Convert milliseconds to days
            return { exceeded: true, overdueDays: overdueDays };
        }

        // If due date is today or in the future
        return { exceeded: false, overdueDays: 0 };
    }
}

export default Utils;
