// Functional Programming allows you to write shorter code, clean code, and to solve complicated problems that might be difficult to solve in the traditional way

/* List of all JavaScript functional programming methods:
 forEach
 map
 filter
 reduce
 find
 findIndex
 some
 every 
 */


// Use forEach() when we iterate through an array of items. Use forEWach if you are interested in each item or index or both
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
const newCountries = []
countries.forEach((country) => newCountries.push(country))

console.log(newCountries) // ["Finland", "Estonia", "Sweden", "Norway"]

const numbers = [1, 2, 3, 4, 5]
let sum = 0
numbers.forEach((n) => sum += n)
console.log(sum) // 15

// map() We use the map method whenever we like to modify an array. We use the map method only with arrays and it always returns an array.
const mappedCountries = countries.map((country) => country.toLowerCase())
console.log(mappedCountries)
const lengthCountries = countries.map((country) => country.length)
console.log(lengthCountries)

// filter() : filters out items based on some criteria. The filter method like forEach and map is used with an array and it returns an array of the filtered items.
const countriesWithLand = countries.filter((country) => country.includes("land"))
console.log(countriesWithLand)

// reduce() :  use the reduce method to sum all numbers in an array together, or to multiply items in an array or to concatenate items in an array. Let us see the following different example to make this explanation more clear.
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sumVal = nums.reduce((accumulated, cur) => accumulated + cur)
console.log(sumVal)

// find() : interested in the first occurrence of a certain item or element in an array we can use find method. Unlike map and filter, find just return the first occurrence of an item instead of an array.
const firstEvenNumber = numbers.find((n) => n % 2 === 0)
const firstOddNumber = numbers.find((num) => n % 2 !== 0)

// findIndex() : works like find but findIndex returns the index of the item. If we are interested in the index of a certain item or element in an array we can use findIndex. The findIndex return the index of the first occurrence of an item.
const firstEvenInd = numbers.findIndex((n) => n % 2 === 0)
const firstOddInd = numbers.findIndex((num) => n % 2 !== 0)

// some() : If one or some of the items satisfy the criteria the result will be true else it will be false. Let us see it with an example.

const evens = [0, 2, 4, 6, 8, 10]
const someAreEvens = evens.some((n) => n % 2 === 0)
const someAreOdds = evens.some((n) => n % 2 !== 0)
console.log(someAreEvens) // true
console.log(someAreOdds) // false

// every() : The method every is somehow similar to some but every item must satisfy the criteria. The method every like some returns a boolean.

const allAreEvens = numbers.every((n) => n % 2 === 0)
const allAreOdd = numbers.every((n) => n % 2 !== 0)

console.log(allAreEven) // false
console.log(allAreOdd)  // false