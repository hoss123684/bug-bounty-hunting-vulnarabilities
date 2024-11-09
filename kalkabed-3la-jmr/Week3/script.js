// JavaScript Basics Overview

// 1. Declaring Variables
let name = "John"; // 'let' declares a variable with block scope, allowing reassignment
const age = 30; // 'const' declares a constant that cannot be reassigned
var city = "New York"; // 'var' is an older way to declare variables, with function or global scope

// 2. Data Types
let isAdult = true; // Boolean data type, true or false
let score = 95.5; // Number data type, for integers and floating-point numbers
let greeting = "Hello!"; // String data type, for sequences of characters
let unknownValue = null; // Null, represents the intentional absence of any value
let notDefined; // Undefined, indicates a variable that has been declared but not assigned

// 3. Functions
// Function declaration syntax, defining a reusable block of code
function greet(userName) {
    console.log("Hello, " + userName + "!");
    // console.log prints output to the console
}

// Arrow function syntax, a modern alternative to function expressions
const add = (num1, num2) => num1 + num2; 
// Arrow functions provide a shorter syntax and do not have their own 'this' context

// Calling functions
greet(name); // Calls the 'greet' function with 'name' as an argument
let sum = add(5, 10); // Calls 'add' function and stores the result in 'sum'

// 4. Objects
// Creating an object to represent an entity with properties and methods
const person = {
    firstName: "Alice", // Property with a string value
    lastName: "Doe",
    age: 25,
    greet: function() {
        console.log("Hi, I'm " + this.firstName); // 'this' refers to the object itself
    }
};

// Accessing object properties and calling a method
console.log(person.firstName); // Accesses the 'firstName' property of 'person'
person.greet(); // Calls the 'greet' method of 'person'

// 5. Arrays
// An array is a collection of elements, which can be any data type
let fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
console.log(fruits[0]); // Array indexing starts at 0, so this outputs "Apple"

// Adding elements
fruits.push("Date"); // Adds a new element at the end of the array

// Looping through arrays
for (let fruit of fruits) {
    console.log(fruit); // Logs each fruit in the 'fruits' array
}

// 6. Conditional Statements
let time = 18; // 18 represents 6 PM in 24-hour format

// if-else statement to execute code based on a condition
if (time < 12) {
    console.log("Good morning");
} else if (time < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}

// Switch statement to match multiple conditions
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break; // Break exits the switch block if this case is true
    case "Friday":
        console.log("Almost the weekend!");
        break;
    default:
        console.log("Midweek days!");
        break;
}

// 7. Loops
// For loop, typically used when the number of iterations is known
for (let i = 0; i < 5; i++) {
    console.log(i); // Logs numbers from 0 to 4
}

// While loop, used when the condition is checked each time before the loop executes
let counter = 0;
while (counter < 3) {
    console.log("Counter is at " + counter);
    counter++; // Increments 'counter' by 1 after each loop iteration
}

// Do-while loop, which executes at least once before checking the condition
let count = 0;
do {
    console.log("Count is at " + count);
    count++;
} while (count < 2);

// 8. Error Handling
try {
    // Code that may throw an error
    let result = unknownFunction(); // 'unknownFunction' is not defined
} catch (error) {
    // Code to handle the error
    console.log("An error occurred: " + error.message);
} finally {
    console.log("Execution completed"); // Executes regardless of an error occurring or not
}

// 9. Working with the DOM (Document Object Model)
// This code requires an HTML page with elements having IDs 'button' and 'output'

// Selecting an element by ID
const button = document.getElementById("button");
const output = document.getElementById("output");

// Adding an event listener to the button
button.addEventListener("click", () => {
    output.textContent = "Button was clicked!";
    // Changes the text content of the element with ID 'output'
});

// 10. Async JavaScript
// Asynchronous programming allows tasks to be handled concurrently

// Using setTimeout to delay code execution by 2 seconds (2000 milliseconds)
setTimeout(() => {
    console.log("This message is delayed by 2 seconds");
}, 2000);

// Fetching data from an API (example only, will not run without a live URL)
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json()) // Parses the JSON response
    .then(data => console.log(data)) // Logs the received data
    .catch(error => console.log("Error fetching data: " + error.message));

// 11. Classes (ES6 feature for object-oriented programming)
// Defining a class with a constructor and a method
class Animal {
    constructor(name, type) {
        this.name = name; // 'this' refers to the instance being created
        this.type = type;
    }

    speak() {
        console.log(`${this.name} says hello!`);
    }
}

// Instantiating an object from the Animal class
const dog = new Animal("Buddy", "Dog");
dog.speak(); // Calls the 'speak' method on the 'dog' instance

// 12. Modules (Common in modern JavaScript)
// Note: This requires setting up separate files and would typically be used in a Node.js or browser module setup

// Exporting a function (this would be in a separate file, e.g., 'utils.js')
// export function add(a, b) {
//     return a + b;
// }

// Importing the function in another file
// import { add } from './utils.js';
// console.log(add(2, 3)); // Outputs 5 if 'add' is imported correctly
