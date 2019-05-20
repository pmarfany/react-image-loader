import styled from "styled-components/macro";
import BaseButton from "./BaseButton";

const GrayButton = styled(BaseButton)`
  background-color: ${({theme}) => theme.colors.overlayBlack};
  color: ${({theme}) => theme.colors.white};
`;

export default GrayButton;
