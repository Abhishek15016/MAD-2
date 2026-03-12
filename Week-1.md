# 📘 JavaScript Basics – (MAD 2)

## 1️⃣ Comments in JavaScript

Comments are used to explain code and are **ignored by the JavaScript engine**.

### 🔹 Single-line Comment

```js
// This is a single line comment
```

### 🔹 Multiple Single-line Comments

```js
// This is
// a
// multiline
// comment
```

### 🔹 Multi-line Comment (Block Comment)

```js
/*
   This is
   a
   multiline
   comment
*/
```

---

## 2️⃣ JavaScript Code Structure

### 🔹 Printing Output

JavaScript uses `console.log()` to print output in the browser console.

```js
console.log("hello");
console.log("world");
```

### 🔹 Semicolon (`;`) Usage

* Semicolons **are optional** in JavaScript.
* JavaScript automatically inserts semicolons **if statements are on separate lines**.

```js
console.log("hello")
console.log("world")
```

### 🔹 When Semicolon is Required

If multiple statements are written on the **same line**, semicolons are required.

```js
console.log("hello"); console.log("world");
```

❌ This will cause an error:

```js
console.log("hello") console.log("world");
```

---

## 3️⃣ Expressions in JavaScript

JavaScript **evaluates expressions** before printing.

```js
console.log(1 + 2 + 6); // Output: 9
```

* Expressions can span multiple lines if they are part of the **same argument**.

```js
console.log(
  1 + 2 +
  6
);
```

---

## 4️⃣ Declaring Variables (`let`)

### 🔹 Variable Declaration

```js
let message;
message = "hello";
console.log(message);
```

### 🔹 Declaration + Assignment Together

```js
let age = 25.5;
console.log(age);
```

---

## 5️⃣ Rules for Variable Names

✅ Allowed:

```js
let hello5;
let _hello;
let MESSAGE;
```

❌ Not Allowed:

```js
let 5hello; // cannot start with number
```

📌 Rules:

* Must start with a **letter** or `_`
* Cannot start with a **number**
* Numbers allowed **after** first character

---

## 6️⃣ Data Types in JavaScript

### 🔹 String

```js
let message = "hello";
```

### 🔹 Number

```js
let age = 25;
let price = 25.5; // No separate int/float in JS
```

➡️ Both integers and decimals are of type **Number**.

### 🔹 Boolean

```js
let isMale = true;
console.log(isMale);
```

---

## 7️⃣ Camel Case Naming Convention

Used for **compound variable names** in JavaScript.

```js
let isMale;
let userAge;
let accountBalance;
```

📌 Rule:

* First word → lowercase
* Next words → Capitalized

---

## 8️⃣ Dynamic Typing (Weakly Typed Language)

JavaScript allows **type change at runtime**.

```js
let isMale = true;
console.log(isMale);

isMale = "yes";   // boolean → string
console.log(isMale);
```

➡️ This is why JavaScript is called **weakly typed**.

---

## 9️⃣ Reassignment vs Redeclaration

### ✅ Reassignment (Allowed)

```js
let isMale = true;
isMale = false;
```

### ❌ Redeclaration (Not Allowed with `let`)

```js
let isMale = true;
let isMale = false; // ❌ Error: already declared
```

📌 Summary:

* **Reassigning value** → ✅ Allowed
* **Redeclaring variable** → ❌ Not Allowed

---

# 🧰 Resources Used in the Video

### 🔹 Tools & Software

* **VS Code (Visual Studio Code)**
* **Live Server Extension** (for running HTML files locally)

### 🔹 Browser Tools

* **Browser Developer Tools**

  * Right Click → Inspect
  * Console Tab (to view `console.log()` output)

### 🔹 Files Used

* `index.html`
* `script.js` (external JavaScript file)

---

# 📘 JavaScript – Data Types, Variables, Scoping & Comparisons 

---

## 1️⃣ JavaScript Data Types

