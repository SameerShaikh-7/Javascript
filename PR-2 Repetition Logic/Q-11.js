let num=7;
let prime=true;
if(num<=1)prime=false;
for(let i=2;i<num;i++){
if(num%i===0){
prime=false;
break;
}
}
console.log(prime?"Prime Number":"Not Prime");
