import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from "../Styles/Home.module.css"
import { loadData, saveData, clearData } from "../Utils/localStorage";

const Home = () => {
    
    const history = useHistory();
    const [username, setUsername] = useState("")
    
    if (loadData("email") === "guest"){
        history.push("/welcome");
    }
    
    useEffect(() => {
        let tempName = loadData("name")
        setUsername(tempName)
    }, []);
    
    const handleLogout = () => {
        clearData()
        saveData("email", "guest");
        history.push("/welcome");
    }
    return (
        <div className={styles.container}>
            <h1>Hi {username} 👋</h1>
            <button className={styles.button} onClick={() => handleLogout()}>LOGOUT</button>
        </div>
    )
}

export {Home}