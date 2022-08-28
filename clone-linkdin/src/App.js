import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import {useSelector} from 'react-redux'
import { selectUser } from "./features/user/userSlice";

function App() {
  const history = useNavigate();
  let user=useSelector(selectUser);
  useEffect(() => {
    if (user) {
      history('/home')
    } else {
      history('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </>
  );
}

export default App;
