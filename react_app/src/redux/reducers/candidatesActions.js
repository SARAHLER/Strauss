
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API_BASE_URL from '../apiConfig'
import { setCandidates, setLoading } from './candidateReducer';

export const fetchCandidates = createAsyncThunk('candidates/fetchCandidates', async (dispatch , { rejectWithValue }) => {
  try {
       const token = localStorage?.token?.replace(/['"]+/g, '');
        const response = await axios.get(`${API_BASE_URL}/candidates`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
    dispatch(setCandidates (response.data.candidates));
    dispatch (setLoading(false));
  } catch (error) {
    return rejectWithValue('Expired, please log in again');
  }
});