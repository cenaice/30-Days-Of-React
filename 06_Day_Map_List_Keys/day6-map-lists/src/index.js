import React from "react";
import ReactDOM from "react-dom";

// -------------------------------------------  Header Component --------------------------------------------------------------------------------------

const textStyle = {
  margin: "auto",
  width: "50%",
  padding: "10px",
  textAlign: "center",
};

const Header = () => {
  return (
    <div className="header-wrapper" style={textStyle}>
      <h1 style={textStyle}>30 Days of React</h1>
      <p style={textStyle}>Number Generator</p>
    </div>
  );
};

// ------------------------------------------- Main Component --------------------------------------------------------------------------------------

// Hexadecimal Generator

// Prime Checker

// program to check if a number is prime or not

// take input from the user

let isPrime = true;

function primeCheck(number) {
  // check if number is equal to 1
  if (number === 1) {
    return false;
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      return true;
    } else {
      return false;
    }
  }

  // check if number is less than 1
  else {
    return false;
  }
}

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const randHexGen_1 = [];
const arrayOfNums = [];
for (let i = 0; i <= 32; i++) {
  arrayOfNums.push(i)
  if (primeCheck(i)) {
    randHexGen_1.push(<div style={{color: "#FF0000"}}>{i}</div>)}
  else if (i % 2 === 0) {
    randHexGen_1.push(<div style={{color: "#008000"}}>{i}</div>)}
  else {
    randHexGen_1.push(<div style={{color: "#DE970B"}}><h1>{i}</h1></div>)
  }
}

const Main = () => {
  return <div className="main-wrapper"></div>;
};


const Numbers = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((number) => <div >{number}</div>)
  return list
}

// ------------------------------------------- App component -------------------------------------------
const App = () => (
  <div className="container">
    <Header />
    <Main />
    <Numbers numbers={randHexGen_1}/>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);