// go through this file along with this live session for better understanding;
// https://www.youtube.com/live/ZJHI9mstTyM?si=MtSeNc4AF4D4-bXJ

// Hoisting
// a - not avai -- TDZ
// b - not avai -- TDZ
// c - undefined
// df - proper definitation
// ======================================
// console.log("before break point, hence executed")
// d()
// // console.log(a);
// let a = "apple";
// console.log(a)

// console.log(b)
// const b = "ball";
// console.log(b)

// console.log(c)
// var c = "caterpillar"
// console.log(c)

// d()
// function d() { //named function
//     console.log("dolphin")
// }
// d()

// e()
// let e = function(){ // function expression
//     console.log("elephant")
// }
// e()

// f()
// const f = function(){
//     console.log("fhantom")
// }
// f()

// g()
// var g = function(){
//     console.log("game of thrones")
// }
// g()

// IIFEs - Immediately Invoked Function Expression 
// const myFunc = () => {
//     console.log("invoked from arrow")
// }

// myFunc();
// (() => {
//     console.log("immediately invoked from arrow")
// })();

// Callbacks
function greet(name) {
    console.log(`Hello, ${name}`)
}

// function run_callback(callback){ // it is explicitly mentioned that the argument should be a function
//     // arg("mad 2")
//     console.log("About to run the callback...")
//     callback("MAD II")
//     console.log("Callback finished!")
// }

// run_callback(greet)

// setTimeout(arg1, arg2)
// setTimeout(cbf, 2000)

// Collections - Array
let arr1 = [1, "three", 'd', greet]; // Python

// Array methods - 

// map()

// step 1 - define an operation to be applied on the array elements.
// function sayType(element){
//     console.log(typeof(element));
// }

// sayType(3)

// // // step 2 - iterate and apply that function on every element.
// for(let i=0; i<arr1.length; i++){
//     sayType(arr1[i]);
// }

// <operand_array>.map(<operation_fnc>)
// arr1.map((x) => console.log(typeof(x))); 

// filter() - take an element, apply condition, retain if condn satisfies, store in new array.
// const arr2 = [1, 3, 2, 7, 8, 5];

// let fltr_rslt = arr2.filter((x) => x%2 != 0);
// console.log(fltr_rslt);

// find() - take an element, apply condition, return if satisfies, stop there. 
// let find_rslt = arr2.find((x) => x > 5);
// console.log(find_rslt);

// reduce() - reduce an array to a single value using an initial value.
// let rdce_rslt = arr2.reduce((init, x) => init+x, 2);
// console.log(rdce_rslt);

// init = 28

// modified = list(map(arr1, function)) Python

// sort() - sort the array
// arr2.sort();
// console.log(arr2);

// let arr3 = ["three", "two", "six", "five"] 

// sort() - sort the array, lexicographically
// arr3.sort();
// console.log(arr3);

// let arr4 = [1, -20, -100, 100, 3] //---> ["1", "-20", "-100", "100", "3"] --> [-100, -20, 1, 100, 3]

// [-100 -20] ===> "-100", "-20" 

// sort() - sort the array, numerically
// arr4.sort(); // strings
// // arr4.sort((a, b) => a - b); // numbers
// console.log(arr4);

Objects

let obj1 = {
    "a": 123,
    "a123": "b",
    c: "caterpillar",
    fns: function(){
        console.log("This is object method")
    } 
}

console.log(obj1.a)
console.log(obj1.c)
console.log(obj1.a123)
console.log(obj1.fns())

const obj2 = {
    var1: 25,
    var2: 30,
    var3: "Adarsh",
    func1: function() {
        console.log("this is first function")
    },
    func2: function(course){
        console.log(`${this.var3} likes the course ${course}`)
    },
    func3: function() {
        console.log(`The first property of the obj is ${this.var1}`)
    }
}

const obj3 = {
    var1: 36
}

// console.log(obj2.var1);
// console.log(obj2.var2);
// obj2.func1();
// obj2.func2("MAD II");
obj2.func3(); // function execution with context 

let testvar = obj2.func3 // function with lost scope -- this????

