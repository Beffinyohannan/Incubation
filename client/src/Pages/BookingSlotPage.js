import React from 'react'
import BookSlot from '../components/Admin/BookSlot/BookSlot'
import Sidebar from '../components/Admin/Sidebar/Sidebar'

function BookingSlotPage() {
  return (
    <div className='flex'>
    <Sidebar/>
    <BookSlot/>
</div>
  )
}

export default BookingSlotPage