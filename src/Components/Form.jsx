import React, { useState } from 'react'
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/userSlice';
import {  useNavigate,Link } from 'react-router-dom';


export const Form = () => {
    const [inputs, setInputs] = useState({first_name:'', job_desk:'', schedules:'', contact:'', status:''});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(prev => ({...prev, [name]: value}))
    };
    
    const submitNewUser = (event) =>{
        event.preventDefault()
        dispatch(addUser(inputs))
        const name = event.target.name;
        const value = "";
        setInputs(prev => ({...prev, [name]: value}))
        event.target.reset();
    };

  return (
    <Styles>
        <form onSubmit={submitNewUser}>
            <label>Name</label>
            <input name="first_name" value={inputs.first_name} onChange={handleInputChange}/>
            <label>Job Desk</label>
            <input name="job_desk" value={inputs.job_desk} onChange={handleInputChange}/>
            <label>Schedule</label>
            <input name="schedules" value={inputs.schedules} onChange={handleInputChange}/>
            <label>Contact</label>
            <input name="contact" value={inputs.contact} onChange={handleInputChange}/>
            <label>Status</label>
            <select name="status" onChange={handleInputChange}>
              <option value={"INACTIVE"} selected></option>
              <option value={"ACTIVE"}>ACTIVE</option>
              <option value={"INACTIVE"} >INACTIVE</option>
            </select>
            <Link to="/users">
              <input type="submit" className="submitButton" />
            </Link>
        </form>
    </Styles> 
  )
}


const Styles = styled.div`
 padding: 20px;
 margin-top: 150px;
 margin-bottom: 150px;
 h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 input, select{

   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin-top: 25px;
   margin-bottom: 5px;
 }

 .error {
   color: red;
   font-family: sans-serif;
   font-size: 12px;
   height: 30px;
 }

 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
 }
`