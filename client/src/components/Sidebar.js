
import React ,{useEffect} from 'react'
import {Box, Typography,Divider,Stack} from '@mui/material'
import UserCard from './UserCard';
import LogoutIcon from '@mui/icons-material/Logout';
import { LOAD_USERS } from '../graphql/Query'
import { useQuery } from '@apollo/client';
const Sidebar =  ({setloggedIn}) => {
    
    let users=[
        {id:1,firstName:"arjun",lastName:"Kumar"},        
    ]
    const {error,loading,data}=  useQuery(LOAD_USERS)
    useEffect(()=>{

    },[data])
    if(loading) return <Typography variant="h6">Loading chats</Typography>
   
    // const users2=data.users["0"]
    if(error){
    console.log(error.message)
    }
    // const users2=users.concat(data)
    // console.log(users2)
    // let allUsers=Object.entries(users2)
    
    // console.log(allUsers)
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
            data.users.map((item)=>{
                return <UserCard key={item.id} item={item} />
            }
            )
        }
        </Box>
  )
}

export default Sidebar