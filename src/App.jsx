import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from './components/authPage'
import Signin from './components/signin'
import Signup from './components/signup'
import Home from "./pages/home";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //      <Route path="/" element={<AuthPage />}>
    //          <Route index element={<Signin />}/>
    //          <Route path="signup" element={<Signup />}/>
    //          <Route path="signin" element={<Signin />}/>
    //      </Route>
    //   </Routes>
    // </BrowserRouter>
    <Home />
  );
}

export default App;
