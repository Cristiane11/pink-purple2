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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';




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
    },
    menu:{
      backgroundColor:theme.palette.common.purple,
      color:"purple",
      borderRadius:"0px"
    },
    MenuItem:{
      ...theme.typography.tab,
      opacity:0.7,
      "&:hover":{
        opacity:1
      }
    }
}));

 function Header(props){
     const classes = useStyles();
     const[value,setValue] = useState(0);
     const [anchorEl,setAnchorEl] = useState(null);
     const[open,setOpen] = useState(false);
     const [selectedIndex, setSelectedIndex] = useState(0)
      
     const handleChange = (e,value)=>{
         setValue(value);
     };
     const handleClick = e=>{
      setAnchorEl(e.currentTarget);
      setOpen(true);
    };
    const handleMenuItemClick = (e, i)=>{
      setAnchorEl(null);
      setOpen(false);
      setSelectedIndex(i)
    }
    const handleClose = e => {
      setAnchorEl(null);
      setOpen(false);
    };
    const menuOptions = [{name:"About", link:"/About"},{name:"Skills", link:"/Skills"},{name:"Education", link:"/Education"},{name:"Resume", link:"/Resume"}]



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
          switch (window.location.pathname){
            case "/":
              if (value !==0) {
              setValue(0)
              }
              break;
            case "/services":
              if (value !==1) {
              setValue(1);
              setSelectedIndex(0)
              }
              break;
            case "/customsoftware":
              if (value !==1) {
              setValue(1);
              setSelectedIndex(1)
              }
              break;
            case "/mobileapps":
              if (value !==1) {
              setValue(1);
              setSelectedIndex(2)
              }
              break;
            case "/websites":
              if (value !==1) {
              setValue(1);
              setSelectedIndex(3)
              }
              break;
            case "/revolution":
              if (value !==2) {
              setValue(2);
              }
              break;
           
            case "/about":
              if (value !==3) {
              setValue(3);
              }
              break;
            
            case "/contact":
              if (value !==4) {
              setValue(4);
              }
              break;
        
           
            case "/estimate":
              if (value !==5) {
              setValue(5);
              }
              break;
              default:
              break;
          }switch (window.location.pathname){
        case "/":
          if (value !==0) {
          setValue(0)
          }
          break;
        case "/About":
          if (value !==1) {
          setValue(1);
          setSelectedIndex(0)
          }
          break;
        case "/Skills":
          if (value !==1) {
          setValue(1);
          setSelectedIndex(1)
          }
          break;
        case "/Education":
          if (value !==1) {
          setValue(1);
          setSelectedIndex(2)
          }
          break;
        case "/Resume":
          if (value !==1) {
          setValue(1);
          setSelectedIndex(3)
          }
          break;
        case "/Contact":
          if (value !==2) {
          setValue(2);
          }
          break;
       
        case "/Portfolio":
          if (value !==3) {
          setValue(3);
          }
          break;
          default:
          break;
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
                    <Tab aria-owns ={anchorEl ? "simple-menu" : undefined} aria-haspopup={anchorEl ? "true":undefined} onMouseOver={event=>handleClick(event)} className={classes.tab} component={Link} to='/About'  label="About"/>
                    <Tab className={classes.tab} component={Link} to="/Contact" label="Contact"/>
                    <Tab className={classes.tab} component={Link} to="/Portfolio" label="Portfolio"/>
                    <Tab className={classes.tab} component={Link} to="" icon={<PhoneIcon />}/>
                </Tabs>
                <Menu id="simple-menu" anchorEl={anchorEl} open={open} onClose={handleClose} classes={{paper:classes.menu}} MenuListProps={{onMouseLeave: handleClose}}elevation={0}>
                    {menuOptions.map((option, i)=>(
                      <MenuItem key={option} component={Link}  to={option.link} classes={{root:classes.menuItem}} onClick ={(event)=>{handleMenuItemClick(event,i); setValue(1); handleClose()}} selected={i === selectedIndex && value ===1}>{option.name}</MenuItem>
                    ))}
                </Menu>


                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </React.Fragment>
    );

}
export default Header;