import styled from "styled-components";


const Button = styled.button`
background-color: ${(props) => {
    return props.background;
  }};
  padding: 7px 19px;
  border:${(props) => {
    return props.borders;
  }};
  margin: 20px;
  color: ${(props) =>{
      return props.color
  }};
  
  font-weight: bold;
  border-radius: 5px;
  &:hover{
      cursor: pointer;
  }
  font-family: -apple-system,'Ubuntu',sans-serif;
`;

export { Button }