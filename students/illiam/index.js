// Print 0 to 100 in reverse/* 

// for (let i = 100; i >= 0; i--) {
//   console.log(i)
// }

/* 
* Write a loop from i to 100
* When the sum of the loop reaches 500, exit from the loop
 */

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
  if (sum >= 500) {
    break;
  }
}
console.log(sum);
