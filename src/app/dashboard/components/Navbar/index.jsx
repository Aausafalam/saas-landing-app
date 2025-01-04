import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import searchIcon from "./assets/searchIcon.png";
import languageIcon from "./assets/language.png";
import themeIcon from "./assets/themeIcon.png";
import dashboardMore from "./assets/dashboardMore.png";
import notificationIcon from "./assets/notificationIcon.png";
import profileIcon from "./assets/profileIcon.png";
import Dropdown from "@/components/DropDown";
import ICONS from "@/utils/icons";

const Navbar = () => {
    return (
        <div className={styles.container__wrapper}>
            <header className={styles.navbar}>
                <div className={styles.search_bar}>
                    <span>{ICONS.SEARCH}</span>
                    {/* <Image src={searchIcon} alt="" /> */}
                    <p>
                        Search <span>⌘K</span>
                    </p>
                </div>
                <ul className={styles.left_icon}>
                    <li>
                        <Dropdown
                            trigger={<p className={styles.menu_list_icon}>{ICONS.LANGUAGE}</p>}
                            content={
                                <div>
                                    <div className={styles.menuLinksContainer}>Language</div>
                                </div>
                            }
                        />
                    </li>
                    <li>
                        <Dropdown
                            trigger={<p className={styles.menu_list_icon}>{ICONS.THEME}</p>}
                            content={
                                <div>
                                    <div className={styles.menuLinksContainer}>Theme Changer</div>
                                </div>
                            }
                        />
                    </li>
                    <li>
                        <Dropdown
                            trigger={<p className={styles.menu_list_icon}>{ICONS.GRID}</p>}
                            content={
                                <div>
                                    <div className={styles.menuLinksContainer}>Dashboard More</div>
                                </div>
                            }
                        />
                    </li>
                    <li>
                        <Dropdown
                            dropDownContainerClass={styles.dropdownContent}
                            trigger={<p className={styles.menu_list_icon}>{ICONS.NOTIFICATION}</p>}
                            content={
                                <div>
                                    <div className={styles.menuLinksContainer}>Notifications</div>
                                </div>
                            }
                        />
                    </li>
                    <li>
                        <Dropdown
                            dropDownContainerClass={styles.dropdownContent}
                            trigger={<Image src={profileIcon} alt="" />}
                            content={
                                <div>
                                    <div className={styles.menuLinksContainer}>Profile Info</div>
                                </div>
                            }
                        />
                    </li>
                    <li className={styles.userInfo}>
                        <Dropdown
                            dropDownContainerStyle={{ minWidth: "250px" }}
                            dropDownContainerClass={styles.dropdownContent}
                            trigger={<span className={styles.userIcon}></span>}
                            content={
                                <div className={styles.dropdownMenu}>
                                    <div className={styles.userContainer}>
                                        <span>
                                            <Image src={"/images/profile.webp"} alt="User Profile" width={50} height={50} className={styles.profileImage} />
                                        </span>
                                        <div className={styles.username}>
                                            <span>{"Name"}</span>
                                            <span>{"Role"}</span>
                                        </div>
                                    </div>
                                    <div className={styles.menuLinksContainer}>
                                        <div className={styles.links}>
                                            <Link href="/user-profile">
                                                <span>{ICONS.USER}</span>
                                                <span>Profile</span>
                                            </Link>
                                        </div>
                                        <div>
                                            <hr className={styles.vDivider} aria-orientation="horizontal" role="separator"></hr>
                                            <Link href="/user/logout" className={styles.logoutBtn}>
                                                <span>Logout</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Navbar;
