import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../../assets/logo.png';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';




function ElevationScroll(props) {
    const { children} = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
 
  const useStyles = makeStyles(theme=>({
    toolbarMargin:{
        ...theme.mixins.toolbar,
        marginBottom:'4em'
    },
    logo:{
      height:"9em"  
    },
    logoContainer:{
        padding:0,
        "&:hover":{
            backgroundColor:"transparent"
        }
    },
    tabContainer:{
        marginLeft:'auto'
    },
    tab:{
        ...theme.typography.tab,
        minWidth:10,
        marginLeft:"25px"
    }
}));

 function Header(props){
     const classes = useStyles();
     const[value,setValue] = useState(0);
      
     const handleChange = (e,value)=>{
         setValue(value);
     }
     useEffect(()=>{
        if(window.location.pathname==='/'&& value !==0){
            setValue(0)
          }else if (window.location.pathname==='/About'&& value !==1){
            setValue(1)
          }else if (window.location.pathname==='/Contact'&& value !==2){
            setValue(2)
          }else if (window.location.pathname==='/Portfolio'&& value !==3){
            setValue(3);
          }  
     },[value]);
    return(
        <React.Fragment>
        <ElevationScroll color='primary'>
            <AppBar position='fixed'>
                <Toolbar disableGutters>
                <Button component={Link} to="/"disableRipple onClick={()=>setValue(0)}className={classes.logoContainer}>
                <img alt='my logo'className={classes.logo} src={logo}/>
                </Button>
                <Tabs value={value} onChange={handleChange} indicatorColor='primary' className={classes.tabContainer}>
                    <Tab className={classes.tab} component={Link} to="/" label="Home"/>
                    <Tab className={classes.tab} component={Link} to="/About" label="About"/>
                    <Tab className={classes.tab} component={Link} to="/Contact" label="Contact"/>
                    <Tab className={classes.tab} component={Link} to="/Portfolio" label="Portfolio"/>
                    <Tab className={classes.tab} component={Link} to="" icon={<PhoneIcon />}/>
   
                </Tabs>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </React.Fragment>
    );

}
export default Header;