import React from 'react'
import ApprovedList from '../components/Admin/ApprovedList/ApprovedList'
import Sidebar from '../components/Admin/Sidebar/Sidebar'

function AdminApprovedList() {
  return (
    <div className='flex'>
        <Sidebar/>
        <ApprovedList/>
    </div>
  )
}

export default AdminApprovedList