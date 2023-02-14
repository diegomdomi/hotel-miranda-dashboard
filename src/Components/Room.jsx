import React from 'react';
import { useParams } from 'react-router-dom';

const Room = () => {
  const { id } = useParams()
  console.log(id)
  
  return (
    <div>Room{id}</div>
  )
}

export default Room