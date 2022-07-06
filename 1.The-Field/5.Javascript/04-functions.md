
# Algorithmics with JavaScript 04 - Functions

Functions are pieces of code that can be reused at multiple different places in the same program. They are essential for [code reuse](https://en.wikipedia.org/wiki/Code_reuse), [modularity](https://en.wikipedia.org/wiki/Modularity) and [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns).

## Theory

### Simple function definition

```javascript
function hello(name) {
  console.log("Hello " + name);
}

hello();
```

```javascript
function add(a, b) {
  return a + b;
}

console.log("The sum of 2 and 3 is " + add(2, 3));
```

It's the basic way to declare a function. The additional parameters we pass when calling a function are called its *arguments*. A function can also return something using `return`. (But it doesn't have to.)

### Arrow functions

```javascript
let myFunction = (a, b) => {
  return a + b;
}

console.log(myFunction(2, 3)); // 5

// or even shorter

let myFunction = (a, b) => a + b
```

Arrow functions ("arrow" is simply related to the look of the `=>` symbol) is a shorter syntax to define functions. Beware that there are some differences, and some pitfalls while using this syntax ([you can learn more about this here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)).

Even if they may not seem useful currently they have a lot of specificities that make them used quite a lot in JavaScript. So you should be aware of them.

### Recursivity

```javascript
function count(i) {
  if (i <= 100) {
    console.log(i);
    count(i + 1);
  }
}

count(i);
// displays all numbers from 1 to 100
```

This has nothing to do with a language element in JavaScript. *Recursivity* is a programming technique that you can use in all programming languages. It's used when a function calls itself.


## Exercises

### Exercise 4.1

Create a function named `calcSurface` that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.

Write a documentation for the `calcSurface` function.

### Exercise 4.2

Create a function named `rand10()` that returns a random integer between 1 and 10. Create a program that will display the result of that function each time it is run.

Write a documentation for the `rand10()` function.

You will have to search on Google how to generate random numbers in JavaScript for this exercise.

### Exercise 4.3

By reusing the function `rand10()` created in Exercise 2, write a function named `multiRand(n)` that returns an array of `n` numbers between 1 and 10. You should not modify anything in `rand10()` to achieve this.

Write a documentation for the `multiRand(n)` function.

Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.

### Exercise 4.4

Create a function `pickLearner(inputAr, n)` that takes 2 parameters. 
- `inputAr` : An array of learners (the one you created in [exercise 3.0](./03-arrays.md) for example)
- `n` : A number, that should be greater than 0 and less than the length of `inputAr`

The function should return an array of randomly selected learners.

### Exercise 4.5

Create a function named `calcDistance` which takes the coordinates of two different points `A` and `B` in a 2D space. That function must return the distance between those two points.

Examples results:

* Point A = [1, 1], point B = [2, 2] => 1.41
* Point A = [1, 1], point B = [3, 1] => 2
* Point A = [4, 1], point B = [1, 1] => 3
* Point A = [-2, 2], point B = [2, -2] => 5.65

Create a program to use that function.

Write a documentation for the `calcDistance` function.

Note: You probably need to make some search on Google to learn the mathematical formula to do that. You will also probably need to search for useful functions in JavaScript to help you making complex mathematical formulas...

### Exercise 4.6

Create a function `factorial(a)` that returns the factorial of a number.

That function must be recursive.

## Resources

* [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
