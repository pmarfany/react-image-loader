import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components";
import theme from "./Theme/Theme";
import './index.css';
import App from './App/App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);