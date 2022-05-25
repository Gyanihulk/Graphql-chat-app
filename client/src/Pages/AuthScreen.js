import React,{useState,useRef} from 'react'
import { Box,Stack,Typography,Button,TextField ,Card,CircularProgress,Alert} from '@mui/material'


const AuthScreen = ({setloggedIn}) => {
   const [showLogin,setShowLogin] = useState(true)
   const [formData,setFormData] = useState({})
   const authForm = useRef(null)
   

  
   

   const handleChange = (e)=>{

       setFormData({
           ...formData,
           [e.target.name]:e.target.value
       })
   }

   const handleSubmit = (e)=>{
     e.preventDefault()
    //  if(showLogin){
    //     loginUser({variables:{userSignin:formData}})
    //  }else{
    //    signupUser({
    //      variables:{
    //       userNew:formData
    //      }
    //    })
    //  }
   }

  return (
    <Box
     ref={authForm}
     component="form"
     onSubmit={handleSubmit}
     display="flex"
     justifyContent="center"
     alignItems="center"
     height="80vh"
    >
     <Card
     variant="outlined"
     sx={{padding:"10px"}}
     >
       <Stack
       direction="column"
       spacing={2}
       sx={{width:"400px"}}
       >
          
         
           <Typography variant="h5">Please {showLogin? "Login": "Signup" }</Typography>
           {
               !showLogin && 
               <>
                    <TextField 
                    name="firstName"
                    label="First Name"
                    variant="standard"
                    onChange={handleChange}
                    required
                    />
                    <TextField 
                    name="lastName"
                    label="Last Name"
                    variant="standard"
                    onChange={handleChange}
                    required
                    />
              </>
           }
          
           <TextField 
            type="email"
            name="email"
            label="email"
            variant="standard"
            onChange={handleChange}
            required
           />
           <TextField 
            type="password"
            name="password"
            label="password"
            variant="standard"
            onChange={handleChange}
            required
           />
           <Typography textAlign="center" variant="subtitle1" onClick={()=>{
               setShowLogin((preValue)=>!preValue)
               setFormData({})
               authForm.current.reset()
           }}> {showLogin? "Signup?":"Login?"}</Typography>
           <Button variant="outlined" type="submit">{showLogin? "Login": "Signup" }</Button>
       </Stack>
       </Card>
    </Box>
  )
}

export default AuthScreen