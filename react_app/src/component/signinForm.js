
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import {  setError, clearError } from '../redux/reducers/userReducer'; 
import { Typography, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomTextField from './common-components/customTextField';
import CustomButton from './common-components/customButton';
import { fetchSignIn } from '../redux/reducers/userActions';

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error); 

  const [formData, setFormData] = useState([
    {
      name: 'username',
      label: 'Username',
      autoComplete: 'current-username',
      value: ''
    },
    {
      name: 'password',
      label: 'Password',
      autoComplete: 'current-password',
      value: ''
    },
  ]);


  const handleSubmit = async (event) => {
    
    event.preventDefault();
    if (!formData[0]?.value || !formData[1]?.value) {
      dispatch(setError('All fields must be filled'));
      return;
    }
    try {
      dispatch(fetchSignIn(formData));
      navigate('/candidates')
    } catch (error) {
      dispatch(setError('Username or password is incorrect'));
    }
  };

  const handleInputChange = (index,value)=>{ 
    const formDataTemp = [...formData];
    formDataTemp[index].value = value;
    setFormData(formDataTemp);
    dispatch(clearError());
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <CustomTextField arrFields={formData} func={handleInputChange} />
        <CustomButton text={'Sign In'}/>
        </Box>
        {error && (
          <Typography component="p" variant="body2" color="error">
            {error}
          </Typography>
        )}
      </Box>
    </Container>
  );
}