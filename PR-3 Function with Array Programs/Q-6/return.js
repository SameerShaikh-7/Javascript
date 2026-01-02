// Q-6 : Swapping of two variables (Return With Parameter)

function swapReturn(a, b) {
    let temp = a;
    a = b;
    b = temp;

    return { a, b };
}

let p = +prompt("Enter A:");
let q = +prompt("Enter B:");
let ans = swapReturn(p, q);

console.log("After swap: A =", ans.a, "B =", ans.b);

 