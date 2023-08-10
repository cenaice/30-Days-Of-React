console.log("External Script Output")


// Basic Data Types
// Array
const arr = Array()
let arrr = new Array()

// Splitting array at different positions
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

// Different array methods Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

const eightXvalues = Array(8).fill('X') // it creates eight elements values filled with string 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

// indexOf(): To check if a value/item exist in an array. If it exists it returns the index else it returns -1.
// lastIndexOf(): It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
// includes(): To check if an item exist in an array. If it exist it returns the true else it returns false.
// toString(): Converts array to string
// join("space to divide"): It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

// let us check if a banana exist in the array
const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana') // 0
if (index != -1) {
    console.log('This fruit does exist in the array')
  } else {
    console.log('This fruit does not exist in the array')
  }


// Slice array elements
// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

const numbers = [1, 2, 3, 4, 5, 6]

let slicedNums = numbers.slice(1, 4) // -> [2,3,4] it doesn't include the ending position 4 but includes starting

// Splice(starting, number of times to be removed, number of items to be added..): Reverse of slice and removes. It takes three parameters:Starting position, number of times to be removed and number of items to be added.
let splicedNums = numbers.splice(3, 3, 7, 8, 9) // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// Push and Pop and Shift
const pushed = ['item1', 'item2', 'item3']
pushed.push('new item')
pushed.pop() // -> remove one item from the end
pushed.shift() // -> remove one item from the beginning
pushed.unshift(0) // -> add one item from the beginning
pushed.reverse() // -> reverse array order

// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]
  
  webTechs.sort()
  console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

  