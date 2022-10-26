import React from 'react'
import Dashboard from '../components/Admin/Dashboard/Dashboard'
import Sidebar from '../components/Admin/Sidebar/Sidebar'

function AdminDashboardPage() {
  return (
    <div className='flex'>
        <Sidebar/>
        <Dashboard/>
    </div>
  )
}

export default AdminDashboardPage