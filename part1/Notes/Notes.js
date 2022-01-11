//https://fullstackopen.com/en/part1/java_script

// Variables---------------------
const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
x = 4               // causes an error

// Arrays--------------------------

const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})                    

// forEach: is used to iterate through the items of an array

// concat: takes an old array copies it, adds values to the end and creates a new one 

const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed

// map: (is super useful) Also creates a new array based on the old array

//ex.1

const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed

//ex.2

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

// Assigning array elements

const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t // you need the ellipses

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed

// Objects ---------------------

const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age' 
console.log(object1[fieldName])    // 35 is printed

object1.address = 'Helsinki'
object1['secret number'] = 12341


// Functions ----------------------

const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

const result = sum(1, 5)
console.log(result)

const square = p => {
  console.log(p)
  return p * p
}
//Functions can be defined in a single line with no brackets or parentheses

const square = p => p * p

//Functions inside maps

const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
  // tSquared is now [1, 4, 9]

// Referencing Functions

//ex.1
function product(a, b) {
  return a * b
}

const result = product(2, 6)
// result is now 12


//ex.2
const average = function(a, b) {
  return (a + b) / 2
}

const result = average(2, 5)
// result is now 3.5

//ex.3
const square = p => {
  console.log(p)
  return p * p
}