JavaScript data types are divided into:

* **Primitive Data Types**
* **Non-Primitive Data Types**

---

## 2️⃣ Primitive Data Types

### 🔹 1. Number

* Includes **integers** and **floating-point values**
* JavaScript does **not** differentiate between `int` and `float`

```js
let a = 25;
let b = 25.5;
```

* Maximum safe integer:

```text
2^53 - 1
```

* Numbers beyond this limit lose precision

---

### 🔹 2. BigInt

* Used for **very large numbers** beyond `Number` limit
* Mainly used in **finance / stock markets**

```js
let big = 9007199254740991n; // note the 'n'
```

📌 **General usage**: Rarely used in normal applications

---

### 🔹 3. String

* Characters enclosed in quotes

```js
let name = "hello";
let numStr = "123";
```

📌 Even `"123"` is a **string**, not a number

---

### 🔹 4. Boolean

* Logical values

```js
true
false
```

* Written in **lowercase** in JavaScript
* Same format used in **JSON**

---

### 🔹 5. null

* Represents an **empty object**
* Used when a variable is intentionally empty

```js
let value = null;
```

📌 Similar to `None` in Python

---

### 🔹 6. undefined

* Variable is declared but **no value is assigned**

```js
let val;
console.log(val); // undefined
```

```js
let val2 = undefined; // same as above
```

---

### 🔹 7. Symbol

* Unique primitive value
* Rarely used (advanced use cases)

---

## 3️⃣ Non-Primitive Data Type

### 🔹 Object

* Stores data in **key–value pairs**
* Can store multiple values together

📌 Will be explained in detail later

---

## 4️⃣ Variable Declarations in JavaScript

### 🔹 `let`

* Allows reassignment
* Block-scoped

```js
let message = "hello";
message = "world";
```

---

### 🔹 `const`

* Must be **initialized at declaration**
* Reassignment ❌ not allowed
* Block-scoped

```js
const pi = 3.14;
// pi = 4.14 ❌ error
```

📌 Use `const` for values that should **never change**

---

### 🔹 `var` (Old way – introduced in 1995)

* Allows reassignment
* ❌ No block scope
* Function-scoped

```js
var message = "Hello from var";
message = "changed message";
```

📌 **Avoid `var` in modern JavaScript**

---

## 5️⃣ Scoping in JavaScript

### 🔹 Block Scope

Applies to:

* `{ }`
* `if`
* `for`, `while` loops

#### `let` and `const` → Block Scoped

```js
{
  let x = 10;
}
// x ❌ not accessible here
```

---

### 🔹 `var` has NO block scope

```js
{
  var y = 20;
}
console.log(y); // ✅ works
```

📌 This causes **unexpected bugs**

---

### 🔹 Global vs Block Access

* Global variables → accessible inside blocks
* Block variables → ❌ not accessible outside

---

## 6️⃣ Hoisting Difference (`let` vs `var`)

### 🔹 `let`

```js
console.log(a);
let a = 10;
// ❌ ReferenceError
```

---

### 🔹 `var`

```js
console.log(b);
var b = 10;
// ✅ undefined
```

📌 This inconsistency is why `var` is discouraged

---

## 7️⃣ Truthy and Falsy Values

### 🔹 Truthy Values

```text
"abc", 35, true, 12.67, 1
```

### 🔹 Falsy Values

```text
false, undefined, null, 0, "", NaN
```

📌 Used in conditions (`if`, loops)

---

## 8️⃣ Comparisons in JavaScript

### 🔹 Equality Operators

| Operator | Meaning                              |
| -------- | ------------------------------------ |
| `==`     | Loose equality (type conversion)     |
| `===`    | Strict equality (no type conversion) |

---

### 🔹 Loose Equality (`==`)

```js
console.log("21" == 21); // true
```

**Steps internally:**

1. Convert string → number
2. Compare values

---

### 🔹 Strict Equality (`===`)

