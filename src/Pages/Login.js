import React from 'react'
import "../Styles/Login.css"
import Typography from '@mui/material/Typography'
import { Button, TextField } from '@mui/material'

const Login = () => {
  return (
    <>
    <div className='signup'>
      <Typography sx={{
        paddingTop:"100px",
        textAlign:'center',
        fontSize:'30px'
      }}>Login Here</Typography>
    </div>
    {/* -----------------------Forms-------------------------------------------------- */}

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
        variant='contained'>Login</Button>
        <Typography sx={{
          textAlign:'center',paddingTop:'10px'
        }}>Don't have an account? Create one.</Typography>
      </div>

    </>
  )
}

export default Login