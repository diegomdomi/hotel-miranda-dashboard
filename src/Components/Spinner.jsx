import styled from "styled-components";

export const Spinner = styled.div`
  border: 16px solid #2ed3ca4d;
  border-top: 16px #14b8ff solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 1s linear infinite;
  position: absolute; /* cambiamos de fixed a absolute */
  /* Ponemos el valor de left, bottom, right y top en 0 */
  left: 0;
  bottom: 0; 
  right: 0; 
  top: 0; 
  margin: auto; 

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

