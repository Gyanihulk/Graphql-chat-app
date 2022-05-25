
import React from 'react'
import {Box, Typography,Divider,Stack} from '@mui/material'
import UserCard from './UserCard';
const Sidebar = () => {
    const users=[
        {id:1,firstName:"arjun",lastName:"Kumar"},
        
    ]
  return (
    <Box
    backgroundColor="#f7f7f7"
    height="100vh"
    width="250px"
    padding="10px"
    >
        <Stack
         direction="row"
         justifyContent="space-between"
        >
             <Typography variant="h6">Chat</Typography>
                
        </Stack>
        <Divider />
        {
            users.map(item=>{
                return <UserCard key={item.id} item={item} />
            })
        }
        </Box>
  )
}

export default Sidebar