import { CheckCircle } from "lucide-react";
import styles from "./index.module.css";

export default function PaymentCompleted() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {/* Header Section */}
                <div className={styles.icon_wrapper}>
                    <CheckCircle className={styles.check_icon} />
                </div>
                <h2 className={styles.title}>Payment Already Completed</h2>
                <p className={styles.subtitle}>You have already subscribed to the Premium Institute Plan</p>

                {/* Current Plan Details */}
                <div className={styles.plan_details}>
                    <div className={styles.detail_row}>
                        <span className={styles.detail_label}>Current Plan</span>
                        <span className={styles.plan_name}>Premium Institute</span>
                    </div>
                    <div className={styles.detail_row}>
                        <span className={styles.detail_label}>Billing Period</span>
                        <span className={styles.detail_value}>Monthly</span>
                    </div>
                    <div className={styles.detail_row}>
                        <span className={styles.detail_label}>Amount</span>
                        <div className={styles.price_wrapper}>
                            <span className={styles.price}>$59.99</span>
                            <span className={styles.price_period}>/month</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
