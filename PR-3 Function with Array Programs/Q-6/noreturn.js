// Q-6 : Swapping of two variables (No-Return With Parameter)

function swapNR(a, b) {
    let temp = a;
    a = b;
    b = temp;

    console.log("After Swap (No-Return) — A =", a, "B =", b);
}

let x = +prompt("Enter A:");
let y = +prompt("Enter B:");
swapNR(x, y);
 