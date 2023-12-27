/* JS BASIC EXERCISES */
{
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

}

/* CONDITIONALS EXERCISES */
{
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
}

/* FUNCTIONS EXERCISES */
{
    /* DIFFICULTY: LOW */
    /* 1 */
    function add(){
        console.log(100 * 20)
    }

    /* 2 */
    add()

    /* 3 */
    function add(num1, num2){
        console.log(num1 + num2)
    }

    /* 4 */
    let num1 = 100
    
    let num2 = 20

    add(num1, num2)

    /* 5 */
    function add(num1, num2){
        result = num1 + num2

        return result
    }
    
    /* 6 */
    const add = (num1, num2) =>{
        console.log(num1 + num2)
    }

    /* DIFFICULTY: MEDIUM */
    /* 1 */
    function greet(name){
        console.log(`Hello, ${name}!`)
    }

    greet("Martin")

    /* 2 */
    const multiplication = (number1, number2) =>{
        return number1 * number2

    }

    let number1 = 10

    let number2 = 20

    console.log( multiplication(number1, number2) )

    /* 3 */
    function area(base, height){
        return base * height
    }

    let base = 10

    let height = 5

    console.log( area(base, height) )

    /* 4 */
    function perimeter(side1, side2, side3){
        return side1, side2, side3
    }

    let side1 = 5

    let side2 = 7

    let side3 = 6

    console.log( perimeter(side1, side2, side3) )

    /* 5 */
    function purchase(productPrice, productQuantity){
        let total = productPrice * productQuantity
        
        if( productQuantity >= 10){
            total *= 0.1
        } else if(productQuantity >= 20){
            total *= 0.2
        }

        return total
    }

    let productPrice = 1

    let productQuantity = 10

    console.log( purchase(productPrice, productQuantity) )


    /* 6 */
    function isAnAdult(age) {
    if (age >= 18) {
        return "You are an adult";
    } else {
        return "You are not an adult";
    }
    }

    console.log( isAnAdult(19) )
    console.log( isAnAdult(30) )
    console.log( isAnAdult(8) )

    /* DIFFICULTY: HARD */
    /* 1 */
    function calculateTax(income) {
        if (income <= 10000) {
            tax = income * 0.1;
        } else if (income <= 20000) {
            tax = income * 0.15;
        } else {
            tax = income * 0.2;
        }

        return tax;
        }
    
    console.log( calculateTax(5000) )
    console.log( calculateTax(15000) )
    console.log( calculateTax(25000) )

    /* 2 */
    function checkBusinessDay(day) {
        switch (day) {
            case 1:
                return "It is a business day.";
            case 2:
                return "It is a business day.";
            case 3:
                return "It is a business day.";
            case 4:
                return "It is a business day.";
            case 5:
                return "It is a business day.";
            case 6:
            case 7:
                return "It's the weekend.";
            default:
                return "Invalid day number.";
        }
    }

    console.log( checkBusinessDay(2) )
    console.log( checkBusinessDay(7) )
    console.log( checkBusinessDay(9) )


    /* 3 */
    function validatePersonalInfo() {
        let firstName = prompt("Enter your first name:")

        if (!firstName) {
            console.error("The name cannot be empty")
            return
        }

        let lastName = prompt("Enter your last name:");
        if (!lastName) {
            console.error("The last name cannot be empty")
            return
        }

        let age = prompt("Enter your age:")
        if (!age || isNaN(age)) {
            console.error("The age must be a valid number")
            return
        }

        const personalInfo = {
            firstName: firstName,
            lastName: lastName,
            age: parseInt(age) 
        }

        console.log("Personal information:", personalInfo);
    }

    validatePersonalInfo()
    /* 4 */
    function greetings(name){
        return `Hello, my name is ${name}`
    }

    function calculateAge(birthYear, currentYear){
        return currentYear - birthYear
    }

    function presentation(name, birthYear, currentYear){
        alert(greetings(name) + `. I am ${calculateAge(birthYear, currentYear)} years old`)
    }

    presentation("Martin", 1997, 2023)

}

