import React from 'react';
import styled from "styled-components";
import { RiDashboardLine } from 'react-icons/ri';
import { BiKey } from 'react-icons/bi';
import { TbCalendarMinus } from 'react-icons/tb';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillContacts } from 'react-icons/ai';


const LateralMenu = styled.div`
width: 345px;
height: 1812px;
background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 13px 3px 40px #00000005;
opacity: 1;
    `;

const ListItems = styled.li`
    width: 70%;
    display: flex;
    height: 70px;
    border-radius: 6px;
    -webkit-box-align: center;
    align-items: center;
    gap: 20px;
    transition: all 0.2s ease 0s;
    text-align: left;
    font: normal normal normal 18px/27px Poppins;
    letter-spacing: 0px;
    color: #799283;
    opacity: 1;
    list-style: none;

` 

const ElementsDiv = styled.div`
display:flex;
align-items: center;
justify-content: space-around;
:first-child {
    color: rgb(121, 146, 131);
 
}
`
const DragDiv = styled.div`
    width: 60px;
    height: 60px;
    background: var(--unnamed-color-c5c5c5) 0% 0% no-repeat padding-box;
    background: #C5C5C5 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    
`
const MainTitle = styled.h1`
    width:20%;
    color: var(--unnamed-color-262626);
    font: normal normal 600 28px/42px Poppins;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
    font-family: 'Poppins', sans-serif;

`
const TitleContainer = styled.div`
    overflow: hidden;
    width: 80px;
    height: 80px;
    box-shadow: rgb(139 139 139 / 25%) 0px 14px 24px 0px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`
const MainTitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

const Menu = () => {
  return (
    <LateralMenu>
        <ul>
        <MainTitleContainer>
          <TitleContainer>H</TitleContainer>
          <MainTitle>Hotel Miranda</MainTitle>
      </MainTitleContainer>
        <ElementsDiv>
            <RiDashboardLine/>
            <ListItems>Dashboard</ListItems>            
        </ElementsDiv>
        <ElementsDiv>
            <TbCalendarMinus/>
            <ListItems>Bookings</ListItems>            
        </ElementsDiv>
        <ElementsDiv>
            <BiKey/>
          <ListItems>Rooms</ListItems>            
        </ElementsDiv>
        <ElementsDiv>
            <FaUserAlt/>
            <ListItems>Users</ListItems>            
        </ElementsDiv>
        <ElementsDiv>
            <AiFillContacts/>
            <ListItems>Contact</ListItems>            
        </ElementsDiv>
        </ul>
        <DragDiv></DragDiv>

    </LateralMenu>
  )
}

export default Menu