```js
console.log("21" === 21); // false
```

📌 Type + value must match

---

### 🔹 null vs undefined

```js
null == undefined      // true
null === undefined    // false
```

---

## 9️⃣ Lexicographical (Dictionary) Comparison

Used for strings with `<` or `>`

```js
console.log("zq" < "aqa"); // false
```

📌 Comparison happens **character by character**, like a dictionary

---

## 🔟 Type Conversion to Number

```js
let val3 = "123v";
console.log(Number(val3)); // NaN
```

* `NaN` → Not a Number
* Happens when conversion fails

---
# 📘 JavaScript Functions 

---

# 1️⃣ What is a Function?

A **function** is a reusable block of code that performs a specific task.

Instead of writing the same code repeatedly, we can define it once and **reuse it multiple times**.

### Example

```js
function add(a, b) {
    return a + b;
}
```

Here:

* `add` → function name
* `a, b` → parameters
* `return` → returns the result

---

# 2️⃣ Syntax of a Function

Basic structure:

```js
function functionName(parameters) {
    // function body
    return value;
}
```

Example:

```js
function add(a, b) {
    return a + b;
}
```

Calling the function:

```js
console.log(add(4,6));
```

Output:

```
10
```

---

# 3️⃣ Types of Functions in JavaScript

JavaScript supports **three main ways** of defining functions:

1. Named Functions (Conventional Functions)
2. Function Expressions (Unnamed Functions)
3. Arrow Functions

---

# 4️⃣ Named Functions (Conventional Functions)

These are the **standard functions with a name**.

### Syntax

```js
function add(a, b) {
    return a + b;
}
```

### Calling the function

```js
console.log(add(4,6));
```

### Characteristics

* Have a **function name**
* Can be reused anywhere
* Traditional function definition

---

# 5️⃣ Function Expressions (Unnamed Functions)

Here a **function is assigned to a variable**.

These are called **function expressions**.

### Syntax

```js
const sum = function(a, b) {
    return a + b;
};
```

### Calling it

```js
console.log(sum(4,7));
```

Output:

```
11
```

### Key Idea

The function **does not have its own name**.

Instead, it is **stored inside a variable**.

```
variable → holds the function
```

---

# 6️⃣ Why Function Expressions Exist

They are useful when:

* A function needs to be **stored inside a variable**
* A function needs to be **passed as data**
* A function is used **inside objects**

---

# 7️⃣ Arrow Functions

Arrow functions are a **shorter syntax** for writing functions.

They are widely used in modern JavaScript.

### Syntax

```js
const product = (a, b) => a * b;
```

Calling it:

```js
console.log(product(3,4));
```

Output

```
12
```

---

# 8️⃣ Arrow Function Structure

Basic form:

```js
(parameters) => expression
```

Example:

```js
const multiply = (a, b) => a * b;
```

---

# 9️⃣ Arrow Function with Multiple Statements

If the function body has **multiple lines**, we must use `{}` and `return`.

```js
const product = (a, b) => {
    return a * b;
};
```

---

# 🔟 Implicit Return in Arrow Functions

If there is **only one expression**, return is automatic.

```js
const product = (a,b) => a*b;
```

Equivalent to:

```js
const product = (a,b) => {
    return a*b;
};
```

---

# 1️⃣1️⃣ Using Functions Inside Objects

Functions can also be stored **as properties of objects**.

When a function belongs to an object, it is called a **method**.

### Example

```js
const obj1 = {
    a: "hello",
    myFunc: function(a, b) {
        return a + b;
    }
}
```

Calling the function:

```js
obj1.myFunc(3,4)
```

Output

```
7
```

---

# 1️⃣2️⃣ Accessing Object Methods

Object methods are accessed using **dot notation**.

```js
objectName.methodName()
```

Example

```js
obj1.myFunc(3,4)
```

---

# 1️⃣3️⃣ Why Function Expressions Are Used in Objects

