
// Using no return with parameter

function checkNumberQ2 (a)
{
    if (a > 0)
    {
        console.log(a + " Number is Positive")
    }
    else if (a < 0 )
    {
        console.log( a + " Number is Negative");
        
    }
    else{
        console.log("Invalid Choice !");
        
    }
}


let n = +prompt("Q-2 | Enter Any Number :")
checkNumberQ2(n)

