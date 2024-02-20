/**
 * Find all the duplicates count of an array
 */

const arr = [12, 54, 12, 666, 78, 12, 666, 78, 100, 100, 54, 76, 76, 54]
const group = {}

for (let i = 0; i < arr.length; i++) {
    //i = 0,
    if (group[arr[i]] !== undefined) {
        group[arr[i]]++
    } else {
        group[arr[i]] = 1
    }
}

console.log(group)