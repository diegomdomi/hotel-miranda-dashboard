import React,{ useContext, useReducer} from 'react'
import styled from "styled-components";
import { BiMenuAltLeft } from 'react-icons/bi';
import { CiMail } from 'react-icons/ci';
import { BsBell } from 'react-icons/bs';
import {FiLogOut} from 'react-icons/fi';
import Context from '../Context/index';
import {  useNavigate } from 'react-router-dom'



const InputContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 120px;
    width: 100%;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #00000005;
    opacity: 1;
    `

const Title = styled.p`
    color: var(--unnamed-color-262626);
    font: normal normal 600 28px/42px Poppins;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
    font-family: 'Poppins', sans-serif;
`



const NavBar = () => {
  const navigate = useNavigate()
  const context = useContext(Context);

const logOut =()=>{
  context.users.isLogged = false;
  navigate('/')
}

  return (
    <>
    <InputContainer>
        <BiMenuAltLeft/>
        <Title>Dashboard</Title>
        <CiMail></CiMail>
        <BsBell></BsBell>
        <FiLogOut onClick={logOut}></FiLogOut>
    </InputContainer>
    </>

  )
}

export default NavBar