Objects need functions **as properties**.

Example structure:

```js
const obj = {
    key: value,
    key2: value,
    method: function(){}
}
```

Here:

```
method → function stored inside object
```

---

# 1️⃣4️⃣ Summary Table

| Type                | Syntax                     | Has Name | Usage                         |
| ------------------- | -------------------------- | -------- | ----------------------------- |
| Named Function      | `function add(){}`         | Yes      | Traditional functions         |
| Function Expression | `const sum = function(){}` | No       | Functions stored in variables |
| Arrow Function      | `const f = ()=>{}`         | No       | Short syntax, callbacks       |

---

# 1️⃣5️⃣ Example Code from Lecture

```js
// Named function
function add(a, b) {
    return a + b;
}

console.log(add(4,6));


// Function expression
const sum = function(a, b) {
    return a + b;
}

console.log(sum(4,7));


// Arrow function
const product = (a, b) => a*b;

console.log(product(3,4));


// Object with function
const obj1 = {
    a: "hello",
    myFunc: function(a, b) {
        return a + b;
    }
}

console.log(obj1.myFunc);
```

---

# 1️⃣6️⃣ Key Takeaways

* Functions allow **code reuse**
* JavaScript supports **multiple function styles**
* Arrow functions provide **shorter syntax**
* Functions inside objects are called **methods**
* Arrow functions are widely used for **callbacks**

---
# 📘 JavaScript Notes — Hoisting, IIFE, and Callbacks

---

# 1️⃣ Variable vs Function Usage

In JavaScript:

* **Variables → logged**
* **Functions → called**

Example:

```js
let a = "apple"
console.log(a)   // logging a variable

function d(){
    console.log("dolphin")
}

d() // calling a function
```

---

# 2️⃣ Hoisting in JavaScript

## Definition

**Hoisting** is the behavior where JavaScript **moves declarations of variables and functions to the top of the scope before execution**.

Important:

* Only **declaration is hoisted**
* **Initialization is NOT hoisted**

---

# 3️⃣ How JavaScript Executes a Script

When JavaScript runs a script:

Step 1️⃣
JS engine scans the entire script.

Step 2️⃣
It **collects all variables and functions**

Step 3️⃣
It **moves their declarations to the top**

Example script:

```js
console.log(a)
let a = "apple"
```

Internally JS treats it like:

```js
let a
console.log(a)
a = "apple"
```

---

# 4️⃣ Hoisting Behavior of Variables

Different keywords behave differently during hoisting.

---

## 🔹 let

Variables declared with `let` are hoisted but remain in the **Temporal Dead Zone (TDZ)**.

Example:

```js
console.log(a)
let a = "apple"
```

Output:

```
ReferenceError
```

Reason:

```
a exists but cannot be accessed yet
```

---

## 🔹 const

`const` behaves exactly like `let`.

Example:

```js
console.log(b)
const b = "ball"
```

Output:

```
ReferenceError
```

Because it is in **TDZ (Temporal Dead Zone)**.

---

## 🔹 var

`var` behaves differently.

It is hoisted **with initial value = undefined**

Example:

```js
console.log(c)
var c = "caterpillar"
```

Output:

```
undefined
```

Internally JS interprets it as:

```js
var c = undefined
console.log(c)
c = "caterpillar"
```

---

# 5️⃣ Temporal Dead Zone (TDZ)

## Definition

The **Temporal Dead Zone** is the time between:

```
variable declaration hoisting
AND
variable initialization
```

During this time the variable **exists but cannot be accessed**.

Example:

```js
console.log(a)
let a = "apple"
```

`a` exists but cannot be used yet.

---

# 6️⃣ Hoisting Summary

| Declaration Type | Hoisted | Initial Value   | Access before declaration |
| ---------------- | ------- | --------------- | ------------------------- |
| var              | Yes     | undefined       | Allowed                   |
| let              | Yes     | TDZ             | Error                     |
| const            | Yes     | TDZ             | Error                     |
| function         | Yes     | Full definition | Allowed                   |

