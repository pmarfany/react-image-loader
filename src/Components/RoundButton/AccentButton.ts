import styled from "styled-components/macro";
import BaseButton from "./BaseButton";

const AccentButton = styled(BaseButton)`
  background-color: ${({theme}) => theme.colors.accent};
  color: ${({theme}) => theme.colors.white};
  
  :hover {
    background-color: ${({theme}) => theme.colors.accentLight};
  }
`;

export default AccentButton;
