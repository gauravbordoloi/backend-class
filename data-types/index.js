/**
 * Data types
 * String
 * char
 * int
 * float
 * double
 * long
 */

/**
 * String
 */

var firstName = "Bibek"
var secondName = "Deka"

//String concatenation
//1st way
//console.log(firstName + " " + secondName)

//2nd way
//console.log(`The student\`s name is ${firstName} ${secondName}`)

// string replace

var name2 = "HELLO NAME, How are you"

//console.log(name2.replace("NAME", firstName + " " + secondName))

//Size of a string
//console.log(name2.length)


// Numbers
// const marks1 = 55
// const mark2 = 60
// const marks3 = 65

// const sum = marks1 + mark2 + marks3

// console.log("Sum is " + sum)

// const avg = sum / 3
// console.log(`Avg is ${avg}`)

const marks1 = 55.12
const mark2 = 60.45
const marks3 = 65

const sum = marks1 + mark2 + marks3

//console.log("Sum is " + sum)

const avg = sum / 3
//console.log(`Avg is ${avg}`)

//Converting string to number
// Addign string and any number will output string only
// var n1 = "54"
// var n2 = 46
// var n3 = 74
// console.log(n1 + n2 + n3) //output - 544674

var n1 = "54"
var n2 = 46
var n3 = 74
console.log(parseInt(n1) + n2 + n3)

const a1 = "54.64"
const a2 = 45
console.log(parseFloat(a1) + a2)

//Boolean

var isBibekAStudent = true
console.log(isBibekAStudent)