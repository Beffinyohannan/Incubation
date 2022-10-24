import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import AdminLogin from './components/Admin/Login/AdminLogin';
import ApplicationFromPage from './Pages/ApplicationFromPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';

function App() {


  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/application-form' element={<ApplicationFromPage />} />

        </Routes>
        <Routes>
          <Route path='/admin-login' element={<AdminLogin/>} />
          
        </Routes>

      </Router>

    </div>
  );
}

export default App;
