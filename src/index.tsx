import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components/macro";
import theme from "./Theme/Theme";
import {Provider} from "react-redux";
import {createStore} from "./Redux/store";
import App from "./Components/App";
import GlobalStyle from './Components/App/style';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={createStore()}>
      <GlobalStyle/>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);