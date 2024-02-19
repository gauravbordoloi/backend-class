/**
 * Operators ---------
 * Arithmetic operator
 * Relation operator
 * Assignment operator
 * Unary operator
 * Logical operator
 */

/**
 * Artihemtic operators
 * +
 * -
 * / -> Never divie by 0 (NaN)
 * *
 * % (Even odd can be calculated by finding the using modulus of 2 and if the result is 0 then it's even )
 */

//console.log(123/0)

/**
 * Relation operator (Ouput - Boolean)
 * >
 * <
 * >=
 * <=
 * ==
 */

var a1 = 54
var a2 = 65
// console.log("> " + (a1 > a2))
// console.log("< " + (a1 < a2))
// console.log(">= " + (a1 >= a2))
// console.log("<= " + (a1 <= a2))
// console.log("== " + (a1 == a2))

/**
 * Assignment operator
 * +=
 * -=
 * /=
 * *=
 * %=
 */

a1 += a2 // a1 = a1 + a2

console.log(a1)


/**
 * Unary operator
 * ++
 * --
 * pre-post
 */

/**
 * pre - It will first inncrement itself, then the rest code will execute
 * post - It will execute the ccode first and then first inncrement itself 
 */

var n = 55
//n--
//console.log(n)

console.log(n++)
console.log(n)

/**
 * Logical operator (Returns Boolean value)
 * AND
 * OR
 * NOT
 */

const m1 = 55
const m2 = 65

console.log("AND -> " + (m1 === 55 && m2 === 65))
console.log("AND -> " + (m1 === 45 && m2 === 65))
console.log("OR -> " + (m1 === 45 || m2 === 65))
console.log("NOT -> " + !(m1 === 45 || m2 === 65))