---

# 7️⃣ Hoisting of Functions

Functions are hoisted **with their full definition**.

Example:

```js
d()

function d(){
    console.log("dolphin")
}
```

Output:

```
dolphin
```

Even though the function is defined later.

---

# 8️⃣ Function Expressions and Hoisting

Function expressions behave like **variables**.

Example:

```js
e()

let e = function(){
    console.log("elephant")
}
```

Output:

```
ReferenceError
```

Because `e` is treated as a variable.

---

## Example

```js
let e = function(){
    console.log("elephant")
}

e()
```

Output

```
elephant
```

---

# 9️⃣ Function Expression with const

Same rule applies.

```js
f()

const f = function(){
    console.log("phantom")
}
```

Output

```
ReferenceError
```

Because `f` is still in TDZ.

---

# 🔟 Function Expression with var

When declared using `var`:

```js
g()

var g = function(){
    console.log("game of thrones")
}
```

Output:

```
TypeError: g is not a function
```

Reason:

```
g = undefined initially
```

---

# 1️⃣1️⃣ Hoisting Summary for Functions

| Type                        | Hoisted               | Result         |
| --------------------------- | --------------------- | -------------- |
| Named function              | Yes (full definition) | Works          |
| Function expression (let)   | TDZ                   | ReferenceError |
| Function expression (const) | TDZ                   | ReferenceError |
| Function expression (var)   | undefined             | TypeError      |

---

# 1️⃣2️⃣ IIFE (Immediately Invoked Function Expression)

## Definition

An **IIFE** is a function that:

```
is defined and executed immediately
```

---

## Syntax

```js
(() => {
    console.log("immediately invoked from arrow")
})();
```

Output

```
immediately invoked from arrow
```

---

## Normal Function vs IIFE

Normal:

```js
const myFunc = () => {
    console.log("hello")
}

myFunc()
```

IIFE:

```js
(() => {
    console.log("hello")
})();
```

---

## Why IIFE Was Used

Earlier JavaScript used IIFE to:

* create private scope
* avoid global variable pollution

Today frameworks handle this automatically.

---

# 1️⃣3️⃣ Callbacks in JavaScript

## Definition

A **callback** is:

> A function passed as an argument to another function.

---

## Example

```js
function greet(name){
    console.log(`Hello, ${name}`)
}
```

---

### Function that accepts callback

```js
function run_callback(callback){
    console.log("About to run the callback...")
    callback("MAD II")
    console.log("Callback finished!")
}
```

---

### Running the callback

```js
run_callback(greet)
```

Output:

```
About to run the callback...
Hello, MAD II
Callback finished!
```

---

# 1️⃣4️⃣ How Callback Works

Execution flow:

```
run_callback(greet)
        ↓
print "About to run callback"
        ↓
call greet("MAD II")
        ↓
print Hello MAD II
        ↓
print Callback finished
```

---

# 1️⃣5️⃣ Real Example (setTimeout)

JavaScript has built-in functions that use callbacks.

Example:

```js
setTimeout(function(){
    console.log("Hello after 2 seconds")
},2000)
```

Explanation:

```
setTimeout(callbackFunction , delay)
```

Example:

```
callback → function to run
delay → milliseconds
```

2000 ms = 2 seconds.

---

# 1️⃣6️⃣ Callback Function Types

The callback can be:

✔ named function
✔ anonymous function
✔ arrow function

Example:

### Named

```js
setTimeout(greet,2000)
```

---

### Anonymous

```js
setTimeout(function(){
    console.log("Hello")
},2000)
```

---

### Arrow

```js
setTimeout(()=>{
    console.log("Hello")
},2000)
```

---

# 1️⃣7️⃣ Key Takeaways

