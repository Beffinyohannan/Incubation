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
import SignupPage from './Pages/SignupPage';
import UserDetail from './store/UseContext';
function App() {


  return (
    <div className="App">

      

      <Router>
{/* <UserDetail> */}
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

        </Routes>
        {/* </UserDetail> */}

      </Router>
      
    </div>
  );
}

export default App;
