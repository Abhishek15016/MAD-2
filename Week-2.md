# 📘 JavaScript Advanced Concepts

## Context, `this`, apply(), call(), bind(), Arrow Functions

---

# 1️⃣ Quick Recap of Previous Topics

Before this lecture, these topics were covered:

### Hoisting

Variables and functions are **hoisted to the top of scope**.

| Keyword  | Hoisted | Initial Value   |
| -------- | ------- | --------------- |
| var      | Yes     | undefined       |
| let      | Yes     | TDZ             |
| const    | Yes     | TDZ             |
| function | Yes     | full definition |

---

### IIFE (Immediately Invoked Function Expression)

Function that runs immediately after definition.

```javascript
(function(){
    console.log("Hello")
})()
```

---

### Callbacks

A **callback** is a function passed as an argument to another function.

Example

```javascript
function greet(name){
    console.log("Hello " + name)
}

function run(callback){
    callback("John")
}

run(greet)
```

---

# 2️⃣ Collections in JavaScript

JavaScript mainly uses two collection structures:

```
1. Arrays
2. Objects
```

---

# 3️⃣ Object Basics

Example object:

```javascript
let obj1 = {
    "a": 123,
    "a123": "b",
    c: "caterpillar",
    fns: function(){
        console.log("This is object method")
    } 
}
```

### Accessing properties

```javascript
console.log(obj1.a)
console.log(obj1.c)
console.log(obj1.a123)
console.log(obj1.fns())
```

Output

```
123
caterpillar
b
This is object method
```

---

# 4️⃣ Object with Multiple Properties and Methods

```javascript
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
```

---

# 5️⃣ `this` Keyword in Objects

Inside object methods:

```
this → refers to the current object
```

Example

```javascript
obj2.func3()
```

Output

```
The first property of the obj is 25
```

Because

```
this.var1 → obj2.var1
```

---

# 6️⃣ Context in JavaScript

Context means:

```
Which object "this" refers to
```

Example

```
obj2.func3()
```

Context = `obj2`

---

# 7️⃣ Context Loss Problem

When a method is **copied into a variable**, the object context is lost.

Example

```javascript
let testvar = obj2.func3
testvar()
```

Output

```
The first property of the obj is undefined
```

Why?

```
this → no longer refers to obj2
```

This is called

```
Loss of Context
```

---

# 8️⃣ Fixing Context

JavaScript provides three methods:

```
apply()
call()
bind()
```

These explicitly set the **context for a function**.

---

# 9️⃣ apply() Method

Syntax

```javascript
function.apply(context, [arguments])
```

Example

```javascript
testvar.apply(obj2)
```

Output

```
The first property of the obj is 25
```

---

### Multiple arguments

Arguments must be provided as **array**

```javascript
testvar2.apply(obj2, ["DBMS"])
```

---

# 🔟 call() Method

Syntax

```javascript
function.call(context, arg1, arg2)
```

Example

```javascript
testvar.call(obj2)
```

Output

```
The first property of the obj is 25
```

---

### With arguments

```javascript
testvar2.call(obj2, "PDSA")
```

Arguments are **comma separated**

---

# 1️⃣1️⃣ bind() Method

Syntax

```javascript
function.bind(context)
```

Difference:

```
bind() does NOT execute the function
```

It returns a **new function with context attached**.

Example

```javascript
testvar.bind(obj2)()
```

---

# 1️⃣2️⃣ Difference Between apply, call, bind

| Method  | Executes Immediately | Arguments Format     |
| ------- | -------------------- | -------------------- |
| apply() | Yes                  | array                |
| call()  | Yes                  | comma separated      |
| bind()  | No                   | provided during call |

---

# 1️⃣3️⃣ Using Different Object Context

You can run a function using **another object’s context**.

Example

```javascript
const obj3 = {
    var1: 36
}

testvar.call(obj3)
```

Output

```
The first property of the obj is 36
```

Because

```
this → obj3
```

---

# 1️⃣4️⃣ `this` Behavior with Arrow Functions

Example

```javascript
const obj4 = {
    var1: 10,
    var2: 16,

    func1: function(){
        console.log(this.var1)
    },

    func2: () => {
        console.log(this.var2)
    }
}
```

Running

```javascript
obj4.func1()
obj4.func2()
```

