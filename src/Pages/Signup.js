import React from 'react'
import "../Styles/Signup.css"
import Typography from '@mui/material/Typography'
import { Button, TextField } from '@mui/material'


const Signup_Page = () => {
  return (
    <>
    {/* -------------------------Navbar------------------------------ */}
    <nav>
    <Typography sx={{
      paddingTop:'20px',
      paddingLeft:'50px',
      fontSize:'30px'
    }}>
      Systems
      </Typography>
    </nav>

     {/* --------------------------Hero Text----------------------------------  */}
    <div className='signup'>
      <Typography sx={{
        paddingTop:"100px",
        textAlign:'center',
        fontSize:'30px'
      }}>Signup Here?</Typography>
      <Typography sx={{
        paddingTop:'10px',
        textAlign:'center'
      }}>
        The faster you fill up,the faster you are registered to Systems.</Typography>
    </div>
    {/* -----------------------Forms-------------------------------------------------- */}
      
      <div className='textfield'>
        <TextField sx={{
          position:'relative',left:'340px',width:'25%'
        }} label='First Name' variant='outlined'></TextField>
        <TextField sx={{
          position:'relative',left:'360px',width:'25%'
        }} label='Last Name' variant='outlined'/>
      </div>
      <div className='textfield2'>
        <TextField sx={{
          position:'relative',left:'340px',width:'52%'
        }} label='Email'variant='outlined'/>
      </div>
      <div className='textfield2'>
        <TextField sx={{
          position:'relative',left:'340px',width:'52%'
        }} label='Password'variant='outlined'/>
      </div>
      
      <div className='btn'>
        <Button sx={{
          width:'52%',position:'relative',left:'340px',backgroundColor:"black",
        }}
        variant='contained'>Sign Up</Button>
        <Typography sx={{
          textAlign:'center',paddingTop:'10px'
        }}>Already have an account? Login Here.</Typography>
      </div>
    </>
  )
}

export default Signup_Page