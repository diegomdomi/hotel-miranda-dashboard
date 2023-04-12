import React , { useState} from 'react';
import styled from "styled-components";
import Button from "./ButtonStyled";
import Input from "./Input";
import {  useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider';
import { ACTIONS_USER } from '../Context/actions';

const url = process.env.REACT_APP_URL

const sendForm = async (email,password) => {
  try{
    const requestOptions = {
      method: 'POST',
      mode: "cors",
      Accept: 'application/json',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "email": email , "password": password})
  };
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  return data
    }
    catch (err) {
      alert(`Sorry we have some problems with the form: ${err}`)
    }
}

function LoginUser() {

  const navigate = useNavigate()
  const auth = useAuth()
  const [email, setEmail] = useState("usuario1@1.com")
  const [password, setPassword] = useState("111")
  const [name, setName] = useState("usuario1")

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const {token} = await sendForm(email,password)
    auth.authDispatch({type:ACTIONS_USER.LOGIN , payload:{email,password,name, token}})
    navigate('/')
    }


  return (
    <form onSubmit={handleSubmit} style={{paddingTop:'50px'}}>
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <IntroParagraphContainer>
        <IntroParagraph>Just for testing - NAME: usuario1 - EMAIL: usuario1@1.com  PASSWORD:111 </IntroParagraph>
      </IntroParagraphContainer>
      <InputContainer>
        <Input type="name" placeholder="Name" name="name"  handleInputChange={(e)=>setName(e.target.value)} value={name}/>
        <Input type="text" placeholder="Email" name="email" handleInputChange={(e)=>setEmail(e.target.value)} value={email}/>
        <Input type="password" placeholder="Password" name="password"  handleInputChange={(e)=>setPassword(e.target.value)} value={password}/>
      </InputContainer>
      {/* <ButtonContainer> */}
        <Button content="Sign Up"  />
      {/* </ButtonContainer> */}
      <MainTitleContainer>
          <TitleContainer>H</TitleContainer>
          <MainTitle>Hotel Miranda</MainTitle>
        </MainTitleContainer>
    </MainContainer>
    </form>
  );
}

const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top:60px;
  padding-bottom:80px;
  align-items: center;
  flex-direction: column;
  ${'' /* height: 80vh; */}
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 0 0;
  color:#346f99d9;
`;
const IntroParagraph = styled.p`
  color: #000000;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: none;
  font-weight: 600
`
const IntroParagraphContainer = styled.div`
padding: 20px 10px 50px 10px;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
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
    color:black;
    font-weight: 800;
    font-size:25px;
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
    padding-top: 25px;
    padding-left: 15px;
`

export default LoginUser;