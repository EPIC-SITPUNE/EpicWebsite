import React, {useEffect, Fragment} from "react";
//import Spinner from './loading'
import axios from 'axios'
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
import Slide from "@material-ui/core/Slide";
//import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";


import styles from "assets/jss/material-kit-react/views/loginPage.js";
import typo from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);
const useTypo = makeStyles(typo);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";


let message=null;

function loading(mess){
  if(mess===null){
    return <p>ok</p>
  }
  else{
    return 1

  }
}




export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [classicModal, setClassicModal] = React.useState(false);
  const [seats, setSeats] = React.useState(null);
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  
  function register(userName, userEmail){
    const userData={
      name: userName,
      email: userEmail
    }
    axios.post('https://frozen-beach-47944.herokuapp.com/api/users/register',userData) 
          .then(res => {alert(res.data.email); 
            if(res.data.email.localeCompare("Registration Successful")===0){
              window.location.reload(false);
          }})
  }


useEffect(() => {
  axios.get('https://frozen-beach-47944.herokuapp.com/api/users/seats') 
          .then(res => {
            if(res.data.seat>=50){
              setSeats(0)
            }else{
              setSeats(0);
            }
            })
  
});

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
                  <h1><b>{seats}</b> <small>Remaining</small></h1>
                  <h3><b>Apply to Waiting List</b></h3>
                      </div>
                    )
                  },
                  {
                    tabName: "Steps",
                    tabIcon: Step,
                    tabContent: (
                      <Fragment>
                      <p className={classes.textCenter}>
                        Step 1 : Register on the website.</p>
<p>Step 2 : You will get the Discord server link by mail. Join the server.</p>
<p>Step 3 : Read all the rules carefully.</p>
<p>Step 4 : Explore the server!</p> 
</Fragment>
                    )
                  },
                  {
                    tabName: "Benefits",
                    tabIcon: Info,
                    tabContent: (
                      <Fragment>
                      <p className={classes.textCenter}>
                        Your network. Build your network throughout the country with our network of mentors, industry experts and startups.
                      </p>
                      <p>Platform for discussion of innovative ideas with like minded people and a chance to get mentorship for the same  </p>
                      <p>A platform to build and get mentorship for the following skills:<ul>
                        <li>Coding
</li>
<li>Marketing</li><li>Stock Market</li><li>Finance</li><li>Sales</li></ul></p>
</Fragment>)
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
              <Button
                  color="primary"
                  round
                 onClick={async() => {await register(name, email); //await setClassicModal(true); 
                }}
                >
                  Go
                </Button>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <h4 className={classes.modalTitle}>Status</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    {loading(message)}
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button
                      onClick={() => setClassicModal(false)}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
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
