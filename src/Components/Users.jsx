import React from 'react'
import { guestList } from './guestList'
import Dashboard from './Dashboard'
const Users = () => {
  return (
    <>
    <Dashboard/>
    <div>Users</div>
    {
      guestList.map(item => (
        <>
          <p>{item.first_name}</p>
          <p>{item.last_name}</p>
          <p>{item.email}</p>
          <p>{item.ip_address}</p>
        </>
      ))
    }
  </>
  )
}

export default Users