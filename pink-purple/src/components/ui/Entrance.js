import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
  button:{
      ...theme.mixins.button,
      color:'white',
      fontFamily:"Playfair",
      backgroundColor:"#590EED"
  }
}));



  function Entrance(){
    const classes = useStyles()
    return(
       <div>
         <Button variant="contained" color="secondary"className={classes.button}>
        About Me
        </Button>
       </div> 
    )
}
export default Entrance;
