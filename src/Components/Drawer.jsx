import React from 'react';
import styles from "../Styles/Drawer.module.css";
import { DrawerContent } from './DrawerContent';
import '../App.css';

const Drawer = () => {
    return (
        <div className={styles.container} id="normalDrawer">
            <DrawerContent />
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sunt.</p> */}
        </div>
        
    )
}

export { Drawer }