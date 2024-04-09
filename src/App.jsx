import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from './components/authPage'
import Signin from './components/signin'
import Signup from './components/signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
