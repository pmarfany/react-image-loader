import React from 'react';
import styled from "styled-components/macro";
import GrayButton from "../UI/Button/GrayButton";
import AccentButton from "../UI/Button/AccentButton";

const StyledContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  text-align: center;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.darkGray};
`;

const App: React.FunctionComponent = () => (
  <StyledContainer>
    <GrayButton round>Sa</GrayButton>
    <AccentButton round>Sa</AccentButton>
  </StyledContainer>
);

// Size: 45px;
// Icon: 12px
// Accent: #2a5298

export default App;
