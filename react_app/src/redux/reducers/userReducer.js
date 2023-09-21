import {  createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchSignup.fulfilled, (state, action) => {
    //             state.currentUser = action.payload;
    //         })
    //         .addCase(fetchSignup.rejected, (state, action) => {
    //             state.error = action.error.message;
    //         });
    // },
});

export const { setUser, setError, clearError } = userSlice.actions;
export default userSlice.reducer;
