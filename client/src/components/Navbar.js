import React,{ useEffect, useState } from 'react'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from '../assets/logo.png'
import { Link, Navigate } from "react-router-dom";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { IoLogIn } from 'react-icons/fa';
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor:"black",
  color:"white"
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));


  
  
 
  

const Navbar = (props) => {
  const [loggedIn, setloggedIn2] = useState(
    localStorage.getItem("jwt") ? true : false
  );
  useEffect(()=>{
    console.log(setloggedIn2)
  },[setloggedIn2])

  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
    const landing =()=>{
    console.log('hello');
    return (<Navigate to="/" />)
  }
  
  const navigate = useNavigate();


  return (
    <div><AppBar position="sticky">
      <StyledToolbar>
      <Button
        variant="text"
        onClick={()=> navigate('/')}
        startIcon={<Box
          component="img"
          sx={{
          height: 64,
          }}
          alt="Your logo."
          src={logo}
          
      />}
      />
      
      <Stack>
       
      <Icons>
        
        {loggedIn?<Tabs
      value={value}
      onChange={handleChange}
      textColor="white"
      indicatorColor="white"
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="scrollable force tabs"
    >
      <Tab value="one" component={Link} to="/academies" label="Academies" />
      <Tab value="two" component={Link} to="/nutritionist" label="Guru's" />
      <Tab value="four" component={Link} to="/chatscreen" label="ChatScreen" />
      <Tab value="five" component={Link} to="/dashboard" label="Dashboard" /> 
          
    </Tabs>:<Tabs
      value={value}
      onChange={handleChange}
      textColor="white"
      indicatorColor="white"
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="scrollable force tabs"
    >
      <Tab value="one" component={Link} to="/academies" label="Academies" />
      <Tab value="two" component={Link} to="/gurus" label="Guru's" />
      <Tab value="three" component={Link} to="/login" label="Login" /> 
          
    </Tabs>}
      {/* {console.log(loggedIn)} */}
       
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      ><MenuItem
      component={Link} to='/contactus'>Contact Us</MenuItem>
        <MenuItem onClick={ <Box><Link href="ww.com"/></Box>}>Facebook</MenuItem>
        <MenuItem>Instagram</MenuItem>
        <MenuItem>Whatsapp</MenuItem>
      </Menu>
      
      
<UserBox onClick={(e) => setOpen(true)}>
         
        </UserBox>
        <ConnectWithoutContactIcon
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
          />
           <LogoutIcon onClick={()=>{
localStorage.removeItem('jwt')

navigate('/')



             }} />

             
          </Icons>
      </Stack>
   
      </StyledToolbar>
      </AppBar></div>
  )
}

export default Navbar