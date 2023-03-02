import styled from "styled-components";

// export default function ButtonStyled({ content,handleClick }) {


//   return <StyledButton >Sign up</StyledButton>;
// }

const ButtonStyled = styled.button`
  margin-top:105px;
  ${'' /* background: linear-gradient(to right, #14163c 0%, #03217b 79%); */}
  background:${props => props.background};
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 65%;
  padding:20px 0 20px 0;
  border: none;
  color:${props => props.color};
  border-radius: 50px;
  cursor: pointer;
`;
export default ButtonStyled