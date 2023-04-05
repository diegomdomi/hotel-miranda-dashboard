import styled from 'styled-components';

const MainDIvContainer = styled.div`
 display:flex;
 margin-left:450px;
`
const ChildDivContainer = styled.div`
display:flex;
  width: 340px;
  height: 125px;
  margin-right:40px;
  margin-top: 50px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
`

const ChildDivColor = styled.div`
  background-color: ${props=> props.bgcolor};
  margin:29px 22px 0 30px;
  width: 65px;
  height: 65px;
  border-radius: 8px;
  opacity: 1;
`
const DashboardParagraph = styled.p`
  margin:0px;
  padding-top:29px;
  text-align: left;
  font: normal normal 600 30px Poppins;
  color: #393939;
`
const DashboardSpan = styled.p`
  margin:0px;
  color: #787878;
  font-size: 14px;
`
const IconContainer = styled.div`
  color:${props=>props.color};
  margin-top:15px;
`

export {
    MainDIvContainer,
    ChildDivContainer,
    ChildDivColor,
    DashboardParagraph,
    DashboardSpan,
    IconContainer
}