Output

```
10
undefined
```

---

# 1️⃣5️⃣ Why Arrow Function Returns Undefined

Rule:

```
Arrow functions DO NOT bind their own this
```

Instead

```
this → refers to global object
```

In browser:

```
global object = window
```

---

# 1️⃣6️⃣ Global Object Example

```javascript
var var2 = 40
```

Then

```
window.var2 = 40
```

So arrow function becomes:

```
this.var2 → window.var2
```

Output

```
40
```

---

# 1️⃣7️⃣ Special Case: Arrow Function Inside Normal Function

Example

```javascript
func3: function(){
    const func3_ = () => {
        console.log(this.var2)
    }
    func3_()
}
```

Running

```javascript
obj4.func3()
```

Output

```
16
```

---

### Why?

Because:

```
Arrow function inherits "this" from parent function
```

Parent function:

```
func3 → normal function
```

Normal function:

```
this → obj4
```

So arrow function inherits:

```
this → obj4
```

---

# 1️⃣8️⃣ Final Results

Running

```javascript
obj4.func1()
obj4.func2()
obj4.func3()
```

Output

```
10
undefined
16
```

---

# 1️⃣9️⃣ Summary of `this`

| Function Type                         | `this` refers to        |
| ------------------------------------- | ----------------------- |
| Normal function in object             | object itself           |
| Arrow function in object              | global object           |
| Arrow function inside normal function | parent function context |

---

# ⭐ Final Cheat Sheet

```
Object method → this = object

Arrow function → this = global

Arrow inside normal function → this = parent function

apply() → context + arguments array
call() → context + arguments comma separated
bind() → returns new function
```
---

# 📘 JavaScript Notes

# Iteration, Object Methods, and Destructuring

---

# 1️⃣ Iteration in Arrays

Iteration means **looping through elements of an array**.

JavaScript mainly uses:

```text
for...in
for...of
```

---

# 2️⃣ `for...in` Loop (Arrays)

When using `for...in` on arrays:

```text
iterator → index
```

Example:

```javascript
for (let i in arr1){
    console.log(i)
    console.log(arr1[i])
}
```

Example array

```javascript
let arr1 = [1,3,"d", greet]
```

Output

```
0
1
1
3
2
d
3
function greet
```

Explanation:

| i | arr1[i] |
| - | ------- |
| 0 | 1       |
| 1 | 3       |
| 2 | d       |
| 3 | greet   |

So:

```text
for...in → gives index
```

---

# 3️⃣ `for...of` Loop (Arrays)

When using `for...of`:

```text
iterator → element itself
```

Example

```javascript
for (let i of arr1){
    console.log(i)
}
```

Output

```
1
3
d
greet
```

So:

| Loop     | Returns |
| -------- | ------- |
| for...in | index   |
| for...of | element |

---

# 4️⃣ Which One is Used More?

Generally:

```text
for...of is used more
```

Because it directly gives **values**.

---

# 5️⃣ Iteration in Objects

Objects contain:

```text
keys → property names
values → property values
```

Example object:

```javascript
const obj4 = {
    var1: 10,
    var2: 16,
    func1(){},
    func2(){},
    func3(){}
}
```

---

# 6️⃣ `for...in` with Objects

In objects:

```text
iterator → key (property name)
```

Example

```javascript
for (let i in obj4){
    console.log(i)
    console.log(obj4[i])
}
```

Output example

```
var1
10
var2
16
func1
function
func2
function
```

---

# 7️⃣ Important Rule

When accessing object values inside loop:

```text
Use indexing [] not dot notation
```

Correct

```javascript
obj4[i]
```

Wrong

```javascript
obj4.i
```

Why?

```text
obj4.i → looks for property literally named "i"
```

---

# 8️⃣ `for...of` with Objects

This **does NOT work**.

Example

```javascript
for (let i of obj4){
    console.log(i)
}
```

Error

```
TypeError: obj4 is not iterable
```

Reason:

```text
Objects are not iterable like arrays
```

So:

| Structure | Loop               |
| --------- | ------------------ |
| Array     | for...in, for...of |
| Object    | for...in           |

---

# 9️⃣ Object Built-in Class Methods

JavaScript has a global object called:

```text
Object
```

Useful methods:

```
Object.keys()
Object.values()
Object.entries()
```

