import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Ismail Akbani
                <br />
                <small className={classes.smallTitle}>Faculty Head</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                The Founder! An unorthodox technology educator turned startup evangelist. Keeps the teams always up and motivated.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/maverickismail/"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Vidisha Wagle
                <br />
                <small className={classes.smallTitle}>Executive Head</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                The teams can be discussing something for 3 hours and she'll top those 3 hours with a 5 minute talk! 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/vidisha-wagle-22894714a/"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Sanket Shevkar
                <br />
                <small className={classes.smallTitle}>Design Head</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                The techie! He puts it on the stage, whether it is with his designs, new web pages and cool boi stuff.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/sanket-shevkar-a71133168/"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem><GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Kartik Kumar
                <br />
                <small className={classes.smallTitle}>SR Head</small>
              </h4>
              <CardBody>
                <p className={classes.description}>The smartesttt of all! 
Sit hadn't seen a James bond until Kartik took admission! He's over very own 007, achieves the impossible kafi effortlessly</p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/kartik-kumar-b41a48169/"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                G. Krishna
                <br />
                <small className={classes.smallTitle}>Finance Head</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Joyous, wise, nurturing... the list can go on and on. that's our Finace and publicity head!
These both areas go hand in hand and no better team member than her to handle these whilst keeping her calm! 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/krishna-madhuri-gumpalli-65441b17b"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Meghana M
                <br />
                <small className={classes.smallTitle}>Content Head</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                She is a mixture of 3 very contrasting characteristics. Super Enthusiastic, reliable and compassionate. Even in her enthusiastic mood she can solve and relate to problems of everyone.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/meghana-maringanty-461a80169"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
