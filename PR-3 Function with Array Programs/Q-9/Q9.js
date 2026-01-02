// Q-9 : Check triangle valid hai ya nahi (angles se)

function checkTriangle() {

    let a = +prompt("Enter angle 1:");
    let b = +prompt("Enter angle 2:");
    let c = +prompt("Enter angle 3:");

    if (a + b + c === 180) {
        console.log("Triangle is valid");
    } else {
        console.log("Triangle is not valid");
    }
}

checkTriangle();