testvar();
// apply(), call(), bind()

// A] for functions without arguments

// testvar.apply(obj2) // first argument that we provide is always the context

// testvar.call(obj2)
// testvar.call(obj3)

// testvar.bind(obj2)()

// B] for functions with arguments

// obj2.func2("mad 2")

// const testvar2 = obj2.func2;

// testvar2.apply(obj2, ["DBMS"]) // arguments are provided as elements of a array. for multiple arguments
// testvar2.apply(obj2, ["DBMS", "elem2"]) // arguments are provided as elements of a array.

// testvar2.call(obj2, "PDSA") // arguments are provided comma separated.
// testvar2.call(obj2, "PDSA", "arg3") // arguments are provided comma separated. for multiple arguments

// testvar2.bind(obj2)("JAVA") // arguments are provided by calling with arguments

// context (obj) to the method (func)

// The "this" binding in objects

// var var2 = 40;

// const obj4 = {
//     var1: 10,
//     var2: 16,
//     // i: "undefined",
//     func1: function() { // normal function
//         console.log(`The first property of the obj is ${this.var1}`)
//     },
//     func2: () => { // arrow function
//         console.log(`The second property of the obj is ${this.var2}`) 
//         // this.var2 = 16 iff this !--> obj4
//     },
//     func3: function(){
//         const func3_ = () => {
//             console.log(`The second property of the obj is ${this.var2}`)
//         }
//         func3_();
// //         // this.var2 = 16 iff this --> obj4
// //     },
// //     func4: () => { // arrow function
// //         function test3() {
// //             console.log(`The second property of the obj is ${this.var2}`)
// //         }
// //         test3();
// // //         // this.var2 = 16 iff this !--> obj4
//     },

// }

// obj4.func1();
// obj4.func2();
// obj4.func3();  // undefined, 40, 16

// Iteration in Arrays

// for (let i in arr1){ // in --> iterator is index  [1, 2, 3, 4]          
//     console.log(i)                                 0  1  2  3
//     console.log(arr1[i])
// }

// for (let i of arr1){ // of --> iterator is element
//     console.log(i)
// }

// Iteration in Objects

// for (let i in obj4){ // in --> iterator is keys
//     console.log(i)
//     console.log(obj4[i]) // use indexing, no . notations
// }

// for (let i of obj4){ // of --> There are no elements in an obj so no iteration
//     console.log(i)
// }

// Object class - built-in global object (essentially a constructor/class) that comes with JavaScript itself

// console.log(Object.keys(arr1))
// console.log(Object.values(arr1))
// console.log(Object.entries(arr1))

// console.log(Object.keys(obj4))
// console.log(Object.values(obj4))
// console.log(Object.entries(obj4))


// Destructuring - A shorthand syntax to unpack values from arrays or properties from objects into variables.

// Arrays

let myArr1 = [1, 2, 3];

// let a = myArr1[0]; // unpacking conventional
// let b = myArr1[2]; // unpacking conventional

// let [a, b] = myArr1; // unpacking
// let [a, , b] = myArr1; // unpacking with skipping
// let [a, ...b] = myArr1; // unpacking with rest "..." spreading operator 

// console.log(a)
// console.log(b)

// let myArr2 = [myArr1, 4, 5, 6];
// let myArr2 = [...myArr1, 4, 5, 6];   // 1, 2, 3, 4, 5, 6
// let myArr2 = [4, 5, 6, ...myArr1];   // 1, 2, 3, 4, 5, 6

// console.log(myArr2)

// Destructuring - Objects

const myObj1 = {
    prop1: "Diploma",
    prop2: "Degree",
    prop3: "Foundation"
}

// let p1 = myObj1.prop1; // unpacking conventional
// let p2 = myObj1.prop2; // unpacking conventional

const {prop1, prop2} = myObj1; // unpacking

// console.log(prop1)
// console.log(prop2)

// const {prop1: level1, prop2: level2} = myObj1; // renaming props

// console.log(level1)
// console.log(level2)

// const myObj2 = {
//     ...myObj1,
//     prop4: "Post Doc"
// }

// console.log(myObj2)


