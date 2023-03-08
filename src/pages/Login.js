import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState} from 'react'
import '../cssFiles/login.css'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router';
 
const Login = () => {

  const nav = useNavigate();
  const [page, setPage] = useState("Login")
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [repeatPassword, setRepeatPassword] = useState()
  const [showPassword, setShowPassword] = React.useState(false);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
  const login = async() => {
    try{
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log(user)
      } catch (error) {
        console.log(error.message)
      }
      nav("/")
  }

  const register = async() => {
    if(password === repeatPassword) {
      try{
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user)
      } catch (error) {
        console.log(error.message)
      }
      nav("/")
    }
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const setPageRegister = () => {
    setPage("Register")
    setEmail("")
    setPassword("")
    setRepeatPassword("")
  }

  const setPageLogin = () => {
    setPage("Login")
    setEmail("")
    setPassword("")
    setRepeatPassword("")
  }

  return (
    
    <div className='loginPage'>
      <Container maxWidth="md">
      {page === "Login" ? 
      <Box component="form" mt={2} sx={2} onSubmit={login}>
      <div className='login'>
      <Typography variant="h3">Login</Typography> 
      <div>
        <Typography variant='h6'>User Email Address</Typography>
        <TextField
          required
          id="email"
          label="Email Address"
          value={email || ''}
          onChange={(e) => {setEmail(e.target.value);}}
          fullWidth
          autoFocus
                />
      </div>
      <div>
        <Typography variant='h6'>Password</Typography>
        <TextField
          required
          id="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password || ''}
          onChange={(e) => {setPassword(e.target.value);}}
          fullWidth
          autoFocus
          InputProps={{
            endAdornment: (
            <IconButton
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>

          )}}
          />
      </div>
      <div className='button'>
        <div>
        <Button sx={{mt: 2, mr: 83}}
        variant="contained" 
        onClick={() => login()} 
        
        >Login
        </Button>
        <Button  sx={{mt: 2}}
        variant="contained" 
        onClick={() => setPageRegister()} 
        
        >Register</Button>
        </div>
      </div>
      </div>
      </Box>
      : 
      <Box component="form" mt={2} sx={2} onSubmit={register}>
      <div className='register'>
      <Typography variant="h3">Register</Typography>
      <div>
        <Typography variant='h6'>User Email Address</Typography>
        <TextField
          required
          id="email"
          label="Email Address"
          value={email || ''}
          onChange={(e) => {setEmail(e.target.value);}}
          fullWidth
          autoFocus
                />
      </div>
      <div>
        <Typography variant='h6'>Password</Typography>
        <TextField
          required
          id="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password || ''}
          onChange={(e) => {setPassword(e.target.value);}}
          fullWidth
          autoFocus
          InputProps={{
            endAdornment: (
            <IconButton
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>

          )}}
          />
      </div>
      <div>
        <Typography variant='h6'>Repeat Password</Typography>
        <TextField
          required
          id="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={repeatPassword || ''}
          onChange={(e) => {setRepeatPassword(e.target.value);}}
          fullWidth
          autoFocus
          InputProps={{
            endAdornment: (
            <IconButton
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>

          )}}
          />
      </div>
      <div className='button'>
        <div>
        <Button sx={{mt: 2, mr: 83}}
        variant="contained" 
        onClick={() => register()} 
        
        >Register
        </Button>
        <Button  sx={{mt: 2}}
        variant="contained" 
        onClick={() => setPageLogin()} >
          Login
        </Button>
        </div>
      </div>
      </div>
      </Box>
      }
      </Container>
    </div>
    
  );
};

export default Login;