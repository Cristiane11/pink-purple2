import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../../assets/logo.png';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from "react-router-dom";




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
        marginBottom:'3em'
    },
    logo:{
      height:"7em"  
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
         setValue(value)
     }
    return(
        <React.Fragment>
        <ElevationScroll color='primary'>
            <AppBar position='fixed'>
                <Toolbar disableGutters>
                <img alt='my logo'className={classes.logo} src={logo}/>
                <Tabs value={value} onChange={handleChange} indicatorColor='secondary' className={classes.tabContainer}>
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