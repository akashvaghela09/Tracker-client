import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton, Typography } from '@mui/material';
import styles from "../Styles/Header.module.css";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    
    const handleDrawerOpen = () => {
        setOpen(!isOpen)
    }
    return (
    <div className={styles.container}>
        
        <IconButton >
            <MenuIcon className={styles.menuBtn} onClick={() => handleDrawerOpen()}/>
        </IconButton>
        <Typography variant="p" className={styles.appName}>MyTask Tracker 📋</Typography>
        <SwipeableDrawer
            anchor="left"
            open={isOpen}
            onClose={() => handleDrawerOpen()}
        >
        <div>Swipeable Drawer from MUI, add List here</div>
        </SwipeableDrawer>
    </div>
  );
}

export { Header }