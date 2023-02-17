import React from 'react'
import { gestList, guestList } from './guestList';
import Dashboard from './Dashboard';

const Bookings = () => {
  return (
    <>
    <Dashboard></Dashboard>
      <div>Bookings</div>
      {
        guestList.map(item => (
          <div>
          <p>{item.first_name}</p>
          <p>{item.last_name}</p>
          <p>{item.email}</p>
          <p>{item.ip_address}</p>
          </div>
        ))
      }
    </>
  )
}

export default Bookings