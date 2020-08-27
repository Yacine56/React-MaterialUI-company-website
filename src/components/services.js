import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyle } from "./LandingPage";
import ButtonArrow from "./ui/Button arrow";
import customSoftware from "../assets/Custom Software Icon.svg";
import theme from "./ui/theme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import mobileIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyleS =makeStyles(theme=>({
        container :{
           backgroundImage: "linear-gradient( 109.6deg,  rgba(5,84,94,1) 16%, #bbb 91.1% )"
        },
          titles:{
            color:"white"
        }
}))



const Services = () => {
  const classeS =useStyleS()
  const classes = useStyle();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matcheXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column" className={classeS.container}>
      <Grid item>
        <Grid container alignItems="center">
          <Grid item style={{ margin: " 4em auto" }}>
            <Typography
              variant={matches ? "h5" : "h4"}
              style={{fontFamily:"pacifico",color:theme.palette.secondary.main}}
            
            >
              {" "}
              <u>Our Services :</u>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={[matches && classes.customItem, classes.item]}>
        <Grid container direction="row">
          <Grid item>
            <Typography variant={matches ? "h5" : "h4"} className={classeS.titles}>
              {" "}
              Custom software developement
            </Typography>
            <Typography variant="subtitle1" className={classeS.titles}>save Time.save Money</Typography>
            <Typography variant="subtitle1" className={classeS.titles}>
              complete degital solutions from {matcheXS && <br />}degital
              investigations <span className={classes.span}>celebration</span>
            </Typography>
            <Button variant="outlined" className={classes.learnMore}>
              <span style={{ margin: 10 }} className={classes.span}>
                Learn More
              </span>
              <ButtonArrow
                width={15}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <div className={matcheXS && classes.divImage}>
              <img
                src={customSoftware}
                alt="custom software"
                className={classes.image}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={[matches && classes.customItem, classes.item]}>
        <Grid container direction="row" justify="flex-end">
          <Grid item>
            <Typography variant={matches ? "h5" : "h4"} className={classeS.titles}>
              {" "}
              Android/IOS developement
            </Typography>
            <Typography variant="subtitle1"className={classeS.titles}>
              extend fonctionalities.{matcheXS && <br />} extend Access.
              {matcheXS && <br />}Increase Engagement
            </Typography>
            <Typography variant="subtitle1"className={classeS.titles}>
              integrate your mobile experience {matcheXS && <br />}with either{" "}
              <span className={classes.span}>mobile platforms</span>
            </Typography>
            <Button variant="outlined" className={classes.learnMore}>
              <span style={{ margin: 10 }} className={classes.span}>
                Learn More
              </span>
              <ButtonArrow
                width={15}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={mobileIcon}
              alt="android apps"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={[matches && classes.customItem, classes.item]}>
        <Grid container direction="row">
          <Grid item>
            <Typography variant={matches ? "h5" : "h4"} className={classeS.titles}>
              {" "}
              websites developement
            </Typography>
            <Typography variant="subtitle1" className={classeS.titles}>
              Reach More.{matcheXS && <br />} Dicover More.
              {matcheXS && <br />} Sell More
            </Typography>
            <Typography variant="subtitle1" className={classeS.titles}>
              Optimized for search engines {matcheXS && <br />}Built for{" "}
              <span className={classes.span}>Speed</span>
            </Typography>
            <Button variant="outlined" className={classes.learnMore}>
              <span style={{ margin: 10 }} className={classes.span}>
                Learn More
              </span>
              <ButtonArrow
                width={15}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <div className={matcheXS && classes.divImage}>
              <img src={websiteIcon} alt="websites" className={classes.image} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
