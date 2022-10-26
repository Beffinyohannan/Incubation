import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import AdminDashboardPage from './Pages/AdminDashboardPage';
import AdminLoginPage from './Pages/AdminLoginPage';
import ApplicationFromPage from './Pages/ApplicationFromPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import UserDetail from './store/UseContext';
function App() {


  return (
    <div className="App">

      
{/* <UserDetail> */}

      <Router>
        <Routes>

          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/application-form' element={<ApplicationFromPage />} />

        </Routes>
        <Routes>
          <Route path='/admin-login' element={<AdminLoginPage/>} />
          <Route path='/admin-dashboard' element={<AdminDashboardPage/>} />

        </Routes>

      </Router>
{/* </UserDetail> */}
      
    </div>
  );
}

export default App;
