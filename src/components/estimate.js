import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles ,useTheme} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Lottie from "react-lottie";

import check from '../assets/check.svg'
import send from '../assets/send.svg'
import software from '../assets/Custom Software Icon.svg'
import mobile from '../assets/mobileIcon.svg'
import website from '../assets/websiteIcon.svg'
import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import backArrowDisabled from '../assets/backArrowDisabled.svg'
import forwardArrowDisabled from '../assets/forwardArrowDisabled.svg'
import camera from '../assets/camera.svg'
import upload from '../assets/upload.svg'
import person from '../assets/person.svg'
import persons from '../assets/persons.svg'
import people from '../assets/people.svg'
import info from '../assets/info.svg'
import bell from '../assets/bell.svg'
import users from '../assets/users.svg'
import iphone from '../assets/iphone.svg'
import gps from  '../assets/gps.svg'
import customized from '../assets/customized.svg'
import data from '../assets/data.svg'
import android from '../assets/android.svg'
import globe from '../assets/globe.svg'
import biometrics from '../assets/biometrics.svg'

import estimateAnimation from "../animations/estimateAnimation/data.json"

const useStyle =makeStyles(theme=>({
  container:{
     padding:"3em",
     backgroundColor: "#FFDEE9", 
     backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)"

  },

  iconTitle:{
    fontWeight:500,
    fontFamily:"Raleway",
    fontSize:"1.5rem",
    color:theme.palette.common.blue,
    marginBottom:"1em"
  },
  button:{
     color:"white",
   borderRadius:"50px",
    fontFamily:"pacifico",
    fontSize:"1.5rem"
  },

}))

const estimateOptions = {
  loop: true,
  autoplay: true,
  animationData: estimateAnimation,
  renderSettings: {
    preserveAspectratio: "xMidYMid slice",
  },
};

const Estimate=()=>{
    const classes =useStyle()
    const theme = useTheme() 

return (
  <Grid container className={classes.container} >
  <Grid item container direction="column" md>
    <Grid item>
      <Typography variant="h3">
        Estimate
      </Typography>
    </Grid>
    <Grid item >
      <Lottie options={estimateOptions} />
    </Grid>
  </Grid>
  <Grid item container direction="column" alignItems="center" justify="center" md style={{marginLeft:"2em"}} >
    <Grid item >
   <Typography variant="h3" style={{marginBottom:"3em"}}>
     make Your estimate
   </Typography>
    </Grid>
    <Grid item > 
    <Grid container >
      <Grid item container direction="column" md alignItems="center" align="center">
        <Grid item>
          <Typography className={classes.iconTitle}>
           Android/ios developement
          </Typography>
        </Grid>
       <Grid item >
         <img src={mobile} alt="mobile design" style={{maxWidth:"10em"}}/>
         </Grid>  

      </Grid>
      <Grid item container direction="column" md alignItems="center" align="center">
      <Grid item>
          <Typography className={classes.iconTitle}>
          website developement
          </Typography>
        </Grid>
       <Grid item >
         <img src={website} alt="website developement" style={{maxWidth:"10em"}}/>
         </Grid>  

      </Grid>
      <Grid item container direction="column" md alignItems="center" align="center">
      <Grid item>
          <Typography className={classes.iconTitle}>
          Software developement
          </Typography>
        </Grid>
       <Grid item >
         <img src={software} alt="software developement" style={{maxWidth:"10em"}} />
         </Grid>  
         </Grid>
      </Grid>
    </Grid>
    <Grid item >
      <Grid container >
      <Grid>
        <img src={backArrow} alt="back" style={{marginRight:"10em"}}/>
      </Grid>
      <Grid>
        <img src={forwardArrow} alt="forward" />
      </Grid>
    </Grid>
    </Grid>
    <Grid item style={{marginTop:"2em"}}>
    <Button variant="contained" color="secondary" className={classes.button}  >
                   Get Estimate
                 </Button>
    </Grid>
  </Grid>
  </Grid>

)

}


export default Estimate