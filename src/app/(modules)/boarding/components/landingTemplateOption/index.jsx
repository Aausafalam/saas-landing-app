import React from "react";
import styles from "./index.module.css";
import Button from "@/components/form/components/FieldTemplates/ButtonField";

const LandingTemplateOption = ({ label, thumbnail, url }) => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h2>{label}</h2>
                <Button href={url} tonal={true}>
                    Live Demo
                </Button>
            </div>
            <div className={styles.thumbnail}>
                <div class="elementor-widget-container">
                    <img src={thumbnail} title="" alt="vuexy-vertical-layout-demo" loading="lazy" />{" "}
                </div>
            </div>
        </div>
    );
};

export default LandingTemplateOption;
