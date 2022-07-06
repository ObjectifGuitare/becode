
# Algorithmics with JavaScript 01 - Introduction

JavaScript is a powerful programming language designed to add interactivity to web pages, thus improving the user experience. It is present in all web browsers. Nowadays it is also used more and more on servers due to its many advantages.

Due to its simplicity it is a good tool to learn algorithmics. Trainees will also have the added benefit of knowing a widely available programming language at the end of this course.

**You should not confuse Java and JavaScript. They are completely different programming languages.** [Take a look here if you want to understand why they have so similar names](https://stackoverflow.com/questions/2018731/why-is-javascript-called-javascript-since-it-has-nothing-to-do-with-java).

## Bases

### Display some data

```javascript
console.log("hello");
```

`console.log()` is often used to debug your code or to display small message. Use it and abuse it in all the exercices to understand what happens in your programs.

### Variables

```javascript
let age = 25;
```

A variable is... well, it's a thing that holds stuffs. The `let` keyword allows us to define a new variable. Then we can assign what we want to it using the `=` operator.

```javascript
let age = 25; // I'm 25
age = 36; // I get older
age = 18; // Miraculously I'm getting younger
```

#### Types of variables

Numbers:

```javascript
let age = 25;
```

String:

```javascript
let phrase = "Coding is fun!";
```

Booleans:

```javascript
let isItTrue = true;
let isItFalse = false;
```

### Numbers

```javascript
let age = 23;

let sisterAge = age + 11;

age += 12; // age = age + 12;

console.log(age);
```

### Arithmetic operators

* Addition: `+`
* Soustraction: `-`
* Multiplication: `*`
* Division: `/`
* Modulo: `%`

### Strings

```javascript
let name = "Jean";
let nameSister = "Emma";
console.log("My name is " + name);
console.log("My sister's name is " + name);
```

### `new Number()`

```javascript
let htmlBadges = new Number('5');

let cssBadges = new Number('7');

let totalBadges = htmlBadges + cssBadges;

console.log('Woaw, you have ' + totalBadges + "!");
```

`new Number()` converts a string to a number.

### Beware of variable types !

```javascript
console.log('10' + '5'); // '105' => string type

console.log(10 + 5); // 15 => number type
```

## Exercises

### Exercise 1.0 - Interactive Mode

Open the console and use it to make an addition. Then repeat the same step until you have tested all five arithmetic operators we presented before.

Wonderful ! From now on you'll never need a calculator anymore.

### Exercise 1.1

Create a new javascript file.

Define a variable and display it in the console.

### Exercise 1.2

Define three variables: `name`, `firstName` and `city`. Display them like this: "Your name is Gerard Lambert and you live in Paris.".


## Resources

* [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
* [Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
* [Number()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
