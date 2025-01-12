import React from "react";
import styles from "./index.module.css";
import Heading from "../header";
import Button from "@/components/form/components/FieldTemplates/ButtonField";
import Divider from "../divider";
import GlobalICONS from "@/lib/utils/icons";

const Payment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.payment_summary}>
                <Heading heading={"Order Summary"} subHeading={"It can help you manage and service orders before, during, and after fulfillment."} />
                <div className={styles.subscription_info}>
                    <p>A simple start for everyone</p>
                    <h2>
                        $59.99 <span>/month</span>
                    </h2>
                    <Button tonal={true} fullWidth={true}>
                        change Plan
                    </Button>
                </div>
                <ul className={styles.subscription_details}>
                    <li>
                        Subscription <span>$85.99</span>
                    </li>
                    <li>
                        Tax <span>$4.99</span>
                    </li>
                    <Divider />
                    <li>
                        Total <span>$90.98</span>
                    </li>
                </ul>
                <Button iconPosition="right" icon={GlobalICONS.NEXT_ARROW} variant="success" fullWidth={true}>
                    Proceed With Payment
                </Button>
                <p>By continuing, you accept to our Terms of Services and Privacy Policy. Please note that payments are non-refundable.</p>
            </div>

            <div className={styles.subscription_plan_container}>
                <h2>Subscription Details</h2>
            </div>
        </div>
    );
};

export default Payment;
