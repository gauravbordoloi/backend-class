//Write a program to find sum of all odd numbers between 1 to 100

var sum = 0

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        sum += i
    }
}

console.log(sum)