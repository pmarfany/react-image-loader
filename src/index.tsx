import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components/macro";
import theme from "./Theme/Theme";
import GlobalStyle from './style';
import {Provider} from "react-redux";
import {createStore} from "./Redux/store";
import ImagePicker from "./Components/ImagePicker";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={createStore()}>
      <GlobalStyle/>
      <ImagePicker />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);