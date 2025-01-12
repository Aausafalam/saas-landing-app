import DynamicForm from "@/components/form";
import React, { useMemo, useState } from "react";
import styles from "./index.module.css";
import Button from "@/components/form/components/FieldTemplates/ButtonField";
import Link from "next/link";

const EmailVerifyForm = () => {
    return (
        <div className={styles.container}>
            <Button fullWidth={true}>Skip for Now</Button>
            <div className={styles.resend_prompt}>
                <p>
                    Didn't get the mail? <Link href="/auth/register">Resend</Link>
                </p>
                <p className={styles.change_email}>
                    Did you enter the wrong email address? <Link href="/auth/login">Click here</Link> to change it
                </p>
            </div>
        </div>
    );
};

export default EmailVerifyForm;
