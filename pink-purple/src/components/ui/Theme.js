import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';


    const lindoPurple ='#e1bee7'
    const lindoPink ='#f48fb1'

export default createMuiTheme({
    
    palette: {
        common:{
            purple:`${lindoPurple}`,
            pink:`${lindoPink}`
        },
        primary: {
            main: `${lindoPurple}`
        },
        secondary: {
            main:`${lindoPink}`
        }
      },
      typography:{
        tab:{
        fontFamily:"Playfair",
        textTransform:"none",
        fontWeight:800,
        fontSize:"2rem",
        color:"#590EED"
        }
      }
  });

