import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components";
import theme from "./Theme/Theme";
import './index.css';
import ImagePicker from "./Components/ImagePicker";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ImagePicker />
  </ThemeProvider>,
  document.getElementById('root')
);