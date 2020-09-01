import React, { useState, useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import TexField from "@material-ui/core/TextField";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import sendIcon from "../assets/send.svg";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyle = makeStyles((theme) => ({
  secondGrid: {
    height: "60em",
    padding: "5em",
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

  FirstGrid: {
    padding: "2em 5em",
    [theme.breakpoints.down("xs")]: {
      padding: "1em",
    },
  },

  form: {
    marginTop: "5em",
  },
  sendButton: {
    backgroundColor: "#4158D0",
    backgroundImage:
      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    margin: "3em 3em 3em 0",
    color: "white",
    fontFamily: "Raleway",
    fontWeight: 600,
    
  },
  button: {
    ...theme.typography.button,
    marginLeft: "25px",
    marginRight: "50px",
    borderRadius: "50px",
  },

  dialog: {
    marginTop:"6em"
    
  },
  dialogform:{
    margin:"3em ",
    [theme.breakpoints.down('sm')]:{
        margin:"0.5em"
    }
    
  },
  cancelButton:{
    
    color: "white",
    fontFamily: "Raleway",
    fontWeight: 600,
    backgroundColor: "red",
    "&:hover":{
      backgroundColor: "#DC143C",
    },
    [theme.breakpoints.down('sm')]:{
  
    }
  },
  confirmButton:{
    backgroundColor: "#4158D0",
    backgroundImage:
      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
   
    color: "white",
    fontFamily: "Raleway",
    fontWeight: 600,
  },
  buttonContainer:{
    marginTop:"2em"
  }
}));

const Contact = (props) => {
  const classes = useStyle();

  const [name, setName] = useState("");
  const [nameHelper, setNameHelper] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [validation, setValidation] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("invalid Phone number");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid
          item
          container
          direction="column"
          lg={5}
          className={classes.FirstGrid}
        >
          <Grid item container direction="column" spacing={3}>
            <Grid item>
              <Typography variant="h3">Contact-Us</Typography>
              <Typography variant="subtitle1">Some text i forget</Typography>
            </Grid>
            <Grid item container direction="column">
              <Grid item container spacing={2}>
                <Grid item>
                  <img src={phoneIcon} alt="phone" />
                </Grid>
                <Grid>
                  <a href="tel:5555555555" style={{ textDecoration: "none" }}>
                    {" "}
                    <Typography variant="subtitle1">(555)-555-5555</Typography>
                  </a>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item>
                  <img src={emailIcon} alt="email" />
                </Grid>
                <Grid>
                  <a
                    href="mailto:developement@gmail.com"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography variant="subtitle1">
                      developement@gmail.com
                    </Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item direction="column" className={classes.form} spacing={3}>
            <Grid item>
              <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="email"
                label="Email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="phone"
                label="Phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>
            <Grid item>
              <TextField
                label="tel us more about you inquiry"
                multiline
                rows={3}
                fullWidth
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                className={classes.message}
              />
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  phone.length === 0 ||
                  emailHelper.length !== 0 ||
                  email.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  nameHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={handleClickOpen}
              >
                Send
                <img src={sendIcon} alt="send" style={{ marginLeft: "1em" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.secondGrid}
          lg={7}
          alignItems="center"
        >
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            component={Link}
            to="/estimate"
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose} className={classes.dialog}>
      <DialogTitle ><Typography variant="h5">Confirm Informations</Typography></DialogTitle>
      <Grid item direction="column" className={classes.dialogform} spacing={3}>
            <Grid item>
              <Typography>Name</Typography>
              <Typography variant="subtitle1">{name}</Typography>
            </Grid>
            <Grid item>
            <Typography>Email</Typography>
              <Typography variant="subtitle1">{email}</Typography>
            </Grid>
            <Grid item>
            <Typography>Phone</Typography>
              <Typography variant="subtitle1">{phone}</Typography>
            </Grid>
            <Grid item>
            <Typography>Your inquiry</Typography>
              <Typography variant="subtitle1" >{message}</Typography>
            </Grid>
            <Grid item container spacing={2} className={classes.buttonContainer}>
              <Grid item md>
              <Button
               className={classes.cancelButton}
                variant="contained"
                
                onClick={handleClose}
              >
                cancel
                
              </Button>
              </Grid>
              <Grid item md>
              <Button
              
                variant="contained"
                className={classes.confirmButton}
                onClick={handleClickOpen}
              >
                Confirm
                {">"}
              </Button>
              </Grid>
            </Grid>
          </Grid>
      </Dialog>
    </React.Fragment>
  );
};

export default Contact;
