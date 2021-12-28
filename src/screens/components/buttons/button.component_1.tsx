import styled, {css} from "styled-components";

const Button = styled.a<any>`
  
  
  text-align: center;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: #E31A13;
  color: white;
  border: 2px solid white;
  border-radius: 6px;
  opacity: 1;
  cursor: pointer;

${props => props.primary && css`
    value: "Entrar";
    background: #E31A13;
    color: white;
    border-radius: 5px;
    opacity: 1;
    

    &:hover {
      background: #C9211B 0% 0% no-repeat padding-box;
      border-radius: 5px;
      opacity: 1;
    }
`}

${props => props.secondary && css`
    value: "Sair";
    background: #000000;
    color: white;
    border-radius: 5px;
    opacity: 1;

    &:hover {
      background: #555555 0% 0% no-repeat padding-box;
      border-radius: 5px;
      opacity: 1;
`}


`

  export default Button;