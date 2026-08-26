//STRING AND NUMBER METHODS
//Number Manipulator
let number = 47.82;

console.log("Original:", number);
console.log("Rounded:", Math.round(number));
console.log("Floor:", Math.floor(number));
console.log("Ceil:", Math.ceil(number));
console.log("Square Root:", Math.sqrt(number));
console.log("Power of 2:", Math.pow(number, 2));
console.log("Absolute Value:", Math.abs(-number));
console.log("Random Number (0-1):", Math.random());
console.log("Remainder:", number % 5);


let str = "Javascript";
console.log("Original String:", str);
console.log("Length:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log(str.slice(0,1));
console.log(str[0]);
console.log(str.slice(-1));

// how to revrse a string in javascript
// To reverse a string in JavaScript, you can use the following method:

let arr = str.split('');
let reversedStr = arr.reverse().join('');
console.log("Reversed String:", reversedStr);

//Username 
let firstName = " NAVTEJ ";
let lastName = " REDDY ";

firstName = firstName.trim();
lastName = lastName.trim();

let username = firstName.toLowerCase() + "." + lastName.toLowerCase();
console.log("Username:", username);

//Word Counter
let sentence = "I am learning JavaScript every day";
console.log("Sentence:", sentence);
let wordCount = sentence.split(" ").length;
console.log("Word Count:", wordCount);
let charCount = sentence.split('').length;
console.log("Character Count:", charCount);
