import React, {useState } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import styled from 'styled-components';
import { BiBed } from 'react-icons/bi'
import {TbCalendarMinus} from 'react-icons/tb'
import {RiLoginBoxLine } from 'react-icons/ri'
import { SlLogout } from 'react-icons/sl'

const MainDIvContainer = styled.div`
 min-height:100vh;
 display:flex;
 margin-left:350px;
`
const ChildDivContainer = styled.div`
display:flex;
  width: 340px;
  height: 125px;
  margin-right:40px;
  margin-top: 50px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
`

const ChildDivColor = styled.div`
  background-color: ${props=> props.bgcolor};
  margin:29px 22px 0 30px;
  width: 65px;
  height: 65px;
  border-radius: 8px;
  opacity: 1;
`
const DashboardParagraph = styled.p`
  margin:0px;
  padding-top:29px;
  text-align: left;
  font: normal normal 600 30px Poppins;
  color: #393939;
`
const DashboardSpan = styled.p`
  margin:0px;
  color: #787878;
  font-size: 14px;
`
const IconContainer = styled.div`
  color:${props=>props.color};
  margin-top:15px;
`

const Dashboard = () => {

  return (
    <>
    <MainDIvContainer>
      <ChildDivContainer>
        <ChildDivColor bgcolor={'#FFEDEC'}>
        <IconContainer>
          <BiBed  fontSize={'xx-large'} color={'#E23428'} />
        </IconContainer>
        </ChildDivColor>
        <DashboardParagraph>
         8,461 
        <DashboardSpan>
          New Booking
        </DashboardSpan>
        </DashboardParagraph>
      </ChildDivContainer>
      <ChildDivContainer>
        <ChildDivColor bgcolor={'#E23428'}>
        <IconContainer>
          <TbCalendarMinus fontSize={'xx-large'} color={'#FFFFFF'}/>
        </IconContainer>
        </ChildDivColor>
          <DashboardParagraph>
          963
        <DashboardSpan>
          Scheduled Room
        </DashboardSpan>
        </DashboardParagraph>
      </ChildDivContainer>
      <ChildDivContainer>
        <ChildDivColor bgcolor={'#FFEDEC'}>
        <IconContainer >
          <RiLoginBoxLine fontSize={'xx-large'} color={'#E23428'}/>
        </IconContainer>
       </ChildDivColor> 
        <DashboardParagraph>
          753
          <DashboardSpan>
          Check in
        </DashboardSpan>
        </DashboardParagraph>
      </ChildDivContainer>
      <ChildDivContainer>
        <ChildDivColor bgcolor={'#FFEDEC'}>
        <IconContainer>
          <SlLogout fontSize={'xx-large'} color={'#E23428'}/>       
        </IconContainer>
        </ChildDivColor>
        <DashboardParagraph>
          516
        <DashboardSpan>
        Check out
        </DashboardSpan>
        </DashboardParagraph>
      </ChildDivContainer>
    </MainDIvContainer>
    </>
    )
}

export default Dashboard