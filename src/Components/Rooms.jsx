import React from 'react'
import { Link } from 'react-router-dom'
import  {guestList}  from './guestList.js'
import Dashboard from './Dashboard.jsx'

const Rooms = () => {

  const guest = guestList
  return (
    <>
    <Dashboard></Dashboard>
      <div>Rooms </div>
      {
        guest.map((room) => (
          <div key={room.id}>
            <Link to={`/room/${room.id}`} >
              <p>{room.id}</p> 
            </Link>
            <p>{room.first_name}</p> 
            <p>{room.last_name}</p> 
            <p>{room.email}</p> 
            <p>{room.ip_address}</p> 
          </div>
        ))
      }
    </>
  )
}

export default Rooms