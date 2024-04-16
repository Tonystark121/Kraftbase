import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Home from "./pages/home";
import Dashboard from "./pages/personalDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