---

# 🔟 Object Methods on Arrays

Example

```javascript
console.log(Object.keys(arr1))
console.log(Object.values(arr1))
console.log(Object.entries(arr1))
```

---

### Object.keys()

Returns **array of indices**

Example

```
[0,1,2,3]
```

---

### Object.values()

Returns **array elements**

Example

```
[1,3,"d",greet]
```

---

### Object.entries()

Returns **index-value pairs**

Example

```
[
 [0,1],
 [1,3],
 [2,"d"],
 [3,greet]
]
```

---

# 1️⃣1️⃣ Object Methods on Objects

Example

```javascript
Object.keys(obj4)
Object.values(obj4)
Object.entries(obj4)
```

---

### Output

#### keys

```
["var1","var2","func1","func2","func3"]
```

---

#### values

```
[10,16,function,function,function]
```

---

#### entries

```
[
 ["var1",10],
 ["var2",16],
 ["func1",function],
 ["func2",function],
 ["func3",function]
]
```

---

# 1️⃣2️⃣ Destructuring

Definition:

```text
Destructuring = shorthand syntax to unpack values from arrays or objects
```

---

# 1️⃣3️⃣ Array Destructuring (Conventional Way)

Example

```javascript
let myArr1 = [1,2,3]

let a = myArr1[0]
let b = myArr1[2]
```

Output

```
a = 1
b = 3
```

---

# 1️⃣4️⃣ Array Destructuring (Shorthand)

```javascript
let [a,b] = myArr1
```

Result

```
a = 1
b = 2
```

---

# 1️⃣5️⃣ Skipping Elements

Example

```javascript
let [a,,b] = myArr1
```

Output

```
a = 1
b = 3
```

Explanation

```
second element skipped
```

---

# 1️⃣6️⃣ Rest Operator (`...`)

Example

```javascript
let [a,...b] = myArr1
```

Output

```
a = 1
b = [2,3]
```

Explanation

```
... → collects remaining elements
```

---

# 1️⃣7️⃣ Spread Operator

Spread breaks array elements.

Example

```javascript
let myArr2 = [...myArr1,4,5,6]
```

Result

```
[1,2,3,4,5,6]
```

---

Another example

```javascript
let myArr2 = [4,5,6,...myArr1]
```

Output

```
[4,5,6,1,2,3]
```

---

# 1️⃣8️⃣ Spread Operator Summary

| Position   | Behavior                  |
| ---------- | ------------------------- |
| Left side  | collects remaining values |
| Right side | expands array             |

---

# 1️⃣9️⃣ Object Destructuring

Object

```javascript
const myObj1 = {
    prop1: "Diploma",
    prop2: "Degree",
    prop3: "Foundation"
}
```

---

### Conventional Method

```javascript
let p1 = myObj1.prop1
let p2 = myObj1.prop2
```

---

### Destructuring Method

```javascript
const {prop1, prop2} = myObj1
```

Output

```
prop1 = Diploma
prop2 = Degree
```

---

# 2️⃣0️⃣ Renaming Properties

Example

```javascript
const {prop1: level1, prop2: level2} = myObj1
```

Output

```
level1 = Diploma
level2 = Degree
```

Explanation

```
prop1 → renamed as level1
prop2 → renamed as level2
```

---

# 2️⃣1️⃣ Object Spread Operator

Example

```javascript
const myObj2 = {
    ...myObj1,
    prop4: "Post Doc"
}
```

Result

```
{
 prop1:"Diploma",
 prop2:"Degree",
 prop3:"Foundation",
 prop4:"Post Doc"
}
```

Explanation

```
... breaks object properties
```

---

# 2️⃣2️⃣ Key Differences: Array vs Object Destructuring

| Feature           | Array    | Object              |
| ----------------- | -------- | ------------------- |
| Order matters     | Yes      | No                  |
| Skipping possible | Yes      | Not needed          |
| Variable names    | any name | must match property |

---

# ⭐ Final Quick Cheat Sheet

```
for...in (array) → index
for...of (array) → value

for...in (object) → key
for...of (object) → error

Object.keys() → keys
Object.values() → values
Object.entries() → key-value pairs

Destructuring → unpack values
Spread (...) → expand elements
Rest (...) → collect remaining values
```

---
