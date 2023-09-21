import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API_BASE_URL from '../apiConfig'

export const fetchSignup = createAsyncThunk('/auth/signup', async (formData, { rejectWithValue }) => {
  try {
    const requestData = {
      [formData[0].name]: formData[0].value,
      [formData[1].name]: formData[1].value,
      [formData[2].name]: formData[2].value,
    };
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, requestData);
    localStorage.setItem('token', JSON.stringify(response?.data?.token));
    return response.data.user;
  } catch (error) {
    return rejectWithValue('Expired, please log in again');
  }
});

export const fetchSignIn = createAsyncThunk('/auth/signin', async (formData, { rejectWithValue }) => {
  try {
    const requestData = {
      [formData[0].name]: formData[0].value,
      [formData[1].name]: formData[1].value,
    };
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, requestData);
    localStorage.setItem('token', JSON.stringify(response?.data?.token));
    return response.data.message;
  } catch (error) {
    return rejectWithValue('Expired, please log in again');
  }
});