// import React,{useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchAllBookings } from '../Redux/bookingsSlice.js';
// import { Spinner } from './Spinner';
// import img from '../Assets/avatar1.jpg';
// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow, 
//   TableData,
//   RowHeader,
//   Paragraph,
//   Span,
//   ImgContainer,
//   ParagraphContainer,
//   Button,
//   ViewNotesButton,
//   HeaderContainer,
//   ListTitleTopContainer,
//   ListTitleTop,
//   NewRoomButtonContainer,
//   NewRoomButton
// } from './BookingsStyled'
// const Bookings = () : JSX.Element => {

//   const { list,status } = useSelector(state=>state.bookingsSlice)
//   const dispatch = useDispatch();

//     useEffect(() => {
//       dispatch(fetchAllBookings())
//     }, [])

 
//   return (
//     <>
//       { status === 'loading' ? <Spinner/> 
//       :
//       <TableContainer>
//         <HeaderContainer>
//           <ListTitleTopContainer>
//             <ListTitleTop>All Guest</ListTitleTop>
//             <ListTitleTop>Pending</ListTitleTop>
//             <ListTitleTop>Booked</ListTitleTop>
//             <ListTitleTop>Canceled</ListTitleTop>
//             <ListTitleTop>Refund</ListTitleTop>
//           </ListTitleTopContainer>
//           <NewRoomButtonContainer>
//             <NewRoomButton bgColor={'#135846'}
//               color={"white"}>1 November - 30 November 2020</NewRoomButton>
//             <NewRoomButton color={'#135846'}>Newest</NewRoomButton>
//           </NewRoomButtonContainer>
//         </HeaderContainer>
//         <Table >
//           <thead>
//             <RowHeader>
//               <TableHead>Guest</TableHead>
//               <TableHead>Order Date</TableHead>
//               <TableHead>Check In</TableHead>
//               <TableHead>Ckeck out</TableHead>
//               <TableHead>Special Request</TableHead>
//               <TableHead>Room Type</TableHead>
//               <TableHead>Status</TableHead>
//             </RowHeader>
//           </thead>
//           <tbody>
//       { list.map((guest) =>
//         (<TableRow key={guest.id}>
//           <ImgContainer>
//             <TableData >
//                 <Link to={`/bookings/${guest.id}`} >
//                   <img src={guest.img} alt="img"/>
//                 </Link>
//             </TableData>
//               <ParagraphContainer>
//                 <Paragraph>{guest.Guest}</Paragraph>
//                 <Span color={'#799283'}>#000123456</Span>
//               </ParagraphContainer>
//               </ImgContainer>
//             <TableData>
//               <Paragraph>{guest.Order_Date}</Paragraph>
//             </TableData>
//             <TableData>
//               <Paragraph>
//                 {guest.Check_in}
//               </Paragraph>
//                 <Span>9:46 PM</Span>
//             </TableData>
//             <TableData>
//               <Paragraph>
//               {guest.Check_out}
//               </Paragraph>
//               <Span>6:12 PM</Span>
//             </TableData>
//             <TableData>
//               <ViewNotesButton
//                 color={guest.Status === 'Refund' ? '#212121' : '#799283'}
//                 bgcolor={guest.Status === 'Refund'? '#EEF9F2' : 'white'}
//                 border={guest.Status === 'Booked' ? '1px solid ' : 'none'}>
//                 {guest.Special_Request}
//               </ViewNotesButton>
//             </TableData>
//             <TableData>
//               <Paragraph>
//               {guest.Room_type}
//               </Paragraph>
//             </TableData>
//             <TableData>
//               <Button
//                 color={guest.Status === 'Refund'? 'red' : '#5AD07A'}
//                 bgcolor={guest.Status === 'Refund'? '#FFEDEC' : '#E8FFEE'}>
//                 {guest.Status}
//               </Button>
//             </TableData>
//           </TableRow> ))
//       }
//     </tbody>
//    </Table>
//   </TableContainer>}
//     </>
//   )
// }

// export default Bookings


