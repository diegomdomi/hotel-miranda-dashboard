import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import CardContact from './CardContact';
import { contactList } from '../TemplatesTable/contactList';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow, 
  TableData,
  RowHeader,
  Paragraph,
  ImgContainer,
  ParagraphContainer,
  Button,
  HeaderContainer,
  ListTitleTopContainer,
  ListTitleTop,
  NewRoomButtonContainer,
  NewRoomButton
} from './BookingsStyled'


const ContactCardsContainer = styled.div`
  display:flex;
  flex:wrap;
  margin-top: 40px;
  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 70px;
`

const Contact = () => {
  return (
    <>
      <TableContainer>
      <ContactCardsContainer>
        <CardContact/>
        <CardContact/>
        <CardContact/>
      </ContactCardsContainer>
        <HeaderContainer>
          <ListTitleTopContainer>
            <ListTitleTop>All Costumer Reviews</ListTitleTop>
            <ListTitleTop>Publised</ListTitleTop>
            <ListTitleTop>Archive</ListTitleTop>
          
          </ListTitleTopContainer>
          <NewRoomButtonContainer>
            <NewRoomButton color={'#135846'}>Newest</NewRoomButton>
          </NewRoomButtonContainer>
        </HeaderContainer>
        <Table >
          <thead>
            <RowHeader>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Comment</TableHead>
              <TableHead>Action</TableHead>
            </RowHeader>
          </thead>
          <tbody>
      { contactList.map((guest) =>
        (<TableRow key={guest.id}>
          <ImgContainer>
            <TableData >
            </TableData>
                <Paragraph>{guest.id}</Paragraph>
              </ImgContainer>
            <TableData>
              <Paragraph>{guest.date}</Paragraph>
            </TableData>
            <TableData>
              <Paragraph>
                {guest.customer}
              </Paragraph>
            </TableData>
            <TableData>
              <Paragraph>
                {guest.comment}
              </Paragraph>
            </TableData>
            <TableData>
              <Button
                color={'red'}
                bgcolor={'#E8FFEE'}>
                {guest.action}
              </Button>
            </TableData>
          </TableRow> ))
      }
    </tbody>
   </Table>
  </TableContainer>
    </>
  )
}

export default Contact