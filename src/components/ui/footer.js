import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import footerLogo from '../../assets/Footer Adornment.svg'
import Grid from "@material-ui/core/Grid"
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'


const usetStyle=makeStyles(theme=>({
       footer:{
           backgroundColor:theme.palette.common.blue,
           
         
       },
       footerLogo:{
           width:"25rem",
           height:"100%",
           position:"relative",
          verticalAlign:"bottom",
        [theme.breakpoints.down("md")]:{
            width:"21rem"
        },
        [theme.breakpoints.down("xs")]:{
            width:"18rem"
        }
        },
         footerContainer:{
             position:"absolute",
             zIndex:1302
         },

        footerLinks:{
            color:'white',
            fontFamily:"Arial",
            textDecoration:"none"
        } ,
        footerItem:{
            margin:"3rem"
        },
        footerMedia:{
            height:"4em",
            width:"4em",
            [theme.breakpoints.down('xs')]:{
                height:"2.5em",
                 width:"2.5em",
                }
            
        },
        mediaContainer:{
          marginTop:"-6em",
          right:"1.5em",
          position:"absolute",
          [theme.breakpoints.down('sm')]:{
            right:"0.8em"
          }
        }
}))



const Footer =(props)=>{
   const classes =usetStyle()
   const {/*value ,*/ setValue}=props


    return (
        <footer className={classes.footer}>
     <Hidden smDown>
         <Grid container className={classes.footerContainer} justify="center" >
         <Grid item className={classes.footerItem} >
            <Grid container direction="column" spacing={2}>
                <Grid item className={classes.footerLinks} component={Link} to="/" onClick={()=>{setValue(0)}}>
                    Home
                </Grid>
            </Grid>
            </Grid>
            <Grid item className={classes.footerItem}>
              <Grid container direction="column" spacing={2}>
                <Grid item className={classes.footerLinks} component={Link} to="/services" onClick={()=>{setValue(1)}}>
                    Services
                </Grid>
                <Grid item className={classes.footerLinks} component={Link} to="/custom-software" onClick={()=>{setValue(1)}} >
                    custom software
                </Grid>
                <Grid item className={classes.footerLinks} component={Link} to="/mobile-apps"onClick={()=>{setValue(1)}}>
                    mobile apps
                </Grid>
                <Grid item className={classes.footerLinks} component={Link} to="/websites" onClick={()=>{setValue(1)}}>
                    websites
                </Grid>
              </Grid>
            </Grid> 
            <Grid item className={classes.footerItem}>
              <Grid container direction="column" spacing={2}>
                <Grid item className={classes.footerLinks} component={Link} to="/revolution" onClick={()=>{setValue(2)}}>
                    Revolution
                </Grid>
                <Grid item className={classes.footerLinks} component={Link} to="/revolution" onClick={()=>{setValue(2)}}>
                    vision
                </Grid>
                <Grid item className={classes.footerLinks} component={Link} to="/revolution"onClick={()=>{setValue(2)}}>
                    technologie
                </Grid>
                <Grid item className={classes.footerLinks} component={Link} to="/revolution"onClick={()=>{setValue(2)}}>
                    process
                </Grid>
              </Grid>
            </Grid>  
            <Grid item className={classes.footerItem}>
              <Grid container direction="column" spacing={2}>
                <Grid item className={classes.footerLinks} component={Link} to="/about-us" onClick={()=>{setValue(3)}}>
                    About-us
                </Grid>
                <Grid item className={classes.footerLinks} component={Link} to="/about-us"onClick={()=>{setValue(3)}}>
                    History
                </Grid>
                <Grid item className={classes.footerLinks} component={Link} to="/about-us" onClick={()=>{setValue(3)}}>
                    team
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.footerItem}>
              <Grid container direction="column" spacing={2}>
                <Grid item className={classes.footerLinks} component={Link} to="/contact-us" onClick={()=>{setValue(4)}}>
                    Contact-us
                </Grid>
              </Grid>
            </Grid> 
       </Grid>       
    </Hidden>
      <img alt ="arc Ddevelopement" src={footerLogo} className={classes.footerLogo} />
     
     <Grid container justify="flex-end" className={classes.mediaContainer} spacing={1}>
         <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer">
             <img src={facebook} alt="facebook" className={classes.footerMedia} /> 
         </Grid>
         <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer">
             <img src={twitter} alt="twitter" className={classes.footerMedia} /> 
         </Grid>
         <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer">
             <img src={instagram} alt="instagram" className={classes.footerMedia} /> 
         </Grid>
         

     </Grid>

        </footer>

    )
}



export default Footer