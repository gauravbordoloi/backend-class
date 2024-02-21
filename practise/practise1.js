/**
 * https://codercampy.com/check-if-pair-with-given-sum-exists-in-array-two-sum/
 */

let arr = [0, -1, 2, -3, 1]
let x = -2

var found = false
for (let i = 0; i < arr.length; i++) {
    // i = 0
    for (let j = i + 1; j < arr.length; j++) {
        //j = 1
        if (arr[i] + arr[j] === x) {
            found = true
            break
        }
    }

    if (found) {
        break
    }

}

console.log(found ? "Yes" : "No")