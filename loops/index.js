/**
 * Loops
 * 1. for
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
for (var i = 0; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log("Skippinng " + i)
        continue
    }
    console.log(i)
}