// Write a program to find simple interest



let p = +prompt("Enter the total amount : ")
let r = +prompt("Enter the rate of interest : ")
let n = +prompt("Enter the time in Months : ")



let formula = (p * r * n)/100;


console.log("Total Amount : ",p);
console.log("Rate of Interest : ",r);
console.log("Time in Months : ",n);

console.log(p," * ",r," * ",n," /100 =",formula );


