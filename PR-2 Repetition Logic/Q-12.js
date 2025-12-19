let num=9;
let i=2;
let prime=true;
if(num<=1)prime=false;
while(i<num){
if(num%i===0){
prime=false;
break;
}
i++;
}
console.log(prime?"Prime Number":"Not Prime");
