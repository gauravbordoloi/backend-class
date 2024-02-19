/**
 * Loops
 * 1. for
 * 2. while
 * 3. do-while
 */

/**
 * Print all the natural numbers from 1 to 100
 */

//break - to break from the loop
// for (var i = 0; i <= 100; i++) {
//     if (i === 50) {
//         console.log("Code is exiting, Cannot go further")
//         break
//     }
//     console.log(i)
// }


//continue - to cotinue to next iteration
// for (var i = 0; i <= 50; i++) {
//     if (i % 3 === 0) {
//         console.log("Skippinng " + i)
//         continue
//     }
//     console.log(i)
// }

/**
 * while
 */

// var i = -1
// while (i > 0) { //Always takes boolean value
//     console.log("Hey - " + i)
//     i--
// }

// var i = -1
// do {
//     console.log("Hey - " + i)
// } while (i > 0);

/**
 * Nested loops
 */

let column = 10
let row = 20

// for (let i = 0; i < row; i++) {
//     for (let j = 0; j < column; j++) {
//         process.stdout.write("-")
//     }
//     process.stdout.write("\n")
// }

//Program to find the sum of next numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    var sum = 0
    for (let j = i + 1; j < 10; j++) {
        sum += j
    }
    console.log(`Sum of ${i} to 10 is ${sum}`)
}

/**
 * Program to find the sum of numbers from 0 to 100
 */

var sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum)

/**
 * Write a loop from 1 to 100
 * When the sum of the loop reaches more than 500, exit from the code
 */