✔ JavaScript **hoists declarations before execution**
✔ `let` and `const` create **Temporal Dead Zone**
✔ `var` initializes with **undefined**
✔ **functions are hoisted with full definition**
✔ **function expressions behave like variables**
✔ **IIFE runs immediately after definition**
✔ **callbacks are functions passed as arguments**

---

# 📘 JavaScript Collections – Arrays & Array Methods

---

# 1️⃣ Collections in JavaScript

A **collection** is a data structure that stores multiple values.

The most common collection in JavaScript is:

```
Array
```

---

# 2️⃣ JavaScript Array

An **array** is a collection that stores multiple elements in a single variable.

### Key Feature

Unlike many languages, **JavaScript arrays can store mixed data types**.

Example:

```javascript
let arr1 = [1, "three", 'd', greet];
```

Elements inside the array:

| Element | Type     |
| ------- | -------- |
| 1       | number   |
| "three" | string   |
| 'd'     | string   |
| greet   | function |

So an array can contain:

* numbers
* strings
* characters
* functions
* objects

---

# 3️⃣ Array vs Python List

JavaScript arrays behave very similarly to **Python lists**.

Example:

Python

```python
arr = [1, "three", 'd']
```

JavaScript

```javascript
let arr = [1, "three", 'd'];
```

---

# 4️⃣ Array Methods

JavaScript provides built-in **array methods** to operate on arrays.

Main methods discussed:

```
map()
filter()
find()
reduce()
sort()
```

---

# 5️⃣ map() Method

## Purpose

`map()` is used to:

```
apply an operation to every element of an array
```

---

## Traditional Way (Without map)

Step 1 — define operation

```javascript
function sayType(element){
    console.log(typeof(element));
}
```

Step 2 — iterate

```javascript
for(let i=0; i<arr1.length; i++){
    sayType(arr1[i]);
}
```

This performs the operation for each element.

---

## Using map()

Syntax

```
array.map(callback_function)
```

Example

```javascript
arr1.map((x) => console.log(typeof(x)));
```

Explanation:

```
x → each element of the array
typeof(x) → operation performed
```

Output

```
number
string
string
function
```

---

## Important Idea

`map()` combines two steps:

```
iteration + operation
```

---

# 6️⃣ Callback Function in map()

Example:

```javascript
arr1.map((x) => console.log(typeof(x)));
```

Here:

```
(x) => console.log(typeof(x))
```

is a **callback function**.

Definition:

> A function passed as an argument to another function.

So:

```
map → top-level function
arrow function → callback function
```

---

# 7️⃣ filter() Method

## Purpose

`filter()` selects elements that satisfy a condition.

Steps:

```
1. Take an element
2. Apply condition
3. If condition true → keep element
4. Store in new array
```

---

Example

```javascript
const arr2 = [1, 3, 2, 7, 8, 5];

let fltr_rslt = arr2.filter((x) => x % 2 != 0);

console.log(fltr_rslt);
```

Output

```
[1, 3, 7, 5]
```

Explanation

```
Keep elements where x % 2 ≠ 0
→ odd numbers
```

---

## Important

`filter()` always returns:

```
a new array
```

---

# 8️⃣ find() Method

## Purpose

`find()` returns the **first element** that satisfies a condition.

Steps:

```
1. Take element
2. Apply condition
3. If true → return element
4. Stop searching
```

---

Example

```javascript
let find_rslt = arr2.find((x) => x > 5);

console.log(find_rslt);
```

Output

```
7
```

Explanation

Array:

```
[1,3,2,7,8,5]
```

First number greater than 5:

```
7
```

---

## Difference from filter

| Method   | Result               |
| -------- | -------------------- |
| filter() | returns array        |
| find()   | returns single value |

---

# 9️⃣ reduce() Method

## Purpose

`reduce()` reduces an array into **one single value**.

It uses:

```
initial value + operation
```

---

Syntax

```
array.reduce((accumulator, element) => operation , initial_value)
```

