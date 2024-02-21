/**
 * https://codercampy.com/find-whether-an-array-is-subset-of-another-array/
 */

const arr1 = [11, 1, 13, 21, 3, 7]
const arr2 = [11, 3, 7, 1]

//simplest way

var isSub = true
for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
        isSub = false
        break;
    }
}


//long way

// const temp = {}
// // const obj = {
// //     '11': true,

// // }

// for (let i = 0; i < arr2.length; i++) {
//     temp[arr2[i]] = false
// }

// console.log(temp)

// for (let i = 0; i < arr1.length; i++) {

//     if (temp[arr1[i]] === false) {
//         temp[arr1[i]] = true
//     }

// }

// console.log(temp)

// const values = Object.values(temp)
// var isSubArray = true
// for (var i = 0; i < values.length; i++) {
//     if (values[i] === false) {
//         isSubArray = false
//         break
//     }
// }

// console.log(`Given array is subarray or not ? ${isSubArray ? "Yes" : "No"}` )