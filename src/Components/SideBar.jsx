import React from 'react';
import styled from "styled-components";
import { RiDashboardLine } from 'react-icons/ri';
import { BiKey } from 'react-icons/bi';
import { TbCalendarMinus } from 'react-icons/tb';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillContacts } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom'

 

const LateralMenu = styled.div`
    height: 100%;
    width: ${(props) => props.display};
    position: fixed;
    ${'' /* z-index: 1; */}
    top: 0;
    left: 0;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 13px 3px 40px #00000005;
    overflow-x: hidden;
    transition: 0.5s;
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
    :hover{
    margin-right: 15px;
    border-left: 8px solid red;
    border-radius: 0px 8px 8px 0px;

    }

`

const DragDiv = styled.div`
    width: 60px;
    height: 60px;
    background: var(--unnamed-color-c5c5c5) 0% 0% no-repeat padding-box;
    background: #C5C5C5 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    margin:0 auto;
    margin-top:60px;
    position: relative;
    bottom: 20px;
    background-image: url()
    
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
    font-size:25px;
    font-weight:800;
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
const DivAvatar = styled.div`
    width: 233px;
    height: 189px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    opacity: 1;
    margin:0 auto;
`
const UserName = styled.p`
    color: var(--unnamed-color-393939);
    text-align: center;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #393939;
`
const UserEmail = styled.p`
    text-align: center;
    font: normal normal 300 12px/18px Poppins;
    letter-spacing: 0px;
    color: #B2B2B2;
`
const LastTitle = styled.p`
    margin-top:60px;
    font: normal normal 600 16px/25px Poppins;
    color: #212121;
`
const AllRigths = styled.p`
    font: normal normal 300 14px/21px Poppins;
    color: #799283;
    margin-top: ${props => props.margin}px;
`
const SideBar = ({measure}) => {

    console.log(measure);

  return (
    <LateralMenu 
        display={measure ? "340px" : "0px"}
        right={measure ? '0px' : '500px'}
        Height={measure ? "100%" : 0}>
        <ul >
        <MainTitleContainer>
          <TitleContainer>H</TitleContainer>
          <MainTitle>Hotel Miranda</MainTitle>
        </MainTitleContainer>
        <Link to="/dashboard" style={{textDecoration:'none'}}>
            <ElementsDiv>
                <RiDashboardLine/>
                <ListItems>Dashboard</ListItems>            
            </ElementsDiv>
        </Link>
        <Link to="/bookings" style={{textDecoration:'none'}}>
            <ElementsDiv>
                <TbCalendarMinus/>
                <ListItems>Bookings</ListItems>            
            </ElementsDiv>
        </Link>
        <Link to="/rooms" style={{textDecoration:'none'}}>
            <ElementsDiv>
                <BiKey/>
            <ListItems>Rooms</ListItems>            
            </ElementsDiv>
        </Link>
        <Link to="/users" style={{textDecoration:'none'}}>
            <ElementsDiv>
                <FaUserAlt/>
                <ListItems>Users</ListItems>            
            </ElementsDiv>
        </Link>
        <Link to="/contact" style={{textDecoration:'none'}}>
            <ElementsDiv>
                <AiFillContacts/>
                <ListItems>Contact</ListItems>            
            </ElementsDiv>
        </Link>   
        </ul>
        <DivAvatar>
            <DragDiv/>
            <UserName>Diego Dominguez</UserName> 
            <UserEmail>usuario1@gmail.com</UserEmail>
        </DivAvatar>
            <LastTitle>Hotel Miranda Admin Dashboard</LastTitle>
            <AllRigths>©2020 All Rights Reserved</AllRigths>
            <AllRigths margin={60}>Made with <AiFillHeart/> by DiegoDo</AllRigths>
    </LateralMenu>
  )
}

export default SideBar