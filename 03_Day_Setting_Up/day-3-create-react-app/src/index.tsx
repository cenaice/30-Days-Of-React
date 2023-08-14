// index.js
import React from "react";
import ReactDOM from "react-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import avatar from "./images/asian-man.jpg";
import { spacing } from "@mui/system";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Header

const headerStyles = {
  backgroundColor: "#61DBFB",
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5,
};

// Day 4: Injecting dynamic data types using JSX elements and {} brackets

const welcome = "Welcome to 30 Days of React";
const date = "Aug 13, 2023";
const dynamic_data = "Example of Dynamic Data.";

const Header = () => (
  <header style={headerStyles}>
    <div className="header-wrapper">
      <Typography variant="h2">{welcome}</Typography>
      <Typography variant="body1">Getting Started React</Typography>
      <Typography variant="body2">
        Example of Static Data, {dynamic_data}
      </Typography>
      <Typography variant="caption">Asabeneh Yetayeh</Typography>
      <Typography variant="caption">{date}</Typography>
    </div>
  </header>
);

// React Component

// User Card/

// USER CARD STYLING

const avatarStyle = {
  verticalAlign: "middle",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  padding: "10px",
};

// USER CALL HTML CODE

// Day 4: Dynamic Data with map function

const techs = [
  "ReactJS",
  "TypeScript",
  "MongoDB",
  "NextJS",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
];
const techsFormatted: string = techs.map((tech) => (
  <Chip label={tech} color="primiary" />
));

const UserCard = () => (
  <Box className="userCard-wrapper">
    <Card variant="outlined">
      <Box className="user_info" m={5}>
        <img src={avatar} alt="Avatar" style={avatarStyle}></img>
        <Typography variant="h1" spacing="">
          Victer Phiathep
        </Typography>
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
const Main = () => (
  <div className="main-wrapper" style={mainWrapperStyles}>
    <div className="text-wrapper" style={textWrapperStyle}>
      <Typography variant="h3">Subscribe</Typography>
      <Typography>
        Sign up with your email address to receive news and updates
      </Typography>
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

// Day 4 Functional Small Component (button component, dumb component since it does not take any parameteres.)
const buttonStyles = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0",
  border: "none",
  borderRadius: 5,
};

// Day 4 Hexadecimal Color Generator

const HexaColorGenerator = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const ButtonComponent = () => <button style={buttonStyles}>Day4Example</button>;

// JSX element, app
// Day 4: We switched our JSX elements to functional React components by switching {header},{userCard} to <Header/><UserCard/>
// We also use arrow functions for all our React components/ sections

const app: React.JSX.Element = (
  <div className="app">
    <Header />
    <UserCard />
    <Main />
    <HexaColorGenerator />
    <ButtonComponent />
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
