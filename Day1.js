/*JS Home
JS Introduction
JS Where To
JS Output
JS Syntax
JS Operators
JS If Conditions
JS Loops
*/

let name = "navtej";
let age = 16;
let country = "india";
let favnum = 9;
console.log("My name is "+name+", I am "+age+" years old, I live in "+
    country+", and my favorite number is "+favnum);

let number = 17;
if(number%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}

for(let i =1;i<=30;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }else if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

let num = 17;
console.log(num);
let even = (num%2==0);
console.log("Even: "+even);
let positive = num>0;
console.log("Positive: "+positive);
let greater10 = num>10;
console.log("Greater than 10: "+greater10);
let less100 = num<100;
console.log("Less than 100: "+less100);

