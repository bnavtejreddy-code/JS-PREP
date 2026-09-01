/* 
-  JS Objects 
-  Object Path 
-  Object Intro 
-  Object Properties 
-  Object Methods 
-  Object `this` 
-  Object Display 
-  Object Constructors 
-  JS Scope
*/
const person = {
 name : "NAvtej",
 age : 16,
 country : "India",
 isStudent : true
};

person.age = 19;
person.country = "US";
console.log(person.age);
console.log(person.name);
console.log(person.country);
person.hobby = "BB";
console.log(person.hobby);


const person1 = {
    name: "Navtej",
    age: 19
};
person1.introduce = function(){
    return ("hello, my name is "+ this.name + " and i am "+this.age+" years old");
}
person1.haveBirthday = function(){
    this.age = this.age+1;
    return this.age;
};
console.log(person1.introduce());
console.log(person1.haveBirthday());


const people = [
    { name: "Navtej", age: 19, country: "India" },
    { name: "Alex", age: 25, country: "USA" },
    { name: "Alexander", age: 22, country: "UA" },
    { name: "Man", age: 252, country: "UAE" },
];
for(let person of people){
    console.log(person.name);
}
let max = 0;
let maxname;
for(let person of people){
    if(person.age>max){
        maxname = person.name;
        max = person.age;
    }
}
console.log(max);
console.log(maxname);

for(let person of people){
    if(person.age >=18 ){
        console.log(person.name);
    }
}
let total =0;
for(let person of people){
    total +=person.age;
}
console.log("Average = "+ total/people.length);

function findPerson(name) {
    for (let person of people) {
        if (person.name === name) {
            return person;
        }
    }

    return null;
}

console.log(findPerson("Navtej"));
console.log(findPerson("Alex"));
console.log(findPerson("Man"));
console.log(findPerson("John"));


