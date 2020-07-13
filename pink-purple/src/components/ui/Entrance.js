import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
  button:{
      ...theme.customButton.button,
      color:'white',
      
  }
}));

  function Entrance(){
    const classes = useStyles()
    return(
      <React.Fragment>
         <Button variant="contained" color="secondary"className={classes.button}>
        About Me
        </Button>
       <div className={classes.customButton}/> 
      </React.Fragment>
    )
}
export default Entrance;
