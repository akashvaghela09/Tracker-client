import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from "../Styles/Home.module.css"
import { loadData, saveData } from "../Utils/localStorage";

const Home = () => {
    
    const history = useHistory();
    
    if (loadData("email") === "guest"){
        history.push("/welcome");
    }
    
    return (
        <div >
            Homepage
        </div>
    )
}

export {Home}