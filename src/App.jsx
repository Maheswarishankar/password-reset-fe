import React from 'react';
import Login from './components/Login/Login';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import SignUp from './components/Signup/SignUp';
import ProtectRoute from './ProtectRoute';
import Main from './components/Main/Main';
import SendOtp from './components/ForgotPassword/SendOtp';
import VerifyOtp from './components/ForgotPassword/VerifyOtp';
import ResetPassword from './components/ForgotPassword/ResetPassword';
function App() {


  return (
    <>
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/main' element={<ProtectRoute><Main/></ProtectRoute>}></Route>
        <Route path='/loginhelp' element={<SendOtp/>}></Route>
        <Route path='/loginhelp/otp/:token' element={<VerifyOtp/>}></Route>
        <Route path='/loginhelp/ResetPassword' element={<ResetPassword/>}></Route>
      </Routes>
    </React.Fragment>
    
    
    </>
    
  );
}

export default App;
