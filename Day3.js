/*
1. JS Functions 
2.  Function Path 
3.  Function Intro 
4.  Function Invocation 
5.  Function Parameters 
6.  Function Returns 
7.  Function Arguments 
8.  Function Expressions 
9.  Function Arrow 
10.  Function Quiz 
11.  JS Timers
*/

function add(a,b){
    return a+b;
}
const sub = function(a,b){
    return a-b;
};
const multiply = (a,b) => a*b;

function divide(a,b){
    return a/b;
}
console.log(add(1,2));
console.log(sub(1,2));
console.log(multiply(1,2));
console.log(divide(1,2));

function tocelsius(a) {
    return (5 / 9) * (a - 32);
}

function tofarenhiet(a) {
    return (9 / 5) * a + 32;
}
console.log(tocelsius(10));
console.log(tocelsius(10));


function countCharacters(text){
    return text.length;
}
function getFirstCharacter(text){
    return text[0];
}
function getLastCharacter(text){
    return text[text.length-1];
}
function reverseString(text) {
    return text.split('').reverse().join('');
}
let word = "JavaScript";

console.log(countCharacters(word));
console.log(getFirstCharacter(word));
console.log(getLastCharacter(word));
console.log(reverseString(word));

//Student Grade System
function calculateGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function isPassing(marks) {
    return marks >= 60;
}

function getStudentResult(name, marks) {
    let grade = calculateGrade(marks);
    let passing = isPassing(marks);

    let result;

    if (passing) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    return `${name} scored ${marks} and received grade ${grade}. Result: ${result}.`;
}

// Testing
console.log(getStudentResult("Navtej", 95));
console.log(getStudentResult("Alex", 82));
console.log(getStudentResult("Sam", 73));
console.log(getStudentResult("John", 55));
console.log(getStudentResult("Mike", 40));