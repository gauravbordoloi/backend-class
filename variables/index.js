
//Single line comment

/*
This is a multiline comment
*/

/**
 * 
 * Variables
 * Variables can be defined using 'var', 'let' or 'const'
 * 'const' variables cannot be changed again once defined
 * 
 */

let name = "Bibek"
var name1 = "bibek Deka"
const name2 = "Gaurav"

name = "ABC"
name1 = "Gaurav"

//Const cannot be reassigned
//name2 = "Arnold"

//console.log(name2)


var studentMarks = 24

//console.log(studentMarks)


const n1 = "5"
const n2 = 5

/**
 * == -> No strict Type check, performs equality by converting type if necessary 
 * === -> Strick type check and value check
 */

console.log("n1 == n2 : " + (n1 == n2))
console.log("n1 === n2 : " + (n1 === n2))
