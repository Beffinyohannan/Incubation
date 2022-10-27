import React from 'react'
import RejectedList from '../components/Admin/RejectedList/RejectedList'
import Sidebar from '../components/Admin/Sidebar/Sidebar'

function AdminRejectedList() {
  return (
    <div className='flex'>
        <Sidebar/>
        <RejectedList/>
    </div>
  )
}

export default AdminRejectedList