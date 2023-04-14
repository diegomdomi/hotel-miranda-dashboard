import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {HiPhone} from 'react-icons/hi'
import { useDispatch,useSelector } from 'react-redux';
import { fetchAllUsers } from '../Redux/userSlice.js';
import { deleteUser } from '../Redux/userSlice.js';
import { Spinner } from './Spinner';
import { BsTrash} from 'react-icons/bs';

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

const Users = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector(state => state.usersSlice)

  useEffect(() => {
    if(list && list.length === 0) {
      dispatch(fetchAllUsers()) 
    }
  }, [dispatch,status])
  
  const handleClickDelete = (id) => {
    dispatch(deleteUser(id))
  }
  return (
    <>
     {status === 'loading' ? <Spinner/> :
      <TableContainer>
        <HeaderContainer>
          <ListTitleTopContainer>
            <ListTitleTop>All Employee</ListTitleTop>
            <ListTitleTop>Active Employee</ListTitleTop>
            <ListTitleTop>Inactive Employee</ListTitleTop>
          </ListTitleTopContainer>
          <NewRoomButtonContainer>
          <Link to={'/form'}> 
            <NewRoomButton 
              bgColor={'#135846'}
              color={"white"}>
              + New Employee
            </NewRoomButton>
            </Link>
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
                <Link to={`/guest/${users.id}`} >
                  <img src={users.img} alt="img"/> 
                </Link>
            </TableData>
              <ParagraphContainer>
                <Paragraph weight={'700'}>{users.first_name}</Paragraph>
                <Span >#000123456</Span>
                <Span>Joined on Aug 2th 2017</Span>
              </ParagraphContainer>
              </ImgContainer> 
            <TableData>
              <Paragraph>{users.job_desk}</Paragraph>
            </TableData> 
            <TableData>
              <Paragraph>
                {users.schedules}
              </Paragraph>
              <Span color={'#135846'}>Check Schedule</Span>
            </TableData> 
            <TableData>
              <Paragraph>
              <HiPhone style={{paddingRight:'15px'}}/>
              {users.contact}
              </Paragraph>
            </TableData> 
            <TableData>
              <Paragraph color={users.status === 'INACTIVE'? 'red' : '#5AD07A'}>
              {users.status}
              </Paragraph>
            </TableData> 
            <TableData>
              <BsTrash style={{cursor:"pointer"}} color={'red'} size={25} onClick={()=>handleClickDelete(users.id)}/>
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
