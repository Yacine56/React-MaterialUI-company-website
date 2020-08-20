import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography'
import  Button  from '@material-ui/core/Button'
import ButtonArrow from './ui/Button arrow'
import customSoftware from '../assets/Custom Software Icon.svg'
import theme from './ui/theme'
import useMediaQuery from "@material-ui/core/useMediaQuery"
import mobileIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'

const useStyle=makeStyles(theme=>({
          learnMore:{
              borderRadius:"50px",
              padding:'2px 5px',
              margin:"10px"
          },
          span:{
            fontFamily:"pacifico",
            color:theme.palette.common.orange,
            fontSize:"1.2rem",
            fontWeight:400,
        },
        container:{
           
           
            
        },
        customItem:{
            textAlign:"center"
        },
        image:{
            marginLeft:"2rem",
            [theme.breakpoints.down("xs")]:{
                margin:"0.5em",
             
            }
        },
        item:{
            marginBottom:"5em",
            margin:"2em",
            
            [theme.breakpoints.down("xs")]:{
                marginBottom:"3em",
                margin:"0"
            }
        },
        divImage:{
            marginLeft:"2.5em"
        }
}))

const LandingPage =(props)=>{
   const classes=useStyle()
   const matches =useMediaQuery(theme.breakpoints.down("sm"))
   const matcheSM =useMediaQuery(theme.breakpoints.down("xs"))   
   
   
     return  (<Grid container direction="column" className={classes.container} >
               <Grid item className={[matches && classes.customItem,classes.item]} >
                 <Grid container direction="row">
                  <Grid item>
                   <Typography variant ={matches ? "h5" : "h4"}> custom software developement</Typography>
                   <Typography variant="subtitle1">
                     save Time.save Money 
                   </Typography>
                   <Typography variant="subtitle1">
                    complete degital solutions from {matcheSM && <br />}degital investigations <span className={classes.span}>celebration</span>
                   </Typography>
                   <Button variant="outlined" className={classes.learnMore} >
                       <span style={{margin:10}} className={classes.span}>Learn More</span>
                   <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                     
                   </Button>
               </Grid>
               <Grid item>
               <div className={matcheSM && classes.divImage }>
                   <img src={customSoftware} alt ="custom software" className={classes.image}/>
                 </div>  
               </Grid>
           </Grid>
        </Grid>
        <Grid item className={[matches && classes.customItem,classes.item]} >
               <Grid container direction="row" justify="flex-end">
               <Grid item>
                   <Typography variant ={matches ? "h5" : "h4"}> android/IOS developement</Typography>
                   <Typography variant="subtitle1">
                     extend fonctionalities.{matcheSM && <br />} extend Access.{matcheSM && <br />}Increase Engagement
                   </Typography>
                   <Typography variant="subtitle1">
                           integrate your mobile experience {matcheSM && <br />}with either  <span className={classes.span}>mobile platforms</span>
                   </Typography>
                   <Button variant="outlined" className={classes.learnMore} >
                       <span style={{margin:10}} className={classes.span}>Learn More</span>
                   <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                     
                   </Button>
               </Grid>
               <Grid item>
                   <img src={mobileIcon} alt ="android apps" className={classes.image} />
               </Grid>
           </Grid>
        </Grid>
        <Grid item className={[matches && classes.customItem,classes.item]} >
               <Grid container direction="row">
               <Grid item>
                   <Typography variant ={matches ? "h5" : "h4"}> websites developement</Typography>
                   <Typography variant="subtitle1">
                     Reach More.{matcheSM && <br />} Dicover More.{matcheSM && <br />} Sell More
                   </Typography>
                   <Typography variant="subtitle1">
                    Optimized for search engines {matcheSM && <br />}Built for <span className={classes.span}>Speed</span>
                   </Typography>
                   <Button variant="outlined" className={classes.learnMore} >
                       <span style={{margin:10}} className={classes.span}>Learn More</span>
                   <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                     
                   </Button>
               </Grid>
               <Grid item>
               <div className={matcheSM && classes.divImage }>
                   <img src={websiteIcon} alt ="websites" className={classes.image}/>
                   </div>
               </Grid>
           </Grid>
        </Grid>
    </Grid>
)
}


export default LandingPage