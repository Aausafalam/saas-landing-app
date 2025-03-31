import BoardingIcons from "./icons";

const boardingConstants = {
    INSTITUTE_TYPES: {
        // Academic Institutions
        UNIVERSITY: "university",
        COLLEGE: "college",
        COACHING_CENTER: "coaching_center",
        K12_SCHOOL: "k12 school",
        HIGH_SCHOOL: "high school",
        PRIMARY_SCHOOL: "primary school",
        INTERNATIONAL_SCHOOL: "international school",
        COMMUNITY_COLLEGE: "community college",
        TECHNICAL_INSTITUTE: "technical institute",
        MEDICAL_SCHOOL: "medical school",
        LAW_SCHOOL: "law school",
        BUSINESS_SCHOOL: "business school",

        // Professional Training
        CORPORATE_TRAINING: "corporate training",
        VOCATIONAL_TRAINING: "vocational training",
        IT_TRAINING: "it training",
        LANGUAGE_SCHOOL: "language school",
        PROFESSIONAL_DEV: "professional development",
        CERTIFICATION_CENTER: "certification center",
        SKILLS_DEVELOPMENT: "skills development",

        // Specialized Education
        MUSIC_ACADEMY: "music academy",
        ART_SCHOOL: "art school",
        SPORTS_ACADEMY: "sports academy",
        DANCE_SCHOOL: "dance school",
        CULINARY_INSTITUTE: "culinary institute",
        DESIGN_SCHOOL: "design school",
        AVIATION_ACADEMY: "aviation academy",
        MARITIME_ACADEMY: "maritime academy",

        // Test Preparation
        EXAM_CENTER: "exam center",
        ENTRANCE_PREP: "entrance prep",
        CERTIFICATION_PREP: "certification prep",
        LANGUAGE_TEST_CENTER: "language test center",
    },
    GENDER_TYPE: {
        MALE: "male",
        FEMALE: "female",
        OTHERS: "others",
    },
    INITIAL_WIZARD_STEP: 1,
    WIZARD_STEPS: {
        BASIC_INFO: {
            heading: "Basic Info",
            subHeading: "Provide Your Basic Details",
        },
        PAYMENT: {
            heading: "Subscription Payment",
            subHeading: "Secure and Flexible Payments",
        },
        INSTITUTE_INFO: {
            heading: "Institute Info",
            subHeading: "Provide Information About Your Institute",
        },
        THEME: {
            heading: "Theme Customization",
            subHeading: "Customize Your Theme Settings",
        },
        PASSWORD: {
            heading: "Password Setup",
            subHeading: "Set a Strong Password for Security",
        },
    },
    TEMPLATE_OPTIONS: [
        {
            value: "7868225f-8b11-4a68-9e26-89ac72e5d5fb",
            label: "Vertical Layout",
            url: "https://c3ihub.org",
            thumbnail: "https://cdn.pixinvent.com/pi-assets/vuexy/landing-page/demo-vertical-layout.png",
        },
        {
            value: "359bee51-9380-449f-953f-e212d2e06d392",
            label: "Bordered Layout",
            url: "https://c3ihub.org",
            thumbnail: "https://cdn.pixinvent.com/pi-assets/vuexy/landing-page/demo-bordered-layout.png",
        },
        {
            value: "359bee51-9380-449f-953f-e212d2e06d393",
            label: "Semi Dark Layout",
            url: "https://c3ihub.org",
            thumbnail: "https://cdn.pixinvent.com/pi-assets/vuexy/landing-page/demo-semi-dark-layout.png",
        },
        {
            value: "359bee51-9380-449f-953f-e212d2e06d394",
            label: "Horizontal Layout",
            url: "https://c3ihub.org",
            thumbnail: "https://cdn.pixinvent.com/pi-assets/vuexy/landing-page/demo-horizontal-layout.png",
        },
    ],
    COLOR_OPTIONS: [
        { value: "rgb(115, 103, 240)", label: "" },
        { value: "rgb(13, 147, 148)", label: "" },
        { value: "rgb(255, 180, 0)", label: "" },
        { value: "rgb(255, 76, 81)", label: "" },
        { value: "rgb(22, 177, 255)", label: "" },
    ],
    THEME_OPTIONS: [
        { value: "light", label: "Light", icon: BoardingIcons.LIGHT_THEME },
        { value: "dark", label: "Dark", icon: BoardingIcons.DARK_THEME },
        { value: "system", label: "System", icon: BoardingIcons.SYSTEM_THEME },
    ],
    SKIN_OPTIONS: [
        { value: "DEFAULT", label: "Default", icon: BoardingIcons.DEFAULT_SKIN },
        { value: "BORDERED", label: "Bordered", icon: BoardingIcons.BORDERED_SKIN },
    ],
    WIZARD_STEP: {
        SIGNUP: 0,
        BASIC_DETAILS_SETUP: 1,
        SUBSCRIPTION_PAYMENT: 2,
        INSTITUTE_DETAIL_SETUP: 3,
        TEMPLATE_SELECTION_SETUP: 4,
        CREDENTIALS_SETUP: 5,
        FINISHED: 6,
    },
};

export default boardingConstants;
