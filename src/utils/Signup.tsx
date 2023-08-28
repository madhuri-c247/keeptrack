import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../services/Store';
import {  onSubmit } from '../services/reducers/userReducer';
import { user } from '../helpers/constants';
import { User } from '../helpers/models';

const defaultTheme = createTheme();
function Copyright(props:any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '} 
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Signup() {
  const navigate = useNavigate();
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
   const AllUsers = useAppSelector(state=>state.user.AllUsers);
  const [users, setUser] = React.useState<User>({
    firstName:'',
    lastName:'',
    email:'',
    password:''
  })

  const handleChange = (e:any)=>{
    const {name, value} = e.target
    setUser({
      ...users, 
      [name]:value
    })
    
  }
    
  const handleSubmit = (e:any) => {
   e.preventDefault();
   dispatch(onSubmit(users));
   navigate('/login')
  };

  React.useEffect(()=>{
    // console.log(users, AllUsers, 'signup--')
  })
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={users.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={users.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={users.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={users.password}
                  onChange={handleChange}
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
               <NavLink to={'/login'}>
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
{/* {alert?
      <AlertComponent alertMessage={alertMessage} open={alert} handleClose={handleClose} severity={severity}/>
    :''} */}
    </ThemeProvider>
  );
}