---

Example

```javascript
let rdce_rslt = arr2.reduce((init, x) => init + x, 2);

console.log(rdce_rslt);
```

---

## Step-by-Step

Array

```
[1,3,2,7,8,5]
```

Initial value

```
2
```

Calculation

```
2 + 1 = 3
3 + 3 = 6
6 + 2 = 8
8 + 7 = 15
15 + 8 = 23
23 + 5 = 28
```

Final Output

```
28
```

---

# 🔟 sort() Method

## Purpose

Sort elements of an array.

---

Example

```javascript
arr2.sort();
console.log(arr2);
```

---

## Important Behavior

By default JavaScript sorts **lexicographically (dictionary order)**.

This means:

```
numbers are first converted to strings
```

---

# 1️⃣1️⃣ String Sorting

Example

```javascript
let arr3 = ["three", "two", "six", "five"]

arr3.sort();
console.log(arr3);
```

Sorting order

```
dictionary order
```

Example result

```
["five","six","three","two"]
```

---

# 1️⃣2️⃣ Problem with Numbers

Example

```javascript
let arr4 = [1,20,3,100]

arr4.sort()
```

Result

```
[1,100,20,3]
```

Why?

Because numbers become strings:

```
"1"
"20"
"3"
"100"
```

Lexicographic comparison:

```
1
100
20
3
```

---

# 1️⃣3️⃣ Correct Numeric Sorting

To sort numbers correctly use a comparison function.

Ascending order

```javascript
arr4.sort((a,b) => a-b);
```

Explanation

```
a-b > 0 → a after b
a-b < 0 → a before b
```

---

Descending order

```javascript
arr4.sort((a,b) => b-a);
```

---

# 1️⃣4️⃣ Sort Behavior Summary

| Method           | Behavior           |
| ---------------- | ------------------ |
| sort()           | lexicographic sort |
| sort((a,b)=>a-b) | numeric ascending  |
| sort((a,b)=>b-a) | numeric descending |

---

# 1️⃣5️⃣ Summary of Array Methods

| Method   | Purpose                            | Return                  |
| -------- | ---------------------------------- | ----------------------- |
| map()    | apply operation to each element    | new array               |
| filter() | keep elements satisfying condition | new array               |
| find()   | first element satisfying condition | single value            |
| reduce() | combine array into one value       | single value            |
| sort()   | sort elements                      | modifies original array |

---

# 1️⃣6️⃣ Key Takeaways

✔ Arrays can store **multiple data types**
✔ `map()` → transform elements
✔ `filter()` → select elements
✔ `find()` → first matching element
✔ `reduce()` → convert array into single value
✔ `sort()` → default lexicographic sorting

---

# 📘 JavaScript Objects (Collections)

## 1️⃣ What is an Object in JavaScript?

An **Object** in JavaScript is a **collection of key-value pairs**.

It is similar to a **Python dictionary**.

Python Example

```python
student = {
    "name": "John",
    "age": 20
}
```

JavaScript Example

```javascript
let obj = {
    name: "John",
    age: 20
}
```

So:

```text
Object = collection of properties (key : value)
```

---

# 2️⃣ Object Syntax

Objects are defined using **curly braces `{}`**.

```javascript
let obj1 = {
    key1: value1,
    key2: value2
}
```

Example

```javascript
let obj1 = {
    "a": 123,
    "a123": "b",
    c: "caterpillar"
}
```

---

# 3️⃣ Object Properties

Each **key in an object is called a property**.

Example

```javascript
let obj1 = {
    a: 123,
    a123: "b",
    c: "caterpillar"
}
```

Properties are:

```
a
a123
c
```

Values can be:

* number
* string
* function
* object
* array

---

# 4️⃣ Keys in JavaScript Objects

### Rule 1 — Keys can be strings

```javascript
let obj = {
    "name": "Rahul"
}
```

---

