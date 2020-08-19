import React,{useState,useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/toolbar"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
//import { Typography } from '@material-ui/core';
import {makeStyles} from "@material-ui/styles"
import logo     from '../../assets/logo.svg'
import Tab      from '@material-ui/core/Tab'
import Tabs     from '@material-ui/core/Tabs'
import Button   from "@material-ui/core/Button"
import {Link}   from 'react-router-dom'
import Menu     from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from "@material-ui/core/useMediaQuery"
import {useTheme} from "@material-ui/core/styles"
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
//import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



function ElevationScroll(props) {
    const { children, window } = props;
   
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,

    window: PropTypes.func,
  };
  

const useStyle= makeStyles(theme=>({
  toolbarMargin:{
      ...theme.mixins.toolbar,
      marginBottom:"4em",
      [theme.breakpoints.down("md")]:{
        marginBottom:"3rem"
      },
    [theme.breakpoints.down("xs")]:{
        marginBottom:"1.5rem"   
    }
},
   logo:{
    height:"7.5rem",
    [theme.breakpoints.down('md')]: {
      height:"6.5rem"
    },
    [theme.breakpoints.down("xs")]:{
      height:"5rem"
    }
   },
   tab:{
   ...theme.typography.tab,
    minWidth:10,
    marginLeft:"0.5rem"
   },
   tabs:{
     marginLeft:"auto"
   },
   button:{
     ...theme.typography.button,
     marginLeft:"25px",
     marginRight:"50px",
     borderRadius:"50px"
   },
   logoContainer:{
     padding:0
   },
   menu:{
     backgroundColor:theme.palette.common.blue,
     color:'white'
   },
   menuItem:{
     ...theme.typography.tab,
     opacity:0.7,
     "&:hover":{
       opacity:1
     }
   },
   list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton:{
    
    marginLeft:"auto"

  },
  menuButtonIcon:{
    height:"50px",
    width:"50px",
  },
  drawer:{
    backgroundColor:theme.palette.primary.main
  },
  drawerEstimate:{
    backgroundColor:theme.palette.secondary.main
  },
  drawerItemText:{
    ...theme.typography.tab,
    color:'white' ,
    opacity:0.7
  },drawerItemTextSelected:{
    opacity:1
  },
  appBar:{
      zIndex:theme.zIndex.modal+1
  }

}))   

const Header =(props)=>{
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
const [openDrawer,setOpenDrawer]=useState(false)
const classes=useStyle()  
const theme=useTheme()
const {value , setValue}=props
const [anchorEl, setAnchorEl] = useState(null);
const matches =useMediaQuery(theme.breakpoints.down('md'))

const toggleDrawer=()=>{
   
  setOpenDrawer(!openDrawer)
}

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

const tabChangehandler=(e,value)=>{
  setValue(value)
}

useEffect(()=>{
   if(window.location.pathname==='/' && value !==0){
     setValue(0)
   }else if(window.location.pathname==='/services' && value !==1){
     setValue(1)
   }else if(window.location.pathname==='/revolution' && value !==2){
     setValue(2)
   }else if(window.location.pathname==='/about-us' && value !==3){
     setValue(3)
   }else if (window.location.pathname==='/contact-us' && value !==4){
     setValue(4)
   }else if (window.location.pathname==='/estimate' && value !==5){
    setValue(5)
  }
  switch(window.location.pathname){
        case "/":
        setValue(0);break;
        case "/services":
        setValue(1) ;break;
        case "/custom-software":
          setValue(1);break;
        case "/mobile-apps":
        setValue(1);break;
        case "/websites":
        setValue(1);break;
        case "/revolution":
        setValue(2);break;
        case "/about-us":
        setValue(3);break;
        case "/contact-us":
        setValue(4);break;
        case "/estimate":
        setValue(5);break;
        default:
          break
  }
},[value,setValue])

const listitems=[{name:"Home",link:"/"},{name:"services",link:"/services"}
                ,{name:"The revolution",link:"/revolution"},{name:"About-Us",link:"/about-us"}
                ,{name:"contact-us",link:"/contact-us"}]


const tabs=(<React.Fragment>
                      <Tabs value={value} onChange={tabChangehandler} className={classes.tabs}>
                   <Tab className={classes.tab} label="Home" component={Link} to='/' />
                   <Tab className={classes.tab} label="Services" component={Link} to='/services' onMouseOver={handleClick} aria-controls="simple-menu" aria-haspopup="true" />
             <Menu
                     id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{onMouseLeave:handleClose}}
                    classes={{paper:classes.menu}}
                    elevation={0}
                    style={{zIndex:1302}}
                    >
                    <MenuItem onClick={()=>{handleClose(); setValue(1)}} component={Link} to='/custom-software' className={classes.menuItem}>custom-software</MenuItem>
                    <MenuItem onClick={()=>{handleClose(); setValue(1)}} component={Link} to='/mobile-apps'     className={classes.menuItem}>mobile apps</MenuItem>
                    <MenuItem onClick={()=>{handleClose(); setValue(1)}} component={Link} to='/websites'        className={classes.menuItem}>websites</MenuItem>
            </Menu>
           
                   <Tab className={classes.tab} label="The Revolution" component={Link} to='/revolution' />
                   <Tab className={classes.tab} label="About us"       component={Link} to='/about-us'/>
                   <Tab className={classes.tab} label="Contact Us"     component={Link} to='/contact-us'/>
                 </Tabs>
                
                  <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/estimate" onClick={()=>{setValue(5)}} >
                   Free Estimate
                 </Button>
               
           </React.Fragment>)


const drawer=(
                <React.Fragment>
                <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}  
               open={openDrawer} 
               onOpen={toggleDrawer}
               onClose={()=>setOpenDrawer(false)}
               classes={{paper:classes.drawer}}
>
   <div className={classes.toolbarMargin} />
    <List  disablePadding >
       {listitems.map((item,i)=>{
         return(
           <ListItem key={item.name+i} onClick={()=>{toggleDrawer();setValue(i)}} divider button component={Link} to={item.link} selected={value===i}>
             <ListItemText disableTypography className={[classes.drawerItemText,value===i && classes.drawerItemTextSelected]} >{item.name}</ListItemText>
           </ListItem>
         )
       })}
       <ListItem onClick={()=>{toggleDrawer();setValue(5)}} divider button component={Link} to="/estimate" className={classes.drawerEstimate} selected={value===5}>
             <ListItemText disableTypography className={[classes.drawerItemText,value===5 && classes.drawerItemTextSelected]}>Free Estimate</ListItemText>
           </ListItem>
   </List>
   </SwipeableDrawer>
<IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon className={classes.menuButtonIcon}/>
          </IconButton>
</React.Fragment>
)

    return(
        <React.Fragment>
            <ElevationScroll>
          <AppBar position="fixed" className={classes.appBar}> 
              <Toolbar disableGutters  >
                <Button component={Link} to='/' className={classes.logoContainer} onClick={()=>setValue(0)} >
                 <img src={logo} alt="logo" className={classes.logo} />    
                 </Button>
             {matches? drawer : tabs}
                 
              </Toolbar>
          </AppBar>
          </ElevationScroll>
          <div className={classes.toolbarMargin} />
          </React.Fragment>
      )
}
export default Header 