import React, {useState } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { BiBed } from 'react-icons/bi'
import {TbCalendarMinus} from 'react-icons/tb'
import {RiLoginBoxLine } from 'react-icons/ri'
import { SlLogout } from 'react-icons/sl'

import {
  MainDIvContainer,
  ChildDivContainer,
  ChildDivColor,
  DashboardParagraph,
  DashboardSpan,
  IconContainer
} from './DashboardStyles'

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