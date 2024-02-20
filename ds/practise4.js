//Write a JavaScript program to find all the unique values in a set of numbers.

const arr = ["1", "b", "1", "c", "d", "f", "d"]
const set = []

for (let i = 0; i < arr.length; i++) {
    if (!set.includes(arr[i])) {
        set.push(arr[i])
    }
}

console.log(set)