import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import  {roomsList}  from '../TemplatesTable/roomsList.js';
import img from '../Assets/room4.jpg';
import { useSelector,useDispatch } from 'react-redux';
import { fetchAsyncRooms } from '../Redux/roomSlice.js';
import { TbDotsVertical } from 'react-icons/tb'

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


const Rooms = () => {
  const rooms = roomsList
  const dispatch = useDispatch();
  const roomStore = useSelector(state=>state.roomSlice.list)

useEffect(() => {
  dispatch(fetchAsyncRooms(rooms))

}, [dispatch,rooms])

  return (
    <>
      <TableContainer>
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
        roomStore.map((room) => 
        (<TableRow key={room.id}>
          <ImgContainer>
            <TableData>
                <Link to={`/room/${room.id}`} >
                  <img src={img} alt="img"/> 
                </Link>
            </TableData>
              <ParagraphContainer>
                <Span>#000123456</Span>
                <Paragraph>Dekuxe A-91234</Paragraph>
              </ParagraphContainer>
              </ImgContainer> 
            <TableData>
              <Paragraph>{room.bed_Type}</Paragraph>
            </TableData> 
            <TableData>
              <Paragraph>{room.room_floor}</Paragraph>
            </TableData> 
            <TableData>
              <Paragraph>{room.Amenities}</Paragraph>
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
            <TbDotsVertical/>
            </TableData>
          </TableRow> ))
      }
    </tbody>
  </Table>
  </TableContainer>
    </>
  )
}

export default Rooms
