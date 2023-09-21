import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userReducer';
import candidatesReducer from './reducers/candidateReducer'; 

export const store = configureStore({
  reducer: {
    user:userReducer,
    candidates: candidatesReducer,
  },
});