### Rule 2 — Quotes are optional for valid identifiers

Instead of

```javascript
"name": "Rahul"
```

You can write

```javascript
name: "Rahul"
```

---

### Rule 3 — Numeric keys must be accessed differently

Example

```javascript
let obj = {
    123: "number key"
}
```

Access using:

```javascript
obj[123]
```

NOT

```javascript
obj.123 ❌
```

---

# 5️⃣ Accessing Object Properties

Two ways:

## Dot Notation

```javascript
obj.property
```

Example

```javascript
console.log(obj1.a)
console.log(obj1.c)
console.log(obj1.a123)
```

---

## Bracket Notation

Used when:

* key is numeric
* key is dynamic

Example

```javascript
obj[123]
```

---

# 6️⃣ Functions Inside Objects (Object Methods)

Objects can store **functions as values**.

Example

```javascript
let obj1 = {
    fns: function(){
        console.log("This is object method")
    }
}
```

Here:

```
fns = property
function = value
```

This function is called a:

```text
Object Method
```

---

### Calling Object Method

```javascript
obj1.fns()
```

Example

```javascript
console.log(obj1.fns())
```

Output

```
This is object method
```

---

# 7️⃣ Example Object

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

# 8️⃣ The `this` Keyword (Object Context)

`this` refers to the **current object**.

Example

```javascript
console.log(`${this.var3} likes the course ${course}`)
```

Here:

```
this.var3 → obj2.var3
```

So output becomes:

```
Adarsh likes the course MAD II
```

---

# 9️⃣ Calling Object Functions

```javascript
console.log(obj2.var1)
console.log(obj2.var2)

obj2.func1()
obj2.func2("MAD II")
obj2.func3()
```

Output

```
25
30
this is first function
Adarsh likes the course MAD II
The first property of the obj is 25
```

---

# 🔟 What is Context in JavaScript?

Context means:

```text
Which object "this" refers to
```

Example

```
this.var1
```

If called as

```
obj2.func3()
```

Then

```
this → obj2
```

---

# 1️⃣1️⃣ Context Loss Problem

When a method is **copied into a variable**, the object context may be lost.

Example

```javascript
let testvar = obj2.func3
testvar()
```

Output

```
undefined
```

Why?

Because:

```
this no longer refers to obj2
```

This is called:

```text
Loss of Context
```

---

# 1️⃣2️⃣ Fixing Context using `bind()`

We can bind the function to another object.

Example

```javascript
const obj3 = {
    var1: 36
}
```

Bind function

```javascript
let testvar = obj2.func3.bind(obj3)
```

Now run

```javascript
testvar()
```

Output

```
The first property of the obj is 36
```

---

# 1️⃣3️⃣ What bind() Does

`bind()` permanently attaches a function to an object.

Syntax

```javascript
function.bind(object)
```

Example

```javascript
obj2.func3.bind(obj3)
```

Meaning:

```
Run func3 with obj3 as context
```

So:

```
this → obj3
```

---

# 1️⃣4️⃣ Summary of Object Concepts

| Concept          | Meaning                       |
| ---------------- | ----------------------------- |
| Object           | Collection of key-value pairs |
| Property         | Key of object                 |
| Method           | Function inside object        |
| Dot notation     | obj.property                  |
| Bracket notation | obj["property"]               |
| this             | Refers to current object      |
| Context          | Object that `this` refers to  |
| bind()           | Fixes context                 |

---

# 1️⃣5️⃣ Full Code Example (From Lecture)

```javascript
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

console.log(obj2.var1);
console.log(obj2.var2);

obj2.func1();
obj2.func2("MAD II");
obj2.func3();

let testvar = obj2.func3.bind(obj3);

console.log(testvar);

testvar();
```

---

# ⭐ Quick Revision (30-second memory trick)

```
Object → key : value pairs
Property → key
Method → function in object
this → current object
Context → object used by this
bind() → fixes context
```

---