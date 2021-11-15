import React, { useState } from 'react';
import styles from "../Styles/Login.module.css"
import {Link} from 'react-router-dom';
import { loadData, saveData } from "../Utils/localStorage"
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Loader } from '../Components/Loader';

const Login = () => {
    const history = useHistory();
    
    if(loadData("email") !== "guest"){
        history.push("/");
    }
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    
    const handleLogin = () => {
        setLoading(true)
        
        if(email === "" || password === ""){
            alert("Something is missing")
            setLoading(false)
        }
        
        let temp = {
            "email": email,
            "password": password,
            "avatar_url": ""
        }
        
        axios.post(process.env.REACT_APP_BACKEND_URL+"/users/login", temp)
        .then((res) => {
            const response = res.data.data
            saveData("name", response.name);
            saveData("email", response.email);
            saveData("avatar_url", response.avatar_url);
            history.push("/");
        })
        .catch((err) => {
            if(err.response.status === 404){
                alert("User Not Found")
            } else if (err.response.status === 500){
                alert("User Authenticated Failed")
            }
            console.log(err)
            setLoading(false)
        })
    }
    
    return (
        <div className={styles.container}>
        {
            loading === true && <Loader />
        }
            <div className={styles.login_popup}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className={styles.inputbar} placeholder="Email" type="text" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className={styles.inputbar} placeholder="Password" type="password" />
                <button onClick={() => handleLogin()} className={styles.button}>Login</button>
                <p className={styles.link_tag}>Don't have an Account ? <Link to="/register" className={styles.link}>click here</Link></p>
            </div>
        </div>
    )
}

export { Login }