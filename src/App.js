import React, { useEffect, useState } from 'react';
import './App.css';
import { loadData, saveData } from "./Utils/localStorage";
import { useHistory } from 'react-router-dom';
import { Header } from './Components/Header';
import { Page } from './Components/Page';

function App() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleDrawerOpen = (para) => {
    setIsOpen(para)
  }
  
  // set by Default email as guest
  if(loadData("email") === null){
      saveData("email", "guest");
      history.push("/welcome");
  }

  return (
    <div className="App">
      <Header handleDrawerOpen={handleDrawerOpen}/>
      <Page isOpen={isOpen}/>
    </div>
  );
}

export default App;
