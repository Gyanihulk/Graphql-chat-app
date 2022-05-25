import React from 'react'
import Sidebar from '../components/Sidebar'
import Welcome from '../components/Welcome'
import ChatScreen from '../components/ChatScreen'
import {Route, Routes } from "react-router-dom";
import {Box} from '@mui/material'
const AllRoutes = ()=>{
    return(
  
      <Routes>
       <Route path="/" element={<Welcome/>} />
      <Route path="/:id/:name" element={<ChatScreen />} />
    </Routes>

    )
  }

const HomeSceen = () => {
  return (<Box
    display="flex"
    >
    <Sidebar/>
<AllRoutes/>
</Box>
  )
}

export default HomeSceen