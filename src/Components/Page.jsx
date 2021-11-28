import React from 'react';
import { AllRoutes } from '../Routes/AllRoutes';
import styles from "../Styles/Page.module.css";
import { Drawer } from './Drawer';

const Page = () => {
    return (
        <div className={styles.container}>
            <Drawer />
            <AllRoutes />
        </div>
    )
}

export { Page }