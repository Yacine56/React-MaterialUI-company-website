import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import backArrow from "../assets/backArrow.svg";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "./ui/theme";
import forwardArrow from "../assets/forwardArrow.svg";
import bulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopWatch from "../assets/stopwatch.svg";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import documentsAnimation from "../animations/documentsAnimation/data";
import ScaleAnimation from "../animations/scaleAnimation/data.json";
import root from "../assets/root1.jpg";
import automaionAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";


const useStyle = makeStyles((theme) => ({
  textContainer: {
    maxWidth: "45em",
    height: "auto",
  },
  container: {
    padding: "3em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em",
    },
  },
  image: {},
  imageContainer: {
    marginTop: "3em",
    marginBottom: "3em",
  },
  documents: {
    maxWidth: "40em",
  },
  rootImage:{
      width:"40em",
      height:"40em",
   
    [theme.breakpoints.down("sm")]:{
      width:"18em",
      height:"18em",
    }
  }
}));

const CustomSoftware = (props) => {
  const classes = useStyle();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const documentOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const ScaleOptions = {
    loop: true,
    autoplay: true,
    animationData: ScaleAnimation,
    renderSettings: {
      preserveAspectratio: "xMidYMid slice",
    },
  };
  const autoOptions = {
    loop: true,
    autoplay: true,
    animationData: automaionAnimation,
    renderSettings: {
      preserveAspectratio: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    renderSettings: {
      preserveAspectratio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item container spacing={4}>
        <Grid item>
          <IconButton component={Link} to="/services">
            <img src={backArrow} alt="return arrow" />
          </IconButton>
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.textContainer}
        >
          <Grid item>
            <Typography variant={matches ? "h5" : "h4"}>
              Custom software developement
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" paragraph>
              Custom software (also known as bespoke software or tailor-made
              software) is software that is specially developed for some
              specific organization or other user.
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Since custom software is developed for a single customer it can
              accommodate that customer's particular preferences and
              expectations
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Cost is also not the only consideration in the decision to develop
              custom software
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton component={Link} to="/mobile-apps">
            <img src={forwardArrow} alt="forward button" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        spacing={2}
        className={classes.imageContainer}
      >
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography variant="h5">Save Money</Typography>
          </Grid>
          <Grid item>
            <IconButton style={{ backgroundColor: "transparent" }}>
              <img src={cash} alt="alter" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          className={classes.image}
        >
          <Grid item>
            <Typography variant="h5">Save Time</Typography>
          </Grid>
          <Grid item>
            <IconButton style={{ backgroundColor: "transparent" }}>
              <img src={stopWatch} alt="alter" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems="center">
          <Grid item>
            <Typography variant="h5">Save Energy</Typography>
          </Grid>
          <Grid item>
            <IconButton style={{ backgroundColor: "transparent" }}>
              <img src={bulb} alt="alter" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item container md>
          <Grid
            item
            container
            direction="column"
            className={classes.documents}
            md
          >
            <Grid item>
              <Typography variant="h5">Degital Documents{" & "}Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" paragraph>
                An electronic document is any electronic media content (other
                than computer programs or system files) that is intended to be
                used in either an electronic form or as printed output
              </Typography>
              <Typography variant="subtitle1" paragraph>
                using electronic documents for final presentation instead of
                paper has created the problem of multiple incompatible file
                formats
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Even plain text computer files are not free from this problem —
                e.g. under MS-DOS, most programs could not work correctly with
                UNIX-style text files
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie options={documentOptions} style={{ height: "20em" }} />
          </Grid>
        </Grid>
        <Grid item container md>
          <Grid
            item
            container
            direction="column"
            className={classes.documents}
            md
          >
            <Grid item>
              <Typography variant="h5">Scale</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" paragraph>
                An electronic document is any electronic media content (other
                than computer programs or system files)
              </Typography>
              <Typography variant="subtitle1" paragraph>
                using electronic documents for final presentation instead of
                paper has created the problem of multiple incompatible file
                formats
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Even plain text computer files are not free from this problem
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie options={ScaleOptions} style={{ height: "20em" }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container style={{margin:"3em 0"}}  >
        <Grid item container direction="column" alignItems="center">
          <Grid item md > 
          <img src={root} alt="cddf"  className={classes.rootImage}/>
          </Grid>
          <Grid item md className={classes.textContainer}>
            <Typography variant="h4" align="center">Root-cause Analysis</Typography>
            <Typography variant="subtitle1" paragraph align="center">
              Root cause analysis can be traced to the broader field of total
              quality management (TQM).
            </Typography>
            <Typography variant="subtitle1" paragraph align="center">
              Root cause analysis is part of a more general problem-solving
              process and an integral part of continuous improvement. Because of
              this, root cause analysis is one of the core building blocks in an
              organization’s continuous improvement efforts
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item container md>
        <Grid item md>
            <Lottie options={autoOptions} style={{ height: "20em" }} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            className={classes.documents}
            md
          >
            <Grid item>
              <Typography variant="h5" align="center">Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" paragraph align="center">
                An electronic document is any electronic media content (other
                than computer programs or system files) that is intended to be
                used in either an electronic form or as printed output
              </Typography>
              <Typography variant="subtitle1" paragraph align="center">
                using electronic documents for final presentation instead of
                paper has created the problem of multiple incompatible file
                formats
              </Typography>
              <Typography variant="subtitle1" paragraph align="center">
                Even plain text computer files are not free from this problem —
                e.g. under MS-DOS, most programs could not work correctly with
                UNIX-style text files
              </Typography>
            </Grid>
          </Grid>
          
        </Grid>
        <Grid item container md style={{marginLeft:!matches && "2em"}} >
          <Grid
            item
            container
            direction="column"
            className={classes.documents}
            md
          >
            <Grid item>
              <Typography variant="h5" align="center">User Experience</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" paragraph align="center">
                An electronic document is any electronic media content (other
                than computer programs or system files)
              </Typography>
              <Typography variant="subtitle1" paragraph align="center">
                using electronic documents for final presentation instead of
                paper has created the problem of multiple incompatible file
                formats
              </Typography>
              <Typography variant="subtitle1" paragraph align="center">
                Even plain text computer files are not free from this problem
              </Typography>
            </Grid>
          </Grid>
          <Grid item md >
            <Lottie options={uxOptions} style={{ height: "20em" }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
