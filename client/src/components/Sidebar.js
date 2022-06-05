
import React from 'react'
import {Box, Typography,Divider,Stack} from '@mui/material'
import UserCard from './UserCard';
import LogoutIcon from '@mui/icons-material/Logout';
import { LOAD_USERS } from '../graphql/Query'
const Sidebar = ({setloggedIn}) => {
    const users=[
        {id:1,firstName:"arjun",lastName:"Kumar"},        
    ]
    // const {error,loading,data}= useQuery(LOAD_USERS)
    // useEffect(()=>{
    // },[data])

    
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