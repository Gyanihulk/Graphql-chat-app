import logo from "./logo.svg";
import "./App.css";
import './App.scss';
import AuthScreen from "./Pages/AuthScreen";
import HomeSceen from "./Pages/HomeSceen";
import GetUsers from "./components/GetUsers";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import ChatScreen from "./components/ChatScreen";
import Academies from "./components/Academies";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
// const AllRoutes = ()=>{
//   return(

//   )
// }

function App() {
  const [loggedIn, setloggedIn] = useState(
    localStorage.getItem("jwt") ? true : false
  );
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  useEffect(()=>{
  },[])
  return (
    <>
      <Navbar setloggedIn={setloggedIn} />
      {loggedIn ? (
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/:id/:name" element={<ChatScreen />} />
          <Route
            path="/login"
            element={<AuthScreen setloggedIn={setloggedIn} />}
          />
          <Route
            path="/chatscreen"
            element={<HomeSceen setloggedIn={setloggedIn} />}
          />
          <Route path="/dashboard"
            element={<Dashboard/>}/>
          <Route path="/academies" element={<Academies />} />
          <Route path="/gurus" element={<GetUsers/>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/login"
            element={<AuthScreen setloggedIn={setloggedIn} />}
          />
          <Route path="/academies" element={<Academies />} />
          <Route path="/gurus" element={<GetUsers/>} />
        </Routes>
      )}

    
    </>
  );
}

export default App;
