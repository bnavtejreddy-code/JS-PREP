/* JS Arrays
JS Sets
JS Maps
JS Iterations
JS Math
*/
const numbers = [2, 4, 4, 6, 8, 10];
const newarr  = numbers.map(num => num*3);
const newarr2 = numbers.map(num => num**2);
console.log(numbers);
console.log(newarr);
console.log(newarr2);

const numbers1 = [12, 5, 8, 21, 3, 16, 10, 7];
const newarr3 = numbers1.filter(num => num> 10);
const newarr4 = numbers1.filter(num => num%2===0);
console.log(numbers1);
console.log(newarr3);
console.log(newarr4);


const numbers3 = [10, 20, 30, 40, 50];
const total = numbers3.reduce((sum, num) => {
    return sum + num;
}, 0);
const avg = total/numbers3.length;
const maxi = numbers3.reduce((max,num) => {if(num>max){
                        max=num;
                        return max;
                    }},0);
console.log(total);
console.log(avg);
console.log(maxi);

const students = [
    { name: "Navtej", marks: 85 },
    { name: "Alex", marks: 72 },
    { name: "Sam", marks: 91 },
    { name: "John", marks: 58 },
    { name: "Mike", marks: 76 }
];


const names = students.map(student => student.name);
console.log("Names:", names);


const highScorers = students.filter(student => student.marks >= 80);
console.log("80+:", highScorers);



const passedStudents = students
    .filter(student => student.marks >= 60)
    .map(student => student.name);
console.log("Passed:", passedStudents);



const totalMarks = students.reduce((sum, student) => {
    return sum + student.marks;
}, 0);
const averageMarks = totalMarks / students.length;
console.log("Average:", averageMarks);




const students = [
    { name: "Navtej", marks: 85 },
    { name: "Alex", marks: 72 },
    { name: "Sam", marks: 91 },
    { name: "John", marks: 58 },
    { name: "Mike", marks: 76 }
];

// Number of students
const totalStudents = students.length;

// Total marks
const totalMarks = students.reduce((total, student) => {
    return total + student.marks;
}, 0);

// Average marks
const averageMarks = totalMarks / totalStudents;

// Highest marks
const highestMarks = Math.max(...students.map(student => student.marks));

// Lowest marks
const lowestMarks = Math.min(...students.map(student => student.marks));

// Students who passed
const passedStudents = students.filter(student => student.marks >= 60);

// Students who failed
const failedStudents = students.filter(student => student.marks < 60);

// Student with the highest marks
const topStudent = students.reduce((best, student) => {
    return student.marks > best.marks ? student : best;
});

console.log("Total Students:", totalStudents);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Highest Marks:", highestMarks);
console.log("Lowest Marks:", lowestMarks);
console.log("Passed Students:", passedStudents.length);
console.log("Failed Students:", failedStudents.length);
console.log("Top Student:", topStudent.name);
