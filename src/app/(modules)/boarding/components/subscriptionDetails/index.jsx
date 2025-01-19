import React from "react";
import styles from "./index.module.css";
import Heading from "../header";

export default function SubscriptionDetails() {
    const features = [
        {
            title: "Test Series",
            icon: (
                <svg className={styles.feature_icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    ></path>
                </svg>
            ),
            details: ["Create and manage multiple test series", "Automated grading and result analysis", "Performance tracking for students", "Customizable question banks"],
        },
        {
            title: "Course Management",
            icon: (
                <svg className={styles.feature_icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                </svg>
            ),
            details: ["Organize courses by subjects and topics", "Schedule classes and manage attendance", "Assign and track homework", "Share study materials and resources"],
        },
        {
            title: "Video Lectures",
            icon: (
                <svg className={styles.feature_icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                </svg>
            ),
            details: ["Upload and stream HD video content", "Organize videos into playlists", "Track student video engagement", "Allow students to take notes while watching"],
        },
        {
            title: "Live Classes",
            icon: (
                <svg className={styles.feature_icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                </svg>
            ),
            details: ["Conduct interactive live sessions", "Real-time doubt clearing", "Whiteboard and screen sharing", "Record and share live class recordings"],
        },
    ];

    return (
        <div>
            <Heading heading={"Your Premium Institute Subscription"} subHeading={"Unlock powerful tools to elevate your coaching experience."} />
            <div className={styles.features_grid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.feature_card}>
                        <div className={styles.feature_header}>
                            {feature.icon}
                            <h3 className={styles.feature_title}>{feature.title}</h3>
                        </div>
                        <ul className={styles.feature_list}>
                            {feature.details.map((detail, idx) => (
                                <li key={idx} className={styles.feature_item}>
                                    <svg className={styles.check_icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className={styles.feature_text}>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
