import React from 'react'
import {Stack,Avatar, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatScreen from './ChatScreen';
const AllRoutes = ()=>{

    return(
  <Router>
     
      <Routes>
      <Route path="/:id/:name" element={<ChatScreen />} />
    </Routes>
</Router>
    )
  }
const UserCard = ({item:{firstName,lastName,id}}) => {
  
  const navigate = useNavigate()
    return (    
    <Stack
     className="usercard"
     direction="row"
     spacing={2}
     sx={{py:1}}
     onClick={()=>navigate(`/${id}/${firstName} ${lastName}`)}
    >
        <Avatar
         src={`https://avatars.dicebear.com/api/initials/${firstName} ${lastName}.svg`}
         sx={{width:"32px",height:"32px"}}
        />
       <Typography varinat="subtitle2">{firstName} {lastName}</Typography>
       
    </Stack>
  )
}

export default UserCard