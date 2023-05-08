import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import img from '../Assets/room4.jpg';
import { useSelector,useDispatch } from 'react-redux';
import { fetchAllRooms } from '../Redux/roomSlice.js';
import  { deleteRoom } from '../Redux/roomSlice.js';
import { TbDotsVertical } from 'react-icons/tb'
import { TiDelete } from 'react-icons/ti'
import styled from 'styled-components';
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

const Rooms = ({measure}) => {
  const dispatch = useDispatch();
  const { list, status } = useSelector(state=>state.roomSlice)
  
  useEffect(() => {
    dispatch(fetchAllRooms())
  },[dispatch])
  
  const handleClickDelete = (id) => {
    dispatch(deleteRoom(id))
    
  }

  return (
    <>
     {  status === 'loading' ? <Spinner/>
     : <TableContainer margin={measure ? "300px" : "50px"}>
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
                {/* <Link to={`/room/${room.id}`} > */}
                  <img src={img} alt="img"/> 
                {/* </Link> */}
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
              <TiDelete color={'red'} size={25} onClick={()=>handleClickDelete(room.id)}/>
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
