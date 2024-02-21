/**
 * If-Else
 */

var name = "Bibek"
var age = 25

if (age > 60) {
    console.log(`${name} is a senior citizen`)
} else if (age > 18) {
    console.log(`${name} can vote`)
} else if (age > 21) {
    console.log(`${name} can go to wine shop`)
} else {
    console.log(`${name} can't vote`)
}

/**
 * Elvis operator
 */

const bibekCanVote = age > 18 ? "Yes" : "No"
console.log(`Can ${name} vote? : ${bibekCanVote}`)



/**
 * switch
 */

const a1 = 54
const a2 = 65

const i = "aqslwhjdfueghr"

var value;

switch (i) {
    case "+":
        value = a1 + a2
        break;
    case "-":
        value = a1 - a2
        break
    case "/":
        value = a1 / a2
        break
    case "*":
        value = a1 * a2
        break
}

console.log(`${a1} ${i} ${a2} = ${value}`)