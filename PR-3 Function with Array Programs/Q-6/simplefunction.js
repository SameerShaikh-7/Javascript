// Q-6 : Swapping of two variables (Simple Function)

function swapSimple() {
    let a = +prompt("Enter A:");
    let b = +prompt("Enter B:");

    let temp = a;
    a = b;
    b = temp;

    console.log("After Swap (Simple) — A =", a, "B =", b);
}

swapSimple();
