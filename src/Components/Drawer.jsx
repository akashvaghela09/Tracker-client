import React from 'react';
import styles from "../Styles/Drawer.module.css";

const Drawer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.categoryLinks}>Home</div>
            <div className={styles.categoryLinks}>Today</div>
            <div className={styles.categoryLinks}>Tomorrow</div>
            <div className={styles.categoryLinks}>Wishlist</div>
            <div className={styles.categoryLinks}>Upcoming</div>
            <div className={styles.categoryLinks}>Backlog</div>
            <div className={styles.categoryLinks}>Reports</div>
        </div>
    )
}

export { Drawer }