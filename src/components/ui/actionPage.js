import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import ButtonArrow from "./Button arrow"
import {makeStyles,useTheme} from "@material-ui/core/styles"
import Typography  from "@material-ui/core/Typography"
//import theme from "./theme"

const useStyles = makeStyles(theme=>({
    learnMore:{
        borderRadius:"50px",
        borderColor:"light-blue",
        borderStyle:"double",
        padding:'2px 5px',
        margin:"10px",
        color :"white"
    },
    background:{
        height:"40em",
        padding:"5em",
        backgroundColor: "#0093E9",
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        [theme.breakpoints.down("xs")]:{
            padding:"0.5em",
            textAlign:"center"
        },
      },
      actiontext:{
        [theme.breakpoints.down("xs")]:{
            fontSize:"2rem"
        }},

    subtitle:{
        [theme.breakpoints.down("xs")]:{
            fontSize:"1rem"
        }
    } ,
    button:{
        ...theme.typography.button,
           borderRadius:"50px",
           height:"3em",
        [theme.breakpoints.down("xs")]:{
    }
      
      },   
   estimateContainer:{
       textAlign:"right",
       [theme.breakpoints.down("xs")]:{
        textAlign:"center",
        marginTop:"-6em"
    }
      }   


}))



const ActionPage =()=>{
  const theme =useTheme()
  const classes =useStyles()

  return (
      <Grid container className={classes.background} alignItems="center" >
          <Grid item xs>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h2" className={classes.actiontext}>
                Simple software .<br />
                Revolutionary Result
                  </Typography>
                  <Typography variant ="subtitle2" style={{color:"Azure"}} className={classes.subtitle}>
                  The advantage of 21st century
                  </Typography>
                </Grid>
                <Grid item >
                <Button variant="outlined" className={classes.learnMore} >
                       <span style={{margin:10}} >Learn More</span>
                 <ButtonArrow width={15} height={10} fill={theme.palette.common.blue} />
                     
                   </Button>
                </Grid>

              </Grid>
          </Grid>
          <Grid item xs className={classes.estimateContainer}>
              
          <Button variant="contained" color="secondary" className={classes.button}  >
                   Free Estimate
                 </Button>
          </Grid>
      </Grid>
  )

}


export default ActionPage
