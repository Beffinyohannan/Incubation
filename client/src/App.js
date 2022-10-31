import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import AdminApprovedList from './Pages/AdminApprovedList';
import AdminDashboardPage from './Pages/AdminDashboardPage';
import AdminLoginPage from './Pages/AdminLoginPage';
import AdminRejectedList from './Pages/AdminRejectedList';
import ApplicationFromPage from './Pages/ApplicationFromPage';
import BookingSlotPage from './Pages/BookingSlotPage';
import CreateSlotPage from './Pages/CreateSlotPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ProgressPage from './Pages/ProgressPage';
import SignupPage from './Pages/SignupPage';
import User from './store/UseContext';
import Applications from './store/ApplicationContext';
function App() {


  return (

    <User>
    <Applications>

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
          <Route path='/admin-approved-list' element={<AdminApprovedList/>} />
          <Route path='/admin-rejected-list' element={<AdminRejectedList/>} />
          <Route path='/admin-create-slot' element={<CreateSlotPage/>} />
          <Route path='/admin-Book-slot' element={<BookingSlotPage/>} />
          <Route path='/admin-progress' element={<ProgressPage/>} />
          

        </Routes>

      </Router>


</Applications>
</User>
      
  );
}

export default App;
