/**
 * Given an array of numbers, convert the array elements such that
 * all numbers divisble by 3 are multiplied by itself 3 times and 
 * numbers divisible by 5 are multiplied by itself 5 times
 * Note - Greater number are prioritizied first
 */

let arr = [3, 5, 85, 1235, 87, 24, 45, 6545, 26, 452, 4]

// let newArr = [9, 5^5, ......]

let newArr = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
        newArr.push(arr[i] * arr[i] * arr[i] * arr[i] * arr[i])
    } else if (arr[i] % 3 === 0) {
        newArr.push(arr[i] * arr[i] * arr[i])
    } else {
        newArr.push(arr[i])
    }
}

console.log(newArr)
