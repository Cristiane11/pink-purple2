import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../../assets/logo.png';
import PhoneIcon from '@material-ui/icons/Phone';


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
      height:"7em"  
    },
    tabContainer:{
        marginLeft:'auto'
    },
    tab:{
        fontFamily:"Playfair"
    }
}));

 function Header(props){
     const classes = useStyles()
    return(
        <React.Fragment>
        <ElevationScroll color='primary'>
            <AppBar position='fixed'>
                <Toolbar disableGutters>
                <img alt='my logo'className={classes.logo} src={logo}/>
                <Tabs className={classes.tabContainer}>
                    <Tab className={classes.tab} label="Home"/>
                    <Tab className={classes.tab} label="About"/>
                    <Tab className={classes.tab} label="Contact"/>
                    <Tab className={classes.tab} label="Portfolio"/>
                    <Tab className={classes.tab} icon={<PhoneIcon />} label="704-891-4329" />
                  
                </Tabs>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </React.Fragment>
    );

}
export default Header;