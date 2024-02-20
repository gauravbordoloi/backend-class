/**
 * Objects
 * Object.keys(student1) -> Get all the keys as array
 * Object.values(student1) -> Get all the values as array
 * JSON.parse() -> Converts string to Object
 * JSON.stringify() -> Covnerts object to string
 */

const student1 = {
    name: "Bibek",
    "age": 23,
    'cars': ['Bugati', "Hyundai"],
    "medical info": {
        blood_group: "AB+"
    }
}

// console.log(student1)

// console.log(`${student1.name} has the following cars - ${student1.cars}`)
// console.log(`${student1.name} blood group is - ${student1["medical info"].blood_group}`)


const var1 = "{ \"name\": \"Bibek\", \"age\": 54 }"
const var2 = JSON.parse(var1)

console.log(typeof var1)
console.log(typeof var2)
console.log(JSON.stringify(var2))