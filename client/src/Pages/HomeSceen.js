import React from 'react'
import Sidebar from '../components/Sidebar'
import { Route,Routes } from 'react-router-dom'
import Welcome from '../components/Welcome'
import ChatScreen from '../components/ChatScreen'

const AllRoutes = ()=>{
    return(
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/:id/:name" element={<ChatScreen />} />
      </Routes>
    )
  }

const HomeSceen = () => {
  return (<>
    <Sidebar/>
{/* <AllRoutes/> */}
</>
  )
}

export default HomeSceen