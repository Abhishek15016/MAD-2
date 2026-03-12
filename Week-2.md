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
