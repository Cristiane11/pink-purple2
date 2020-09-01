import React from 'react';
import Header from './ui/Header';
import {ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import Entrance from './ui/Entrance';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
           <Header/>
           <Switch>
             <Route exact path="/"component={()=><div>Home</div>}/>
             <Route exact path="/About"component={()=><div>About</div>}/>
             <Route exact path="/Contact"component={()=><div>Contact Us</div>}/>
             <Route exact path="/Portfolio"component={()=><div>Portfolio</div>}/>
           </Switch>
      </BrowserRouter>
      <Entrance/>
      

    </ThemeProvider>
  );
}

export default App;
