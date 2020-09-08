import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
    const lindoPurple ='#e1bee7'
    const lindoPink ='#f48fb1'

const theme = createMuiTheme({
    
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
        },
      },
      
  customButton:{
      button:{
        color:'white',
        fontFamily:"Sacramento",
        backgroundColor:"#590EED",
        marginLeft:'50px',
        marginTop:'15px',
        fontSize:"1.5rem",
        fontWeight:200,
        textTransform:"none",
        height:"45px"
      }
    } 
  });
  export default theme;

