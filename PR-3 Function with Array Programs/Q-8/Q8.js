// Q-8 : Basic calculator using switch case (simple function)

function calculator() {

    let a = +prompt("Enter first number:");
    let b = +prompt("Enter second number:");
    let ch = prompt("Enter choice (+ , - , * , /)");

    switch (ch) {

        case "+":
            console.log("Answer =", a + b);
            break;

        case "-":
            console.log("Answer =", a - b);
            break;

        case "*":
            console.log("Answer =", a * b);
            break;

        case "/":
            console.log("Answer =", a / b);
            break;

        default:
            console.log("Invalid Choice");
    }
}

calculator();
