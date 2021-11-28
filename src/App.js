import React, { useEffect, useState } from 'react';
import './App.css';
import {AllRoutes} from "./Routes/AllRoutes";
import { loadData, saveData } from "./Utils/localStorage";
import { useHistory } from 'react-router-dom';
import { Header } from './Components/Header';
import { Page } from './Components/Page';

function App() {
  const history = useHistory();
  // set by Default email as guest
  if(loadData("email") === null){
      saveData("email", "guest");
      history.push("/welcome");
  }
  
  useEffect(() => {
//     var info=document.getElementById("headerID").Element.getBoundingClientRect() ;
// var height=info.height;
// var width=info.width;
// console.log(height)
// console.log(width)

    
  }, []);
  return (
    <div className="App">
      <Header />
      <Page />
      {/* <AllRoutes /> */}
    </div>
  );
}

export default App;
