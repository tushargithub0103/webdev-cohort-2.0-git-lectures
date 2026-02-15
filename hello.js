const fname = "Tushar";
const lname = "Sharma";

// console.log(fname + " " + lname);

// console.log(`Hello ${fname} ${lname}`);

// console.log("Hello " + fname + " " + lname);

// console.log(fname + " " + lname + " is a good boy" + " and he is a good student");
// const JsUser={
//     email:"tushar@gmail.com",
//     fname: "Tushar",
//     lname:"Sharma",age: 22, isLoggedIn: false,
    
//     fullname:{    
//         firstname:"Tushar"
//     }
// };

// console.log(JsUser.fullname.firstname);

// JsUser.greeting = function () {
// console. log ("Hello JS user", JsUser["email,name"]); ;
// return 3+5;
// }

// console.log(JsUser.greeting());

// Create an Object
// const person = {};

// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// console.log(person.firstName);

// const numbers = [10, 20, 30];
// // numbers.push(40);      // Add end
// // numbers.pop();         // Remove end
// // numbers.shift();       // Remove start
// // numbers.unshift(5);    // Add start
// // const sorted = numbers.filter((num) => num > 15);

// // console.log(sorted);
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// const users = [
//   { name: "Tushar", age: 23 },
//   { name: "Rahul", age: 25 },
// ];

// const names = users.map((user) => user.name);
// console.log(names); 

// const products = [
//   { id: 1, title: "Laptop", price: 50000 },
//   { id: 2, title: "Mobile", price: 20000 },
//   { id: 3, title: "Headphones", price: 3000 },
// ];

// console.log(products[0]);


// const user = {
//   name: "Tushar",
//   age: 23,
// };

// Object.freeze(user);

// user.age = 30; // ❌ Won't change
// user.city = "Pune"; // ❌ Won't add
// delete user.name; // ❌ Won't delete

// console.log(user);

// const person = {
//   name: "Tushar",
//   address: {
//     city: "Pune"
//   }
// };

// Object.freeze(person);

// person.address.city = "Mumbai"; // ✅ This WILL change
// person.name = "Rahul"; // ❌ This WON'T change
// console.log(person.name); // Output: "Mumbai"


// const arr = new Array();
// arr.push(10);
// arr.push(20);
// console.log(arr);

// const arr = [1, 2, 3, 4];
// arr.splice(1, 2); 
// // removes 2 elements starting index 1
// console.log(arr); // Output: [1, 4]

// console.log("Start");

// setTimeout(() => {
//   console.log("Middle");
// }, 2000);

// console.log("End");


function one() {
  console.log("One");
}

function two() {
  one();
  console.log("Two");
}

one();
two();
