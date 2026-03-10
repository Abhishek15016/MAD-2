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