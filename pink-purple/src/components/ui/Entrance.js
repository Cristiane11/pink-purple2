import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import About from "./About";



const useStyles = makeStyles(theme=>({
  button:{
      ...theme.customButton.button,
      color:'white'
     
  
  }
}));
const handleClick = ()=>{
  
}
  function Entrance(){
    const classes = useStyles()
    return(
      <React.Fragment>
         <Button variant="contained" color="secondary"className={classes.button}>
        <p component={Link} to="./About" disableRipple onClick={About}>About Me</p>
        </Button>
       <div className={classes.customButton}/> 
      </React.Fragment>
    )
}
export default Entrance;
