import React from 'react'
import styled from "styled-components";

const Styles = styled.div`
 padding: 20px;
 margin-top: 150px;
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

 input {

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

export const Form = () => {
  return (
    <Styles>
        <form >
            <label>Name</label>
            <input name="name" />
            <label>Job Desk</label>
            <input name="jobDesk"  />
            <label>Schedule</label>
            <input name="schedule"  />
            <label>Contact</label>
            <input name="contact" />
            <label>Status</label>
            <input name="status" />
            <input type="submit" className="submitButton" />
        </form>
    </Styles> 
  )
}
