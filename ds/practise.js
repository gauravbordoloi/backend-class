/**
 * 1. Given an array, find the sum of all the elements
 */

const arr = [12, 121, 43242, 53, 5, 1332, 53, 3133, 5345, 213, 24]

var sum = 0
var temp = 1
for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i])
    sum = sum + arr[i] // 1 + 2
    temp = temp * arr[i]
}

console.log(sum)
console.log(temp)

// i = 0, arr[0] = 12
// i = 1, arr[1] = 121
// i = 2


var t2 = 0
for (let i = arr.length - 1; i >= 0; i--) {
    t2 += arr[i]
}

console.log(t2)