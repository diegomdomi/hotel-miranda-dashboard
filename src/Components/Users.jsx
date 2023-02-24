import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../Assets/avatar1.jpg';
import {HiPhone} from 'react-icons/hi'
import { useDispatch,useSelector } from 'react-redux';
import { fetchAllUsers } from '../Redux/userSlice.js';

const TableContainer = styled.div`
  width:90%;
  margin: 0 auto;
  border-collapse: collapse;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
  ${'' /* align-items: center; */}
  margin-top:127px;
  margin-left: 150px;
  padding-bottom: 150px;
`
const Table = styled.table`
border-collapse: collapse;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 20px;

`

const TableHead = styled.td`
  padding:15px;
  color: var(--unnamed-color-393939);
  font: normal normal 600 18px/27px Poppins;
`
const TableRow = styled.tr`
    opacity: 1;
    border-top: 1px solid rgb(212, 212, 212);
    :hover {
      box-shadow: 0px 4px 30px #00000014;
    }
`

const TableData = styled.td`
  padding:25px;
  img{
  width:88px;
  height:88px;
  border-radius: 12px;
 }
`
const RowHeader = styled.tr`
  border-bottom: 1px solid #ccc;
`
const Paragraph = styled.p`
  max-width: 300px;
  font-weight:${props => props.weight};
  color: ${props => props.color || '#393939'};
  font-family: var(--font-poppins)
`

const Span = styled.span`
  color:${props=>props.color};
  padding-bottom:10px;
`
const ImgContainer = styled.div`
display:flex;
align-items: center;
`
const ParagraphContainer = styled.div`
display:flex;
flex-direction: column;
  text-align:initial;
  margin-right:80px;
`

/** Button Header **/
const HeaderContainer = styled.div`
  display:flex;
  justify-content: space-between
`
const ListTitleTopContainer = styled.div`
  display: flex;
  width:60%;
  margin-bottom: 50px;
`
const ListTitleTop = styled.p`
  color: rgb(110, 110, 110);
  font-weight: 500;
  padding: 12px 30px;
  border-bottom: 1px solid rgb(212, 212, 212);
  :hover{
    color: #135846;
    font-weight: 700;
    cursor: pointer;
    border-bottom: 2px solid #135846;
  }
`

const NewRoomButtonContainer = styled.div`
  display: flex;
`
const NewRoomButton = styled.button`
  border-radius: 12px;
  margin-left:20px;
  background-color: ${props => props.bgColor};
  width: ;
  height:49px;
  color:${props => props.color};
  font-family:Poppins;
  padding: 13px 23px;
  border:none;
`
const Users = () => {
  const dispatch = useDispatch();
  const usersStore = useSelector(state => state.usersSlice.list)
  useEffect(() => {
   dispatch(fetchAllUsers()) 
  }, [])
  

  return (
    <>
      <TableContainer>
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
        usersStore.map((users) => 
        (<TableRow >
          <ImgContainer>
            <TableData>
                <Link to={`/guest/${users.id}`} >
                  <img src={img} alt="img"/> 
                </Link>
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
  </TableContainer>
    </>
  )
}

export default Users
