let arr = []

let arrFiveElements = [0,1,2,3,4,5,6,]

console.log("3. Length of Array ", arrFiveElements.length)
firstItem = arrFiveElements[0]
lastItem = arrFiveElements[arrFiveElements.length-1]
middleItem = arrFiveElements[Math.floor(arrFiveElements.length / 2)]


// 5.

let mixedDataTypes = [1, "1", true, 5.346, [1,2,3]]


// Level 3


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()
minAge = ages[0]
maxAge = ages[ages.length-1]
middleAge = ages[Math.floor(ages.length/2)]
averageAge = ages.reduce((accumulator, currVal) => {
    return accumulator + currVal
}, 0) / ages.length
console.log(averageAge)


// Exercuse Create a function called getPersonInfo. The getPersonInfo function takes an object parameter. 
// The structure of the object and the output of the function is given below. 
// Try to use both a regular way and destructuring and compare the cleanness of the code. 
// If you want to compare your solution with my solution, check this link.
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
    getPersonInfo: function(param) {
        console.log(person.firstName, person.lastName, person.age, person.country)
    }
  }

let {firstName, lastName, age} = person
console.log(firstName,lastName,age)

  
