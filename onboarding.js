/* JS BASIC EXERCISES */

/* DIFFICULTY: EASY */
/* 1 */
const myName = "Martin"

console.log(myName)

/* 2 */
const lastName = "Sanchez Ruiz"

console.log(lastName)

/* 3 */
let myAge = 26

console.log(myAge)

/* 4 */
const myPet = "Zeus"

console.log(myPet)

/* 5 */

const agePet = 12

console.log(agePet)

/* 6 */
const fullName = myName + " " + lastName

console.log(fullName)

/* 7 */
const presentationText = `My name is ${fullName}, I am ${myAge} years old and my dog's name is ${myPet}`

console.log(presentationText)


/* DIFFICULTY: MEDIUM */

let sumAges = myAge + agePet

console.log(sumAges)

let subtractAges = myAge - agePet

console.log(subtractAges)

let productAges = myAge * agePet

console.log(productAges)

let divisionAges = myAge / agePet

console.log(divisionAges)

const student = {
    name: myName,
    lastName: lastName,
    age: myAge,
    birthDate: "20/11/1997",
    todayIsPresent: true
}

console.table(student)

const fruits = ["orange", "apple", "grapes", "strawberry", "berry", "pear"]

console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}


/* DIFFICULTY: HIGH */

    /* 1 */

const age = parseInt(prompt("How old are you?: "))

iAmAdult = age > 18

console.log(`I am an adult: ${iAmAdult}`)


    /* 2 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])      
}

    /* 3 */

const family = [{firstName: "Martin", relation: "Son", age: 26}, {firstName: "Carolina", relation: "Son", age: 30}, {firstName: "Juan", relation: "Son", age: 28}, {firstName: "Rogelio", relation: "Father", age: 56}, {firstName: "Anita", relation: "Mother", age: 50}, {firstName: "Marcela", relation: "Grandmother", age: 69}]

console.log(family)

for (let i = 0; i < family.length; i++){
    console.log(family[i])
}

/* 4 */

const randomText = fruits[1] + " " + numbers[3] + " " + family[5].firstName

console.log(randomText)



/* CONDITIONALS EXERCISES */

/* DIFFICULTY: LOW */
/* 1 */
let num1 = 4
let num2 = 5

if (num1 > num2){
    console.log(num1)
}else{
    console.log(num2)
}

/* 2 */
if (num1 > num2){
    console.log(num1)
} else if (num2 > num1){
    console.log(num2)
} else {
    console.log("The numbers are equal")
}

/* 3 */
if (num1 == num2){
    console.log("The numbers are equal")
} else {
    console.log("The numbers are different")
}


/* 4 */
let date1 = "2018-9-2"

let date2 = "2023-7-5"

if (date1 > date2){
    console.log(`The date ${date1} is greater than ${date2}`)
} else if(date2 > date1){
    console.log(`The date ${date2} is greater than ${date1}`)
} else {
    console.log("The dates are the same")
}

/* 5 */
date1 = "2022-12-18"

date2 = "2022-12-18"

if (date1 > date2){
    console.log(`The date ${date1} is greater than ${date2}`)
} else if(date2 > date1){
    console.log(`The date ${date2} is greater than ${date1}`)
} else {
    console.log("The dates are the same")
}

/* 6 */
let number1 = 5

let number2 = 7

let number3 = 9

if (number1 > number2 && number1 > number3){
    console.log(`The number ${number1} is the largest`)
} else if (number2 > number1 && number2 > number3){
    console.log(`The number ${number2} is the largest`)
} else{
    console.log(`The number ${number3} is the largest`)
}

/* DIFFICULTY: MEDIUM */
/* 1 */
let color = prompt("Enter a color (red, blue, or green):");

switch (color) {
    case "red":
        console.log("The color of passion");
        break;

    case "blue":
        console.log("The color of the sea.");
        break;

    case "green":
        console.log("The color of nature");
        break;

    default:
        console.log("Invalid color");
}


/* 2 */
let firstNumber = parseInt(prompt("Enter first number: "))

let secondNumber = parseInt(prompt("Enter the second number: "))

let operation = prompt("Introduce an operation (addition, subtraction, multiplication, division: ")

switch (operation){
    case "addition":
        console.log(`The sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`)
        break;
    
    case "subtraction":
        console.log(`The subtraction between ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`)
        break;
    
    case "multiplication":
        console.log(`The result of multiplying ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber} `)
        break;

    case "division":
        console.log(`The result of dividing ${firstNumber} and ${secondNumber} is ${firstNumber / secondNumber}`)
        break;        
}


/* 3 */
let person1 = {
    name: "Juan",
    age: 39,
    height: 1.69
}

let person2 = {
    name: "Rosa",
    age: 26,
    height: 1.57
}

let tallerPerson = " "
let olderPerson = " "

if(person1.age > person2.age){
    olderPerson = person1.name
} else {
    olderPerson = person2.name
}

if (person1.height > person2.height){
    tallerPerson = person1.name
} else {
    tallerPerson = person2.name
}

console.log(`${tallerPerson} is taller and ${olderPerson} is older`)


/* 4 */
let driverName = prompt("Whats your name?: ")

let driverAge = parseInt(prompt("How old are you?: "))

let driverHeight = parseInt(prompt("What your height (cm)?: "))

let driverVision = parseInt(prompt("Vision range?: "))

let driverQualified = "not qualified"

if(driverAge >= 18 && driverHeight > 110 && driverVision >= 8 && driverVision <= 10){
    driverQualified = "qualified"
}

console.log(`You are ${driverQualified} to drive`)


/* 5 */
let ageRange = parseInt(prompt("Enter your age: "));

let ageGroup = "";

if (ageRange >= 0 && ageRange <= 12) {
    ageGroup = "infant";
} else if (ageRange >= 13 && ageRange <= 18) {
    ageGroup = "adolescent";
} else if (ageRange >= 19 && ageRange <= 45) {
    ageGroup = "young adult";
} else if (ageRange <= 100) {
    ageGroup = "elderly";
} else {
    ageGroup = "Is he really that old?";
}

alert(`You are ${ageGroup}`);


/* 6 */
let numberTimes = parseInt(prompt("Enter a number from 1 to 3: "))

let numberMultiplied = parseInt(prompt("Enter another number: "))
switch (numberTimes) {
    case 1:
        alert(`The number entered is ${numberMultiplied}`);
        break;
    case 2:
        alert(`Twice the number entered is ${numberMultiplied * 2}`);
        break;
    case 3:
        alert(`Three times the number entered is ${numberMultiplied * 3}`);
        break;
    default:
        alert("That value is not allowed");
}


/* DIFFICULTY: HARD */
/* 1 */
let customerName = prompt("Enter your name:")

let passType = prompt("Enter your pass type (vip or normal):")

let hasEntry = prompt("Do you have an entry ticket? (yes or no):")

if (customerName == "Martin" || passType == "vip"){
    alert("Welcome, valued customer!");
} else if (hasEntry == "yes"){
    let useEntry = prompt("Do you want to use your entry ticket? (yes or no):")
    
    if (useEntry == "yes") {
        alert("Welcome!")
    } else {
        alert("Farewell.")
    }
} else{
    let wantToBuy = prompt("Do you want to buy a ticket?: ")

    if(wantToBuy == "no"){
        alert("Farewell :(")
    } else{
        let money = prompt("Available money?")

        if (money > 1000){
            alert("Sale successful! Welcome!")
        } else{
            alert("Sale rejected. You need more money.")
        }
    }
}
