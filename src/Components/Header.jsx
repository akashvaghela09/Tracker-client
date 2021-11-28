import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography } from '@mui/material';
import styles from "../Styles/Header.module.css";
import { Drawer } from './Drawer';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!isOpen)
    }
    return (
    <div className={styles.container}>
        {
            isOpen === true && <Drawer/>
        }
        <IconButton >
            <MenuIcon className={styles.menuBtn} onClick={() => toggleDrawer()}/>
        </IconButton>
        <Typography variant="p" className={styles.appName}>MyTask Tracker 📋</Typography>
    </div>
  );
}

export { Header }