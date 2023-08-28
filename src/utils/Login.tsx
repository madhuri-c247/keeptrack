import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import image from '../assests/loginimage.webp'
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Typography } from '@mui/material';
import { AppDispatch, RootState } from '../services/Store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { login } from '../services/reducers/userReducer';

function Login() {
  const [userData, setUser] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const useAppDispatch: () => AppDispatch = useDispatch;
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const matchedUser = useAppSelector(state=>state.user.matchedUser);
  const dispatch = useAppDispatch();
 
  useEffect(() => {
   
  },[])

  const handleSubmit = (event:any) => {
    event.preventDefault();
    dispatch(login(userData));
    if(matchedUser.length>0){
      navigate('/')
      console.log(matchedUser,'found');
    }
    else{

      console.log('not found');
    }
    
  }
    const handleChange = (e:any) => {
      const { value, name } = e.target;
      setUser({
        ...userData,
        [name]: value
      })
    }

    return (
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col='10' md='6'>
            <img src={image} className="img-fluid" alt="logo" />
          </MDBCol>
          <MDBCol col='4' md='6'>
            <Typography className='mb-5' variant='h3'>Login :)</Typography>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' value={userData.email} onChange={handleChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' value={userData.password} onChange={handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Form.Text>New User?</Form.Text><NavLink to={'/signup'}>Register</NavLink>
            </Form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }

export default Login;
