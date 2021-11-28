import React from 'react';
import { AllRoutes } from '../Routes/AllRoutes';
import styles from "../Styles/Page.module.css";
import { Drawer } from './Drawer';

const Page = (data) => {
    const { isOpen } = data;
    return (
        <div className={styles.container}>
            {
                isOpen === true && <Drawer />
            }
            <AllRoutes />
        </div>
    )
}

export { Page }