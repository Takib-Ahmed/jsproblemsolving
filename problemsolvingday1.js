//1. What will be the output of the following code and why?


function scopeTest() {
  if (true) {
    var varVariable = "I am var";
    let letVariable = "I am let";
    const constVariable = "I am const";
  }
  console.log(varVariable);//This will work because var is global-scoped or fuction-scoped  
 // console.log(letVariable);//This will cause error beacuase let is local-scoped or block-scoped  and the block is if{}
 // console.log(constVariable);//This will cause error beacuase const is local-scoped or block-scoped  and the block is if{}
}

scopeTest();


//2.



//ans

function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }
  
  console.log(greet("Alice")); // "Hello, Alice!"
  console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"

  
//3.


function sum(a,b,c,...args) {
    sum(1,2,3,...args)
  console.log(sum(1, 2, 3)) // 6
    console.log(sum(10, 20, 30, 40)) // 100
    console.log(sum(5)) // 5
  }

  

  //4.Given the following arrays, use the spread operator to merge them into a new array 


  const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray = [...array1,...array2,...array3]
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


//5.Write an object person using the object literal syntax extensions.
//The object should have properties name and age, and a method greet that returns a greeting message.


//const name = "John";
//const age = 30;


/*
const person = {
  name,
  age,
  greet: function() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
};

console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."*/


//6.Write a for...of loop to iterate over the following array and print each element to the console.


const fruits = ["apple", "banana", "cherry"];

for(fruit of fruits){console.log(fruit)}




//7.Use template literals to create a string that includes variables name and age.


//const name = "Alice";
const age = 25;

// Your code here
//const message = `My name is ${name} and I'm ${age} years old`;
//console.log(message); // "My name is Alice and I am 25 years old."

//8.



const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
for (student of students)  {console.log(`Name: ${student.name} , grade: ${student.grade} `)}



//9.You have a nested array of numbers. Use a for...of loop to iterate over each inner array and print the sum of its elements.
const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (nested of nestedArrays){
    console.log(nested)
    let sum=0;
    for(arrays of nested){
        sum+= arrays;

    }
    console.log(sum)
}

//10.


const a = 5;
const b = 10;

// Your code here
const result = `The sum of ${a} and ${b} is ${a+b}`;
console.log(result); // "The sum of 5 and 10 is 15."