/* LOOPS EXERCISES */
{
    /* DIFFICULTY: LOW */
    /* 1 */
    let number = parseInt(prompt("Enter a number: "))

    for(let i = number; i >= 0; --i){
        console.log(i)
    }

    /* 2 */
    let number2 = parseInt(prompt("Enter a number: "))

    for(let i = 1; i <= 10; i++){
        console.log(number2 * i)
    }

    /* 3 */
    let sum = 0

    let numberEntry

    while(numberEntry != 0){
        numberEntry = parseInt(prompt("Enter a number: "))

        sum += numberEntry
    }

    console.log(sum)

    /* 4 */

    do{
        numberEntry = parseInt(prompt("Enter a number: "))

        sum += numberEntry

    } while(numberEntry != 0)

    /* 5 */
    const person = {
        name: "Martin",
        lastName: "Sanchez",
        age: 26,
        height: 178,
        hobby: "Basket"
    }

    for(const key in person){
        console.log(key)
    }

    /* 6 */
    for(const key in person){
        console.log(person[key])
    }

    /* DIFFICULTY: MEDIUM */
    /* 1 */
    let numberTry = parseInt(prompt("Enter a number: "))

    let sumTry = 0

    while(numberTry != sum){
        
        if(numberTry > sum){
            console.log("the number entered is greater than the secret")
        } else{
            console.log("the number entered is lower than the secret")
        }
        
        numberTry = parseInt(prompt("Enter a number: "))
        
        sumTry += 1
    }

    console.log(`You got it right! The secret number was ${sum} and you made ${sumTry} attempts`)

    /* 2 */
    let divisibleNumber = parseInt(prompt("Enter a number: "))

    console.log("Divisors:")

    for(let i = 1; i<= divisibleNumber; i++){
        if(divisibleNumber % i === 0){
            console.log(i)
        }
    }

    /* 3 */
    function ringBells(){
        return "Ding Dong, "
    }
    
    let ringNumbers = parseInt(prompt("Enter a number: "))

    for(let i = 0; i < ringNumbers; i++){
        console.log(ringBells())
    }

    /* 4 */
    const dateLimit = "1997-8-3"

    const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

    for(let i = 0; i < dates.length; i++){
        if(dateLimit == dates[i] || dateLimit < dates[i]){
            console.log(dates[i])
        }
    }
    /* 5 */
    const colors = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"];

    for (const color of colors) {
        console.log(color);
    }

    /* 6 */

    function loop(array){
        for(const element of array){
            console.log(element)
        }
    }
    
    /* 7 */
    const numbersArray = [5, 7, 1, 10, 53, 27]

    for (const number of numbersArray){
        console.log(`The number is ${number} and its double is ${number * 2}`)
    }

    /* 8 */
    function familyPresentation(family) {
        for (const member of family) {
            console.log(`Hello, I am ${member.name} ${member.lastName} (${member.member}) and I am ${member.age} years old.`);
        }
    }
    
    const family = [
        { name: "Maria", lastName: "Lopez", age: 40, member: "mother" },
        { name: "Juan", lastName: "Perez", age: 38, member: "father" },
        { name: "Romina", lastName: "Perez", age: 13, member: "daughter" },
        { name: "Tomas", lastName: "Perez", age: 10, member: "son" },
    ];
    
    familyPresentation(family);

    /* DIFFICULTY: HARD */
    /* 1 */
    let evenSum = 0;

    let oddSum = 0;

    let numberType = parseInt(prompt("Enter a number: "));

    while (numberType !== 0) {
        if(numberType % 2 === 0){
            evenSum += numberType;
        } else{
            oddSum += numberType;
        }

        numberType = parseInt(prompt("Enter a number: "));
    }

    console.log("Even numbers:", evenSum);
    console.log("Odd numbers:", oddSum);


    /* 2 */
    const numbers = [1, 2, 3, 4, 5];

    let largestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }

    console.log(largestNumber)

}