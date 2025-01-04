import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import styles from "./layout.module.css";

export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className={styles.layout}>
                    <Sidebar />
                    <div className={styles.body}>
                        <Navbar />
                        <div className={styles.content}>{children}</div>
                    </div>
                </div>
            </body>
        </html>
    );
}
