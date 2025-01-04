import styles from "../../../styles/DynamicForm.module.css";

const RowHeaderField = (label) => {
    return (
        <>
            <p className={styles.rowHeader} style={{ fontSize: "17px" }}>
                {label}
            </p>
            <hr className={styles.divider} />
        </>
    );
};

export default RowHeaderField;
