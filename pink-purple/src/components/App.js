import React from 'react';
import Header from './ui/Header';
import {ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import Entrance from './ui/Entrance';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Entrance/>
      Hello

    </ThemeProvider>
  );
}

export default App;
