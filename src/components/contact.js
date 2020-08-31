import React , {useState} from "react"
import Grid from "@material-ui/core/Grid"
import TexField from "@material-ui/core/TextField"
import {makeStyles,useTheme} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import background from "../assets/background.jpg"
import phoneIcon from "../assets/phone.svg"
import emailIcon from '../assets/email.svg'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import sendIcon from "../assets/send.svg"
import {Link} from "react-router-dom"

const useStyle= makeStyles(theme=>({
          secondGrid:{
            height: "60em",
            padding:"5em",
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgoundRepeat: "no-repeat",
        
            [theme.breakpoints.down("xs")]: {
              height: "17em",
              
              padding: "0.5em",
              backgroundSize: "21.5em 17em",
            },
          },
          FirstGrid:{
              padding:"2em 5em"
          },
          form:{
              marginTop:"5em",
              
          },
          sendButton:{
            backgroundColor:"#4158D0",
            backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
            marginTop:"3em",
            color:'white'
          },
          button:{
            ...theme.typography.button,
            marginLeft:"25px",
            marginRight:"50px",
            borderRadius:"50px"
          },
}))


const Contact=(props)=>{
const classes=useStyle()
const [name, setName]=useState("")
const[email,setEmail]=useState("")
const [phone , setPhone]=useState('')
const [message , setMessage]=useState('')
  


return (
           <Grid container >
               <Grid item container direction="column" lg={5} className={classes.FirstGrid} >
                   <Grid item container direction="column" spacing={3}>
                       <Grid item>
                          <Typography variant="h3">
                          Contact-Us
                          </Typography>
                          <Typography variant="subtitle1">
                          Some text i forget 
                           </Typography>
                         </Grid>
                        <Grid item container direction="column" >
                            <Grid item container spacing={2}>
                                <Grid item>
                                <img src={phoneIcon} alt="phone"/>
                            </Grid>
                            <Grid>
                                <Typography variant="subtitle1">
                                    (555)-555-5555
                                </Typography>
                            </Grid>
                            </Grid>
                            <Grid item container spacing={2}>
                                <Grid item>
                                <img src={emailIcon} alt="email"/>
                            </Grid>
                            <Grid>
                                <Typography variant="subtitle1">
                                    developement@gmail.com
                                </Typography>
                            </Grid>
                            </Grid>
                            
                          
                        </Grid>
                    </Grid>
                    <Grid item direction="column" className={classes.form} spacing={3}>
                        <Grid item>
                            <TextField label="Name" fullWidth value={name} onChange={(event)=>{setName(event.target.value)}} />
                        </Grid>
                        <Grid item>
                            <TextField label="Email" fullWidth value={email} onChange={(event)=>{setEmail(event.target.value)}} />
                        </Grid>
                        <Grid item>
                            <TextField label="Phone" fullWidth value={phone} onChange={(event)=>{setPhone(event.target.value)}} />
                        </Grid>
                        <Grid item>
                            <TextField label="tel us more about you inquiry" multiline rows={3} fullWidth value={message} onChange={(event)=>{setMessage(event.target.value)}} />
                        </Grid>
                        <Grid item >
                            <Button variant="contained" className={classes.sendButton} >
                              Send <img src={sendIcon} alt="send" style={{marginLeft:"1em"}} />
                            </Button>
                        </Grid>
                    </Grid>
               </Grid>
               <Grid item container  className={classes.secondGrid} lg={7} alignItems="center" >
               <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/estimate" >
               Free Estimate
                 </Button>
               </Grid>
           </Grid>
       )
}


export default Contact
