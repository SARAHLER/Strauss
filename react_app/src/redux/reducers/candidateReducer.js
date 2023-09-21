import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    candidates: [],
    loading: true,
    error: null,
    selectedCandidate: null,
  };


  const candidatesSlice = createSlice({
    name: "candidates",
    initialState,
    reducers: {
      setCandidates: (state, action) => {
        state.candidates = action.payload;
        state.loading = false;
        state.error = null;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
      setSelectedCandidate: (state, action) => {
        state.selectedCandidate = action.payload;
      },
    },
  });
  
  
export const{setCandidates,setLoading,setError,setSelecteCandidate}=candidatesSlice.actions;
export default candidatesSlice.reducer;

