import React from 'react';
import styles from "../Styles/Drawer.module.css";
import HomeIcon from '@mui/icons-material/Home';
import TodayIcon from '@mui/icons-material/Today';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { AiOutlineLineChart } from "react-icons/ai";
import { BsJournalBookmarkFill, BsCalendarWeek } from "react-icons/bs";
const DrawerContent = () => {
    return (
        <div className={styles.DrawerContentWrapper}>
            <div className={styles.categoryLinks}>
                <HomeIcon style={{fontSize: "25"}} className={styles.drawerIcons}/>
                <p className={styles.drawerIconText}>Home</p>
            </div>
            <div className={styles.categoryLinks}>
                <TodayIcon style={{fontSize: "25"}} className={styles.drawerIcons}/>
                <p className={styles.drawerIconText}>Today</p>
            </div>
            <div className={styles.categoryLinks}>
                <EventNoteIcon  style={{fontSize: "25"}} className={styles.drawerIcons}/>
                <p className={styles.drawerIconText}>Tomorrow</p>
            </div>
            <div className={styles.categoryLinks}>
                <ListAltIcon style={{fontSize: "25"}} className={styles.drawerIcons}/>
                <p className={styles.drawerIconText}>Wishlist</p> 
            </div>
            <div className={styles.categoryLinks}>
                <BsCalendarWeek  className={styles.drawerIcons}/>
                <p className={styles.drawerIconText}>Upcoming</p>
            </div>
            <div className={styles.categoryLinks}>
                <BsJournalBookmarkFill  className={styles.drawerIcons}/>
                <p className={styles.drawerIconText}>Backlog</p>
            </div>
            <div className={styles.categoryLinks}>
                <AiOutlineLineChart  className={styles.drawerIcons}/>
                <p className={styles.drawerIconText}>Report</p>
            </div>
        </div>
    )
}

export { DrawerContent }