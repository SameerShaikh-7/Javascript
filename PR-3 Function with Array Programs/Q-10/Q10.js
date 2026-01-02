// Q-10 : Check voting eligibility (all function)

function checkVoting() {

    let age = +prompt("Enter your age:");

    if (age >= 18) {
        console.log("You are eligible for voting");
    } else {
        console.log("You are not eligible for voting");
    }
}

checkVoting();
