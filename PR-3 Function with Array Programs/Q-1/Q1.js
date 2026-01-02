// Using simple function

function checkNumber() {
    let a = +prompt("Enter any number...")

    if (a > 0) {
        console.log(a + " number is positive");
    }

    else if (a < 0) {

        console.log(a + " number is negative");


    }
    else {
        console.log("Invalid Choice");

    }


}

checkNumber(); 

