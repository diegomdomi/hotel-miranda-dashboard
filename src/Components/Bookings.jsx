import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllBookings } from '../Redux/bookingsSlice.js';
import { Spinner } from './Spinner';
import img from '../Assets/avatar1.jpg';
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
  ViewNotesButton,
  HeaderContainer,
  ListTitleTopContainer,
  ListTitleTop,
  NewRoomButtonContainer,
  NewRoomButton
} from './BookingsStyled'
const Bookings = () => {

  const { list,status } = useSelector(state=>state.bookingsSlice)
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchAllBookings())
    }, [])

 
  return (
    <>
      { status === 'loading' ? <Spinner/> 
      :
      <TableContainer>
        <HeaderContainer>
          <ListTitleTopContainer>
            <ListTitleTop>All Guest</ListTitleTop>
            <ListTitleTop>Pending</ListTitleTop>
            <ListTitleTop>Booked</ListTitleTop>
            <ListTitleTop>Canceled</ListTitleTop>
            <ListTitleTop>Refund</ListTitleTop>
          </ListTitleTopContainer>
          <NewRoomButtonContainer>
            <NewRoomButton bgColor={'#135846'}
              color={"white"}>1 November - 30 November 2020</NewRoomButton>
            <NewRoomButton color={'#135846'}>Newest</NewRoomButton>
          </NewRoomButtonContainer>
        </HeaderContainer>
        <Table >
          <thead>
            <RowHeader>
              <TableHead>Guest</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Check In</TableHead>
              <TableHead>Ckeck out</TableHead>
              <TableHead>Special Request</TableHead>
              <TableHead>Room Type</TableHead>
              <TableHead>Status</TableHead>
            </RowHeader>
          </thead>
          <tbody>
      { list.map((guest) =>
        (<TableRow key={guest.id}>
          <ImgContainer>
            <TableData >
                <Link to={`/bookings/${guest.id}`} >
                  <img src={guest.img} alt={guest.guest}/>
                </Link>
            </TableData>
              <ParagraphContainer>
                <Paragraph>{guest.guest}</Paragraph>
                <Span color={'#799283'}>#000123456</Span>
              </ParagraphContainer>
              </ImgContainer>
            <TableData>
              <Paragraph>{guest.order_date}</Paragraph>
            </TableData>
            <TableData>
              <Paragraph>
                {guest.check_in}
              </Paragraph>
                <Span>9:46 PM</Span>
            </TableData>
            <TableData>
              <Paragraph>
              {guest.check_out}
              </Paragraph>
              <Span>6:12 PM</Span>
            </TableData>
            <TableData>
              <ViewNotesButton
                color={guest.special_request === "None" ? '#212121' : '#799283'}
                bgcolor={guest.special_request === 'None'? 'white' : '#EEF9F2' }
                border={guest.special_request === 'None' ? 'none' : '1px solid ' }>
                {guest.special_request}
              </ViewNotesButton>
            </TableData>
            <TableData>
              <Paragraph>
              {guest.room_type}
              </Paragraph>
            </TableData>
            <TableData>
              <Button
                color={guest.status === '1'? 'red' : '#5AD07A'}
                bgcolor={guest.status === '1'? '#FFEDEC' : '#E8FFEE'}>
                {guest.Status}
                <p>{guest.status === "2" ? 'Booked' : 'Refund'}</p>
              </Button>
            </TableData>
          </TableRow> ))
      }
    </tbody>
   </Table>
  </TableContainer>}
    </>
  )
}

export default Bookings


