import React, { useState } from 'react';
import styles from "../Styles/Register.module.css"
import {Link} from 'react-router-dom';
import axios from "axios";
import { loadData, saveData } from "../Utils/localStorage"
import { useHistory } from 'react-router-dom';
import { Loader } from '../Components/Loader';

const Register = () => {
    const history = useHistory();
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    
    const handleRegister = () => {
        setLoading(true)
        
        if(name === "" || email === "" || password === ""){
            alert("Something is missing")
            setLoading(false)
        } else {
            let temp = {
                "name": name,
                "email": email,
                "password": password,
                "avatar_url": "",
            }
            
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`, temp)
            .then((res) => {
                alert("User Registered")
                const response = res.data.data;
                saveData("name", response.name);
                saveData("email", response.email);
                saveData("avatar_url", "")
                history.push("/");
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
        }
    }
    
    
    if(loadData("email") !== "guest"){
        history.push("/");
    }
    
    return (
        <div className={styles.container}>
        {
            loading === true && <Loader />
        }
            <div className={styles.input_div}>
                <p className={styles.input_label}>Name</p>
                <input 
                    className={styles.inputbar}
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter Name here ..."></input>
            </div>
            <div className={styles.input_div}>
                <p className={styles.input_label}>Email</p>
                <input 
                    className={styles.inputbar}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter email here ..."></input>
            </div>
            <div className={styles.input_div}>
                <p className={styles.input_label}>Password</p>
                <input 
                    className={styles.inputbar}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Enter password here ..."
                    type="password"></input>
            </div>
            <button className={styles.button} onClick={() => handleRegister()}>Register</button>
            <p className={styles.link_tag}>Already have an Account ? <Link to="/login" className={styles.link}>click here</Link></p>
        </div>
    )
}

export { Register }