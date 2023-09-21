import React from 'react';
import {Route, Routes} from 'react-router-dom';
import SignIn from './component/signinForm';
import CandidatesList from './component/candidatesList';
import CandidatesProfile from './component/candidateProfile';
import Signup from './component/signupForm';
import ButtonAppBar from './component/toolbar';

function App() {
  return (
    <>
      <ButtonAppBar/>
        <Routes>
          <Route exact path="/" element={<SignIn/>} />
          <Route exact path="/Signup" element={<Signup/>} />
          <Route path="/candidates" element={<CandidatesList/>} />
          <Route path="/candidatesProfile" element={<CandidatesProfile/>} />
        </Routes>
        </>
  );
}

export default App;
