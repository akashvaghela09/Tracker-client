import React from 'react';
import styles from "../Styles/Welcome.module.css"
import { useHistory } from 'react-router-dom';
import { loadData } from "../Utils/localStorage"

const Welcome = () => {
    const history = useHistory();
    
    if(loadData("email") !== "guest"){
        history.push("/");
    }
    
    return (
        <div className={styles.container}>
            <h1>Welcome to MyTask Tracker 📋</h1>
            <button className={styles.button} onClick={() => history.push("/login")}>LOGIN</button>
            <button className={styles.button} onClick={() => history.push("/register")}>REGISTER</button>
        </div>
    )
}

export {Welcome}