// // changing case
var isavailable = false

var yourname = prompt("Enter your name:");
yourname = yourname.toLowerCase();

var students = ["ali", "asad", "bilal"];

for (let i = 0; i < students.length; i++) {
    if (students[i] === yourname) {
        console.log("Name found: " + yourname);
        isavailable = true 
    }
}

if (isavailable == false) {
    console.log("not available")
}

// // 1. Round to nearest integer
let numA = 8.8;
console.log(Math.round(numA));  
// // Output: 9

// // 2. Use Math.floor()
let numB = 5.9;
console.log(Math.floor(numB));  
// // Output: 5

// // 3. Use Math.ceil()
let numC = 3.2;
console.log(Math.ceil(numC));  
// // Output: 4

// // 1. Random number between 0 and 1
let randomNum = Math.random();
console.log(randomNum);
// // Output: random between 0 and 1

// // 2. Random whole number between 1 and 10
let randomWhole = Math.floor(Math.random() * 10) + 1;
console.log(randomWhole);
// // Output: 1–10 random

// // 3. Convert string to integer
let strNum1 = "100";
let intNum = parseInt(strNum1);
console.log(intNum);
// // Output: 100

// // 4. Convert string to decimal (float)
let strFloat = "3.141";
let floatNum = parseFloat(strFloat);
console.log(floatNum);
// // Output: 3.141

// // 1. Convert number to string
let numD = 250;
let str1 = numD.toString();
console.log(str1);
// // Output: "250"

// // 2. Convert string to number using Number()
let strNum2 = "45";
let numE = Number(strNum2);
console.log(numE);
// // Output: 45

// // 3. Round to 2 decimal places
let numF = 5.6789;
console.log(numF.toFixed(2));  
// // Output: 5.68

// // 4. Limit to 4 decimal places
let numG = 3.1415926535;
console.log(numG.toFixed(4));  
// // Output: 3.1416

let str = "Hello, World!";
console.log(str.length);
// // Output: 13

let string = "Hello, World!";
console.log(string.substring(7, 12));
// // Output: World

let sentence = "The cat is sleeping";
console.log(sentence.indexOf("sleep"));
// // Output: 8
