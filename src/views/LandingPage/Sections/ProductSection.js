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
              StartUpCon is the official E-SUMMIT of Symbiosis Institute of Technology.
    With having completed 2 editions, it has been become a popular event in the campus.
    This year StartUpCon 2.0 was organised with events and workshops not only focused on Entrepreneurship.
    The main event was Pitch It Up! A pitching competition which was held online and offline. We had teams from all over India and students from esteemed institution like IITB tried their pitches at our event.
    StartUpCon 2.0 had 400+ registrations and prizes worth Rs 1 Lakh.
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
              Teachstars StartUp Weekend, powered by Google for Startups held at the Symbiosis Institute of Technology from the 21-23rd of February 2020.
    We had 50 exceedingly enthusiastic participants with high energy and drive to be a part of this event.
    The felicitator of the event was Sarthak Sinha. The 3 day long event had various pieces into it that made the event a success.
    The event commenced with an Introduction which had engaging ice breaking activities to enjoy the event with an open mind and in the next 54 hours we had 8 start-ups and 50 Entrepreneurs ready for the real world.
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
