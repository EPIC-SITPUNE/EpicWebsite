import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

// @material-ui/icons
import Step from "@material-ui/icons/FormatIndentIncrease";
import Chat from "@material-ui/icons/Chat";
import Info from "@material-ui/icons/Info";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import typo from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);
const useTypo = makeStyles(typo);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const classTypo=useTypo();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand=""
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container }>
          <GridContainer justify="center" >
          <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Invites",
                    tabIcon: Chat,
                    tabContent: (
                      <div>
                      <h1><b>50</b> <small>Remaining</small></h1>
                      </div>
                    )
                  },
                  {
                    tabName: "Steps",
                    tabIcon: Step,
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    )
                  },
                  {
                    tabName: "Benefits",
                    tabIcon: Info,
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                  <div >
              <h1 className={classTypo.title}>Register</h1>
            </div>
                  </CardHeader>
                  <CardBody>
                  <TextField
          id="outlined-full-width"
          label="Name"
          style={{ marginTop: "1rem" }}
          placeholder="Name"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={(event)=>setName(event.target.value)}
        />
                    <TextField
                    type='email'
          id="outlined-full-width"
          label="Email"
          helperText="Use SIT Email"
          style={{ marginTop: "3rem" }}
          placeholder="Email"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={(event)=>setEmail(event.target.value)}
        />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  <Button color="primary" round
                  onClick={()=>console.log(email, name)}>
                Go
              </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
