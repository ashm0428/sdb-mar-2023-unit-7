import React, { useState, useEffect } from 'react';
import Auth from './components/Auth/Auth';
import Footer from './components/Footer';
import Header from './components/Header';
import LogIndex from './components/Log/LogIndex';
import { Route, Routes } from "react-router-dom";
import LogEdit from './components/Log/LogEdit';

function App() {
  const [token, setToken] = useState("");

  function updateToken(newToken) {
    // update the state of token 
    setToken(newToken);
    //update our localStorage
    localStorage.setItem("token", newToken);
  };

// uef keyboard shortcut
useEffect(() => {
  // If we have something in our local storage then lets update our State Variable so other components can use it
  if(localStorage.getItem("token")) {
    setToken(localStorage.getItem("token"))
  }
}, []); // This [] means it will only run once - when the page loads

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Auth updateToken={updateToken} />} />
        <Route path="/driver-log" element={<LogIndex token={token} />} />
        <Route path='/update/:id' element={<LogEdit token={token}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
