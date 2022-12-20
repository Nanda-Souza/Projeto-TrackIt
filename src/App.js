
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LogInContext from "./contexts/LogInContext";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import HabitPage from "./pages/HabitPage";
import HistoryPage from "./pages/HistoryPage";
import { useState } from "react";





export default function App() { 
  const [loginInfo, setLoginInfo] = useState({})
  const [userHabbits, setUserHabbits] = useState(undefined)
  const [counter, setCounter] = useState(0)
  const [percentage, setPercentage] = useState(0)  
  const config = {
    headers: {
        Authorization: `Bearer ${loginInfo.token}`,
      },
    };
  

  return (
    <LogInContext.Provider value={{loginInfo, setLoginInfo, config, userHabbits, setUserHabbits, counter, setCounter, percentage, setPercentage}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/hoje" element={<HomePage />} />
          <Route path="/habitos" element={<HabitPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>    
      </BrowserRouter>
    </LogInContext.Provider>
      
    
  );
};

