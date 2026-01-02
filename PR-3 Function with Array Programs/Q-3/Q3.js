// Write a JavaScript program to find which number is greter in 4 numbers using nested if else. (using simple function)


let a = +prompt("A) Enter any Number:")
let b = +prompt("B) Enter any Number:")
let c = +prompt("C) Enter any Number:")
let d = +prompt("D) Enter any Number:")


if (a>b) 
{
    if (a>c) 
    {
        if (a>d)
        {
            console.log(a +" (a) is greatest");
            
        }
        else
        {
            console.log(d + " (d) is greastest")
        }
    }
    else
    {
        if (c>d)
        {
            console.log(c + " (c) is greastest");
            
        }
        else
        {
            console.log(d + " (d) is greastest");
            
        }
    }
}
else
{
    if (b>c) 
    {
        if (b>d)
        {
           console.log(b + " (b) is greastest"); 
        }
        else
        {
            console.log(d + " (d) is greastest");
        }
    }
    else
    {
        if (c>d)
        {
            console.log(c + " (c) is greastest");
        }
        else
        {
            console.log(d + " (d) is greastest");
        }
    }
 
}