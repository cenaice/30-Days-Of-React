// Functions

const anonymousFun = function () {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
  }

//   Arrow Function
// Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

// Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.

// This is how we write normal or declaration function
//Let us change this declaration function to an arrow function
function square(n) {
    return n * n
  }
  
console.log(square(2)) // 4
  
const square = (n) => {
    return n * n
}
  
console.log(square(2)) // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square = (n) => n * n // -> 4

// Function with default parameters
function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Asabeneh'))

  // Destructring arrays to create variables

const constants = [2.72, 3.14, 9.81,37, 100]
const [e, pi, gravity, bodyTemp, boilingTemp] = constants
console.log(e, pi, gravity, bodyTemp, boilingTemp) // 2.72, 3.14, 9.81, 37,100

// Omit item by putting a comma in that index or three dots
const countries = ['Finland', 'Sweden', 'Iceland', 'Norway', 'Denmark']
const [fin, , ice, , den] = countries
console.log(fin, ice, den) // Finland, Iceland, Denmark

const props = {
    user:{
      firstName:'Asabeneh',
      lastName:'Yetayeh',
      age:250
    },
    post:{
      title:'Destructuring and Spread',
      subtitle:'ES6',
      year:2020
  },
  skills:['JS', 'React', 'Redux', 'Node', 'Python']
  
  }
  
  
  const {user, post, skills} = props
  const {firstName, lastName, age} = user
  const {title, subtitle, year} = post
  const [skillOne, skillTwo, skillThree, skillFour, skillFive] = skills



//   Spread or Rest Operator
//   When we destructure an array we use the spread operator(...) to get the rest elements as array. In addition to that we use spread operator to spread arr elements to another array.
  
//   Spread operator to get the rest of array elements

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
​
console.log(num1, num2, num3)
console.log(rest)