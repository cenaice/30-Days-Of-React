// index.js
import React from "react";
import ReactDOM from "react-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
      <h1>Subscribe</h1>
      <p>Sign up with your email address to receive news and updates</p>
    </div>
    <div className="input_box-wrapper" style={inputBoxStyle}>
    <TextField id="first_name" label="First Name" variant="filled" />
    <TextField style={buttonSpace} id="last_name" label="Last Name" variant="filled" />
    <TextField style={buttonSpace} id="email" label="Email" variant="filled" />
    </div>
    <div className="subscribe-wrapper" style={subscribeStyle}>
      <Button variant="contained">Subscribe</Button>
    </div>
  </div>
);

// User Card

const userCard = <div></div>;

// JSX element, app
const app = (
  <div className="app">
    {main},{userCard}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
