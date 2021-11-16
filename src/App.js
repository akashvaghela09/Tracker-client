import React, { useState } from 'react';
import './App.css';
import {AllRoutes} from "./Routes/AllRoutes";
import { loadData, saveData } from "./Utils/localStorage";
import { useHistory } from 'react-router-dom';
import { Header } from './Components/Header';

function App() {
  const history = useHistory();
  // set by Default email as guest
  if(loadData("email") === null){
      saveData("email", "guest");
      history.push("/welcome");
  }
  
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
