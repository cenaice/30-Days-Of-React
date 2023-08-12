// index.js
import React from "react";
import ReactDOM from "react-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import avatar from "./images/asian-man.jpg";
import { spacing } from '@mui/system';
import Box from "@mui/material/Box";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// User Card

// USER CARD STYLING

const avatarStyle = {
  verticalAlign: "middle",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  padding: "10px",
};

// USER CALL HTML CODE

const userCard = (
  <Box className="userCard-wrapper">
    <Card variant="outlined">
      <Box className="user_info" m={5}>
        <img src={avatar} alt="Avatar" style={avatarStyle}></img>
        <Typography variant="h1" spacing="">Victer Phiathep</Typography>
        <svc data-testid="CheckCircleIcon"></svc>
        <Typography variant="body1">
          Junior Software Engineer, New York City
        </Typography>
      </Box>
      <Box className="user_skills" m={5}>
        <Typography variant="h3">Skills</Typography>
        <Box m={2}>
          <Chip label="ReactJS" color="primary" />
          <Chip label="TypeScript" color="primary" />
          <Chip label="MongoDB" color="primary" />
          <Chip label="NextJS" color="primary" />
          <Chip label="Python" color="primary" />
          <Chip label="HTML" color="primary" />
          <Chip label="CSS" color="primary" />
          <Chip label="JavaScript" color="primary" />
        </Box>
        <Typography varaint="subtitle2">Joined on Aug 12, 2023</Typography>
      </Box>
    </Card>
  </Box>
);

// ----------------------------------------------------------------------------------------------------

const mainWrapperStyles = {
  margin: "auto",
  width: "50%",
  backgroundColor: "#e3e3e3",
  padding: "30px",
  fontFamily: "Montserrat",
  borderRadius: "25px",
};

const textWrapperStyle = {
  textAlign: "center",
};

const inputBoxStyle = {
  textAlign: "center",
  padding: "10px",
  margin: "25px",
};

const subscribeStyle = {
  textAlign: "center",
  padding: "10px",
};

const buttonSpace = {
  marginLeft: "15px",
};

// Subscribe Box
const main = (
  <div className="main-wrapper" style={mainWrapperStyles}>
    <div className="text-wrapper" style={textWrapperStyle}>
      <Typography variant="h3">Subscribe</Typography>
      <Typography>Sign up with your email address to receive news and updates</Typography>
    </div>
    <div className="input_box-wrapper" style={inputBoxStyle}>
      <TextField id="first_name" label="First Name" variant="filled" />
      <TextField
        style={buttonSpace}
        id="last_name"
        label="Last Name"
        variant="filled"
      />
      <TextField
        style={buttonSpace}
        id="email"
        label="Email"
        variant="filled"
      />
    </div>
    <div className="subscribe-wrapper" style={subscribeStyle}>
      <Button variant="contained">Subscribe</Button>
    </div>
  </div>
);

// JSX element, app
const app = (
  <div className="app">
    {userCard},{main}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
