// comments in JS - This is a single line comment
// comment

//   This is
//   a
//   multiline
//   comment

/* 
   This is
   a
   multiline
   comment
*/

// JS code structure 
// console.log("hello"); 
// console.log("world");

// console.log("hello") 
// console.log("world")

// console.log("hello"); console.log("world");

// console.log(1 + 2 + 6);

// Declaring a variable
// let message;
// let hello5;
// let _hello;
// message = "hello";
// console.log(message);

// let age = 25.5;
// let MESSAGE = "hello2"

// console.log(age);

// let isMale = true;    // compound small letter 
// console.log(isMale);

// isMale = false;
// console.log(isMale);

// let isMale = false;
// console.log(isMale);

// Datatypes
// Primitive datatypes
// Number - integers and floating value. ___________ N + 10, N + 20n, N, 2^53n

// BigInt - Numeric values that cannot be stored as Numbers. 

// Strings - charactesr enclosed in quotes "". '123', "hello"

// Boolean - Logical type - true, false, --> JSON

// null - refers to empty object
// let value = null; // None in Python
// console.log(value);

// undefined - refers to a variable whose value is not assigned.
// let val;
// console.log(val);

// let val2 = undefined; // same as let val2;
// console.log(val2);


// let val3 = "123v";
// console.log(Number(val3));

// Symbol

// Non-primitive
// Objects - explained below


// Other ways of declaring variables
// let message = "hello";
// message = "world";
// console.log(message);

// const pi = 3.1;
// console.log(pi);

// What const enforces? 
// const pi; // initialization with declaration
// pi = 3.14;
// console.log(pi);

// const pi = 2.14;
// const c = message;
// pi = 4.14; // reaassignment forbidden
// console.log(pi);
// 1995 - one way of declaring variables - var
// var message = "Hello from var";
// console.log(message);

// message = "changed message from var";
// console.log(message);

// message = 5050;
// console.log(message);

// Scoping in JS
// var variable1 = 20;
// {
//     console.log(variable1);
//     var variable2 = 30;
// }
// console.log(variable2);

// console.log(variable3);
// var variable3 = 40;

// Comparisons

// == === equality 
// <=, >=

// "abc", 35, true, 12.67, 1 ---> truthy 
// false, undefined, null, 0, "" , NaN ---> falsy

// console.log("21" == 21); // step 1
// // console.log(Number("21") == 21); // step 2
// // console.log(21 == 21);  // => step 3

// console.log("zq" < "aqa") // lexicographical comparison

// console.log("21" === 21); 

// console.log(null == undefined);
// console.log(null === undefined);

// Functions 
// // conventional functions - named functions
// function add(a, b) {
//     return a + b;
// }

// // let sum = add(4,6);
// console.log(add(4,6));

// // function expressions - unnamed functions 
// const sum = function(a, b) { // 
//     return a + b;
// }

// // arrow function 
// const product = (a, b) => a*b; // callbacks
// // const product = (a, b) => {return a*b}; // callbacks

// console.log(sum(4, 7));
// console.log(product(3,4))


// // Objects
// const obj1 = { // context
//     a: "hello",
//     myFunc: function(a, b) { // 
//         return a + b;
//     }
// }

// console.log(obj1.myFunc);

// block scope - single block , conditional statement, loops 

// simple block 
// {
//     let abc = 123;
//     const pqr = 567;
//     val3 = 10;
// }


// if (cond) {
//     let abc = 123;
//     const pqr = 567;
// }

// for(;;) {
//     let abc = 123;
//     const pqr = 567;
// }