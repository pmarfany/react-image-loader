import styled from "styled-components/macro";
import BaseButton from "./BaseButton";

const GrayButton = styled(BaseButton)`
  background-color: ${({theme}) => theme.colors.blackAlpha3};
  color: ${({theme}) => theme.colors.white};
  
  :hover {
    background-color: ${({theme}) => theme.colors.blackAlpha2};
  }
`;

export default GrayButton;
