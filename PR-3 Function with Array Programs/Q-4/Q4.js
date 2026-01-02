// Q-4 : Write a JavaScript program to find which number is greater in 4 numbers using ladder if-else (no-return with parameter function)

function findGreatest(a, b, c, d) {

    if (a > b && a > c && a > d) {
        console.log(a + " (a) is greatest");
    }
    else if (b > a && b > c && b > d) {
        console.log(b + " (b) is greatest");
    }
    else if (c > a && c > b && c > d) {
        console.log(c + " (c) is greatest");
    }
    else {
        console.log(d + " (d) is greatest");
    }
}

let n1 = +prompt("Enter 1st number:");
let n2 = +prompt("Enter 2nd number:");
let n3 = +prompt("Enter 3rd number:");
let n4 = +prompt("Enter 4th number:");

findGreatest(n1, n2, n3, n4);
