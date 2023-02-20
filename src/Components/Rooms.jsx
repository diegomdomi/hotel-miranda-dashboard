import React from 'react';
import { Link } from 'react-router-dom';
import  {roomsList}  from '../TemplatesTable/roomsList.js';
import img from '../Assets/room4.jpg';

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

// const TableContainer = styled.div`
//   width:90%;
//   margin: 0 auto;
//   border-collapse: collapse;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   align-content: space-around;
//   ${'' /* align-items: center; */}
//   margin-top:127px;
//   margin-left: 150px;
//   padding-bottom: 150px;
// `
// const Table = styled.table`
// border-collapse: collapse;
// background: #FFFFFF 0% 0% no-repeat padding-box;
// border-radius: 20px;

// `

// const TableHead = styled.td`
//   padding:15px;
//   color: var(--unnamed-color-393939);
//   font: normal normal 600 18px/27px Poppins;
// `
// const TableRow = styled.tr`
//     opacity: 1;
//     border-top: 1px solid rgb(212, 212, 212);
//     :hover {
//       box-shadow: 0px 4px 30px #00000014;
//     }
// `

// const TableData = styled.td`
//   padding:25px;
//   img{
//   width:150px;
//   height:70px;
//   border-radius: 8px;
//  }
// `
// const RowHeader = styled.tr`
//   border-bottom: 1px solid #ccc;
// `
// const Paragraph = styled.p`
//   max-width: 300px;
//   font-weight: 500;
//   color: rgb(57, 57, 57);
//   font-family: var(--font-poppins)
// `

// const Span = styled.span`
//   color: #799283;
// `
// const ImgContainer = styled.div`
// display:flex;
// align-items: center;
// `
// const ParagraphContainer = styled.div`  
//   display:flex;
//   flex-direction: column;
//   text-align:initial;
//   margin-right:80px;
// `
// const Button = styled.button`
//   background: #5AD07A 0% 0% no-repeat padding-box;
//   border-radius: 12px;
//   border:none;
//   background-color: rgb(90, 208, 122);
//   color: white;
//   padding: 13px 25px;
//   border-radius: 12px;
//   text-align: center;
//   margin-left: 30px;
// `
// /** Button Header **/
// const HeaderContainer = styled.div`
//   display:flex;
//   justify-content: space-between
// `
// const ListTitleTopContainer = styled.div`
//   display: flex;
//   width:60%;
//   margin-bottom: 50px;
// `
// const ListTitleTop = styled.p`
//   color: rgb(110, 110, 110);
//   font-weight: 500;
//   padding: 12px 30px;
//   border-bottom: 1px solid rgb(212, 212, 212);
//   :hover{
//     color: #135846;
//     font-weight: 700;
//     cursor: pointer;
//     border-bottom: 2px solid #135846;
//   }
// `

// const NewRoomButtonContainer = styled.div`
//   display: flex;
// `
// const NewRoomButton = styled.button`
//   border-radius: 12px;
//   margin-left:20px;
//   background-color: ${props => props.bgColor};
//   width: ;
//   height:49px;
//   color:${props => props.color};
//   font-family:Poppins;
//   padding: 13px 23px;
//   border:none;
// `
const Rooms = () => {

  const guest = roomsList
  return (
    <>
      <TableContainer>
        <HeaderContainer>
          <ListTitleTopContainer>
            <ListTitleTop>All Rooms</ListTitleTop>
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
        guest.map((room) => 
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
          </TableRow> ))
      }
    </tbody>
  </Table>
  </TableContainer>
    </>
  )
}

export default Rooms
