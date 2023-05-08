import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../Assets/avatar1.jpg';
import {HiPhone} from 'react-icons/hi'
import { useDispatch,useSelector } from 'react-redux';
import { fetchAllUsers } from '../Redux/userSlice.js';
import { Spinner } from './Spinner';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableData ,
  RowHeader,
  Paragraph,
  Span,
  ImgContainer,
  ParagraphContainer,
  HeaderContainer,
  ListTitleTopContainer,
  ListTitleTop,
  NewRoomButtonContainer,
  NewRoomButton
} from './UsersStyled'

const Users = ({measure}) => {
  const dispatch = useDispatch();
  const { list, status } = useSelector(state => state.usersSlice)
  useEffect(() => {
   dispatch(fetchAllUsers()) 
  }, [])
  

  return (
    <>
     {status === 'loading' ? <Spinner/> :
      <TableContainer margin={measure ? "200px" : "50px"}>
        <HeaderContainer>
          <ListTitleTopContainer>
            <ListTitleTop>All Employee</ListTitleTop>
            <ListTitleTop>Active Employee</ListTitleTop>
            <ListTitleTop>Inactive Employee</ListTitleTop>
          </ListTitleTopContainer>
          <NewRoomButtonContainer>
            <NewRoomButton bgColor={'#135846'}
              color={"white"}>+ New Employee</NewRoomButton>
            <NewRoomButton color={'#135846'}>Newest</NewRoomButton>
          </NewRoomButtonContainer>
        </HeaderContainer>
        <Table >
          <thead>
            <RowHeader>
              <TableHead>Name</TableHead>
              <TableHead>Job Desk</TableHead>
              <TableHead>Schedule</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
            </RowHeader>
          </thead>
          <tbody>
      {
        list.map((users) => 
        (<TableRow >
          <ImgContainer>
            <TableData>
                {/* <Link to={`/guest/${users.id}`} > */}
                  <img src={img} alt="img"/> 
                {/* </Link> */}
            </TableData>
              <ParagraphContainer>
                <Paragraph weight={'700'}>{users.Name}</Paragraph>
                <Span >#000123456</Span>
                <Span>Joined on Aug 2th 2017</Span>
              </ParagraphContainer>
              </ImgContainer> 
            <TableData>
              <Paragraph>{users.Job_Desk}</Paragraph>
            </TableData> 
            <TableData>
              <Paragraph>
                {users.Schedule}
              </Paragraph>
              <Span color={'#135846'}>Check Schedule</Span>
            </TableData> 
            <TableData>
              <Paragraph>
              <HiPhone style={{paddingRight:'15px'}}/>
              {users.Contact}
              </Paragraph>
            </TableData> 
            <TableData>
              <Paragraph color={users.Status === 'INACTIVE'? 'red' : '#5AD07A'}>
              {users.Status}
              </Paragraph>
            </TableData> 
        
          </TableRow> ))
      }
    </tbody>
  </Table>
  </TableContainer>}
    </>
  )
}

export default Users
