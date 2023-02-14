import React from 'react'
import { Link } from 'react-router-dom'
import  {guestList}  from './guestList.js'

const Rooms = () => {

  const guest = guestList
  return (
    <>
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
          </div>
        ))
      }
    </>
  )
}

export default Rooms