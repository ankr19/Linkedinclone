import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import { useDispatch } from "react-redux";
import { loginuser, logoutuser } from "./features/user/userSlice";
import { auth } from "./Firebase1";

function App() {
  const history = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          loginuser({
            email: userAuth.email,
            uid: userAuth.uid,
            photoURL: userAuth.photoURL,
            displayName: userAuth.displayName,
          })
        );
        history("/home");
      } else {
        dispatch(logoutuser());
        history("/login");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
