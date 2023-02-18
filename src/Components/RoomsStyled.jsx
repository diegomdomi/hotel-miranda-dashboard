import styled from 'styled-components';

import React from 'react'

const RoomsStyled = () => {
  return (
    <>
        <TableContainer></TableContainer>
        <Table></Table>
        <TableHead></TableHead>
        <TableRow></TableRow>
        <TableData></TableData>
        <RowHeader></RowHeader>
        <Paragraph></Paragraph>
        <Span></Span>
        <ImgContainer></ImgContainer>
        <ImgContainer></ImgContainer>
        <ParagraphContainer></ParagraphContainer>
        <Button></Button>
    </>
  )
}

export default RoomsStyled

const TableContainer = styled.div`
  width:90%;
  margin: 0 auto;
  border-collapse: collapse;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  margin-top:127px;
  margin-left: 150px;
`
const Table = styled.table`
border-collapse: collapse;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 20px;

`

const TableHead = styled.td`
  padding:15px;
  color: var(--unnamed-color-393939);
  font: normal normal 600 18px/27px Poppins;
`
const TableRow = styled.tr`
    opacity: 1;
    border-top: 1px solid rgb(212, 212, 212);
    :hover {
      box-shadow: 0px 4px 30px #00000014;
    }
`

const TableData = styled.td`
  padding:25px;
  img{
  width:150px;
  height:70px
 }
`
const RowHeader = styled.tr`
  border-bottom: 1px solid #ccc;
`
const Paragraph = styled.p`
  max-width: 300px;
  font-weight: 500;
  color: rgb(57, 57, 57);
  font-family: var(--font-poppins)
`

const Span = styled.span`
  color: #799283;
`
const ImgContainer = styled.div`
display:flex;
align-items: center;
`
const ParagraphContainer = styled.div`
  text-align:initial;
  margin-right:80px;
`
const Button = styled.button`
  background: #5AD07A 0% 0% no-repeat padding-box;
  border-radius: 12px;
  border:none;
  background-color: rgb(90, 208, 122);
  color: white;
  padding: 13px 25px;
  border-radius: 12px;
  text-align: center;
  margin-left: 30px;
`