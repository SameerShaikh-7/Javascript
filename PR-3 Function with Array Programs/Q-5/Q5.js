// Q-5 : Write a JavaScript program to add, subtract, multiply, divide two numbers (using simple function)

function calculate() {

    let a = +prompt("Enter 1st number:");
    let b = +prompt("Enter 2nd number:");

    console.log("Addition = " + (a + b));
    console.log("Subtraction = " + (a - b));
    console.log("Multiplication = " + (a * b));
    console.log("Division = " + (a / b));
}

calculate();
