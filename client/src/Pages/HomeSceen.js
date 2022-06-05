import React from 'react'
import Sidebar from '../components/Sidebar'
import Welcome from '../components/Welcome'
import ChatScreen from '../components/ChatScreen'
import {Route, Routes } from "react-router-dom";
import {Box} from '@mui/material'
import AuthScreen from './AuthScreen';

// import {Navbar} from "./../components/Navbar"


const HomeSceen = ({setloggedIn}) => {
  return (<Box
    display="flex"
    >
      
    <Sidebar setloggedIn={setloggedIn}/>

</Box>
  )
}

export default HomeSceen