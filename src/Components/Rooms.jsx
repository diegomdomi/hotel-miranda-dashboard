import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { fetchAllRooms } from '../Redux/roomSlice.js';
import  { deleteRoom } from '../Redux/roomSlice.js';
import { TiDelete } from 'react-icons/ti'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableData,
  RowHeader,
  Paragraph,
  Span,
  ImgContainer,
  ParagraphContainer,
  Button,
  HeaderContainer,
  ListTitleTopContainer,
  ListTitleTop,
  NewRoomButtonContainer,
  NewRoomButton
} from './RoomsStyled'
import { Spinner } from './Spinner';

const Rooms = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector(state=>state.roomSlice)
  console.log(list);

  useEffect(() => {
    dispatch(fetchAllRooms())
  },[dispatch])
  
  
  const handleClickDelete = (id) => {
    dispatch(deleteRoom(id))
  }
  return (
    <>
     {  status === 'loading' ? <Spinner/>
     : <TableContainer>
        <HeaderContainer>
          <ListTitleTopContainer>
            <ListTitleTop >All Rooms</ListTitleTop>
            <ListTitleTop>Active Employee</ListTitleTop>
            <ListTitleTop>Inactive Employee</ListTitleTop>
          </ListTitleTopContainer>
          <NewRoomButtonContainer>
            <NewRoomButton bgColor={'#135846'}
              color={"white"}>+ New Room</NewRoomButton>
            <NewRoomButton color={'#135846'}>Newest</NewRoomButton>
          </NewRoomButtonContainer>
        </HeaderContainer>
        <Table >
          <thead>
            <RowHeader>
              <TableHead>Room Name</TableHead>
              <TableHead>Bed Type</TableHead>
              <TableHead>Room Floor</TableHead>
              <TableHead>Amenities</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead>Status</TableHead>
            </RowHeader>
          </thead>
          <tbody>
      {
        list.map((room) => 
        (<TableRow key={room.id}>
          <ImgContainer>
            <TableData>
                <Link to={`/room/${room.id}`} >
                  <img src={room.img} alt="img"/> 
                </Link>
            </TableData>
              <ParagraphContainer>
                <Span>#000123456</Span>
                <Paragraph>Dekuxe A-91234</Paragraph>
              </ParagraphContainer>
              </ImgContainer> 
            <TableData>
              <Paragraph>{room.bed_type}</Paragraph>
            </TableData> 
            <TableData>
              <Paragraph>{room.room_floor}</Paragraph>
            </TableData> 
            <TableData>
              <Paragraph>{room.amenities}</Paragraph>
            </TableData> 
            <TableData>
              <Paragraph>{room.rate}
                <Span>night</Span>
              </Paragraph>
            </TableData> 
            <TableData>
              <Button>
                {room.status}
              </Button>
            </TableData> 
            <TableData>
              <TiDelete  style={{cursor:"pointer"}} color={'red'} size={25} onClick={()=>handleClickDelete(room.id)}/>
            </TableData>
          </TableRow> ))
      }
    </tbody>
  </Table>
  </TableContainer>}
    </>
  )
}

export default Rooms
