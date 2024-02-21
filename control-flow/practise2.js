/**
 * https://codercampy.com/print-all-subarrays-with-0-sum/
 * Input:  arr = [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7]
Output: 
Subarray found from Index 2 to 4
Subarray found from Index 2 to 6
Subarray found from Index 5 to 6
Subarray found from Index 6 to 9
Subarray found from Index 0 to 10
 */

const arr = [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7]
const temp = []

for (let i = 0; i < arr.length; i++) {
    var sum = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
        sum += arr[j]
        if (sum === 0) {
            // start - i
            // end - j
            temp.push(i + " to " + j)
        }
    }
}

console.log(temp)