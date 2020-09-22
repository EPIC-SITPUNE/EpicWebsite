import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import SC from "assets/img/StartupCon.png";
import SW from "assets/img/SW.png";

import './Timer.css'

import Button from '@material-ui/core/Button';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={8}>
          <h2 className={classes.title}>Flagship Events</h2>
          <h5 className={classes.description}>
          Runner’s up at the National Entrepreneurship Challenge – IITB, Organiser of the official E-Summit of SIT, Organiser of TechStars Start-up Weekend Powered by Google for start-ups
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          
          <GridItem xs={12} sm={6} md={4}>
          <img src={SC} alt="Logo" />
          <p className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </p>
          <div className="button">
            <Button variant="contained" color="primary" disableElevation>
              Info
    </Button>
          </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
          <img src={SW} alt="Logo" />
          <p className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </p>
          <div className="button">
            <Button variant="contained" color="primary" disableElevation>
              Info
    </Button>
          </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
