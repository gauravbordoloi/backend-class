/**
 * arrays
 * push() - add an item to the last of the array
 * pop() - removes an item from the lasty of the array
 * slice() - returns a copy, doesn't change the original array
 * splice() - delete items from an array and returns the deleted
 */

const arr1 = [10, 20, 30, 40, 50]

const arr2 = new Array()

for (let i = 60; i <= 100; i += 10) {
    arr1.push(i)
}

console.log(arr1)

let lastItem = arr1.pop()

console.log("Last Item : " + lastItem)
console.log(arr1)

let lastItem2 = arr1.pop()

console.log("Last Item : " + lastItem2)

//Lenght of the array
//arr1.length

console.log("Slicing from 3rd position : " + arr1.slice(3))
console.log(arr1)


for (let i = 0; i < 20; i++) {
    arr2.push(i)
}

console.log("arr2 - " + arr2)
console.log("arr2 splicing from 5 to 15 - " + arr2.splice(5, 10))
console.log(arr2)