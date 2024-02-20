/**
 * Strings
 */

let student = "Bibek Deka is a student"

//Print all the characters in a string
for (let i = 0; i < student.length; i++) {
    console.log(student[i])
}

//Get a particular character at a poosition
console.log("Char at position 2 is : " + student.charAt(2))

console.log("String from 3 to 8 is : " + student.slice(3, 8))

console.log("String from 3 to end is : " + student.slice(3))

//Split functions
//returns an Array
console.log(student.split(" "))
console.log("Good Mornning Bibek".split("o"))

//Converts to lowercase
//student.toLowerCase()

//Converts to uppercase
//student.toUpperCase()

//endsWith, startsWith
console.log("Is starting with B : " + student.toLowerCase().startsWith("b"))
console.log("Is ending with t : " + student.endsWith("t"))