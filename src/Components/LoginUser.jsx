import React , {useContext, useState} from 'react';
import Context from '../Context/index';
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import {  useNavigate } from 'react-router-dom'



function LoginUser() {
  const context = useContext(Context)
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleInputChange = (e) =>{
    if(e.target.name === "email"){
      const email = e.target.value
      setEmail(email.trim().toLowerCase())
  }
  if(e.target.name === "password"){
    const pass = e.target.value
    setPassword(pass.trim())
}
}

  const handleClick = () => {
    context.addUsers({email:email, password:password})
    localStorage.setItem('users', JSON.stringify({email,password}))
    if(email !== '' && password !== ''){
       navigate( "/dashboard" )
    }else{
      alert("you must login")
    }
  }

  return (
    <form >
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" name="email" handleInputChange={handleInputChange}/>
        <Input type="password" placeholder="Password" name="password" handleInputChange={handleInputChange}/>
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up" handleClick={handleClick} />
      </ButtonContainer>
    </MainContainer>
    </form>
  );
}

const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top:60px;
  align-items: center;
  flex-direction: column;
  height: 80vh;
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
  margin: 3rem 0 2rem 0;
  color:blue;
`;

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


export default LoginUser;