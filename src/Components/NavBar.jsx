import React,{ useContext, useState, } from 'react'
import styled from "styled-components";
import { BiMenuAltLeft } from 'react-icons/bi';
import { CiMail } from 'react-icons/ci';
import { BsBell } from 'react-icons/bs';
import {FiLogOut} from 'react-icons/fi';
import { useAuth } from '../Context/AuthProvider';
import {  useNavigate,useLocation } from 'react-router-dom'
/** */

const NavContainer = styled.div`
    transition: margin-left .5s;
    padding: 16px;
    width: 100%;
    margin-left: ${props=>props.margin};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 120px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #00000005;
    `

const TitleNav = styled.p`
    color: var(--unnamed-color-262626);
    font: normal normal 600 28px/42px Poppins;
    letter-spacing: 0px;
    color: #262626;
    font-family: 'Poppins', sans-serif;
`



const NavBar = ({openNav,measure}) => {

  const navigate = useNavigate()
  const auth = useAuth()
  const location = useLocation();
  const nameRoute = location.pathname
  let Title


  if (!auth.auth.isLogged) {
    return null;
  }
  if(nameRoute === '/dashboard'){
    Title ='Dashboard'
  }else if (nameRoute === '/rooms'){
    Title ='Rooms'
  }else if (nameRoute === '/users'){
    Title = 'Users'
  }else if (nameRoute === '/bookings'){
    Title ='Bookings'
  }else if( nameRoute === '/contact'){
    Title ='Contact'
  }


  const logOut =()=>{
    auth.logoutAuth()
    navigate('/login')
  }



  return (
    <>
      <NavContainer margin={measure ? "250px" : "0px"}>
        <BiMenuAltLeft  onClick={openNav}/>
        <TitleNav>{Title}</TitleNav>
        <CiMail></CiMail>
        <BsBell></BsBell>
        <FiLogOut onClick={logOut}></FiLogOut>
      </NavContainer>
    </>

  )
}

export default NavBar