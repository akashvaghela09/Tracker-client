import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography } from '@mui/material';
import styles from "../Styles/Header.module.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { DrawerContent } from './DrawerContent';
import '../App.css';

const Header = (data) => {
    const { handleDrawerOpen } = data;
    const [isOpen, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!isOpen)
        handleDrawerOpen(!isOpen)
    }
    return (
        <div className={styles.container}>
            <IconButton  onClick={() => toggleDrawer()}>
                {
                    isOpen === false ? <MenuIcon className={styles.menuBtn}/> : <ArrowBackIosNewIcon className={styles.menuBtn}/>
                }
            </IconButton>
            <Typography variant="p" className={styles.appName}>MyTask Tracker 📋</Typography>
                <SwipeableDrawer
                    anchor="left"
                    open={isOpen}
                    onClose={() => toggleDrawer()}
                    id="swipableDrawer"
                >
                <DrawerContent/>
                </SwipeableDrawer>
        </div>
    );
}

export { Header }