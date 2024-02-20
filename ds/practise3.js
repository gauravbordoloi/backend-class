//Write a program to cyclically rotate an array by one
//Eg If array is (1,2,3,4,5) then output should be (5,1,2,3,4)

// const arr = ["a", "b", "c", "d"]
// const newArr = []

// for (let i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1) {
//         let t = arr[0]
//         newArr[0] = t
//         newArr.push(t)
//     }
//     newArr.push(arr[i + 1])
// }

// console.log(newArr)

//Write a program to check if elements of an array are same or not it read from front or back

const arr = [1, 2, 3, 2, 1]

const reversedArr = []

for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i])
}

console.log("Reversed Array - " + reversedArr)

var isPalindrome = true
for (let i = 0; i < arr.length; i++) {
    //0 -> arr[i] = 1, reversedArr[i] = 1
    //1
    //2
    if (arr[i] !== reversedArr[i]) {
        isPalindrome = false
        break
    }
}

console.log("Is Plaindrome - " + isPalindrome)