
# Algorithmics with JavaScript 02 - Control structures

Control structures are elements of the language that affect the way the program behave.

## Theory

### Comparison operators

Some new operators that are used a lot with control structures:

* `===`: returns `true` if both operands have exactly the same value. Else it returns `false`.
* `!==`: returns `true` if both operands don't have the same value.
* `>`: returns `true` if the first operand is strictly greater than the second one.
* `<`: returns `true` if the first operand is strictly lower than the second one.
* `>=`: returns `true` if the first operand is greater than or equal to the second one.
* `<=`: returns `true` if the first operand is lower than or equal to the second one.

### Logic operators

* ``&&``: returns `true` if both operands are true.
* ``||``: returns `true` if any of the operands are true.
* ``!``: only takes one operand. Inverse the value of its operand. If it was `true` it becomes `false`. If it was `false` it becomes `true`.

### Combine operators

If you combine multiple operators JavaScript will apply some priorities rules. But these are hard to learn and remember so it is advised to frequently use parenthesis to combine them. Examples:

* `(a > 2) && (b < 4)`: returns `true` only if `a` is greater than 2 **and** `b` is lower than 4.
* `(x >= y) || (y === z)`: returns `true` only if `x` is greater than or equal to `y` **or** `y` is equal to `z`.
* `!(a < 2)`: returns `true` only if `a` is *not* lower than 2. This is the same thing than writing `a >= 2`.
* `(!(a < b) && (x > z)) || !(i === j)`: huu... try to guess !

### if

```javascript
let size = 185;
let weight = 80;

if ((size >= 150) || (weight >= 45)) {
  console.log("You probably are and adult");
}
```

`if` allows to test a condition and to execute some code only if it is true.

### else

```javascript
let size = 185;
let weight = 80;

if ((size >= 150) || (weight >= 45)) {
  console.log("You probably are an adult");
} else {
  console.log("You probably are a child");
}
```

`else` is complementary to `if` and allows to execute some other code if the condition is false.

### else if

```javascript
let size = 185;
let weight = 80;

if ((size >= 150) || (weight >= 45)) {
  console.log("You probably are an adult");
} else if ((size >= 50) || (weight >= 10)) { {
  console.log("You probably are a child");
} else {
  console.log("You probably are a baby");
}
```

Another structure to use along `if`. It allows to make a second test only if the previous one already failed. Note that you can use as many `else if` as you want.

### while

```javascript
let i = 1;

while (i <= 100) {
  console.log(i);
  i += 1;
}
// This code displays all numbers from 1 to 100
```

`while` repeats code as long as the condition stays true.

**Beware infinite loops! If the condition inside a `while` always stays true it means your program will never end.**

### for

```javascript
for (let i = 1; i <= 100; i += 1) {
  console.log(i);
}
// This code also displays all numbers from 1 to 100
```

`for` is like a specialized version of `while`. Everything it can do `while` can also do it. But its syntax is shorter for some common use cases so it's quite often used.

Inside the parenthesis there are three arguments separated by the `;` character:

* The first one is a command that will be executed only once, after the first execution of the loop.
* The second one is a test that will be executed after each execution of the loop to know if we should continue or not (exactly like in `while`).
* The third one is a command that will be executed after each execution of the loop.

## Exercises

### Exercise 2.1

Ask the user to enter its age. If its age is at least 18 display "You are an adult". If it's not the case display "You are not yet an adult".

tip: You can use the [prompt function](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) to ask for user input in the browser

### Exercise 2.2

Ask the user to enter three numbers: `min`, `max` and `current`. Display if `current` is between `min` and `max`.

Bonus: if `min` is greater than `max`, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)

Bonus 2: be polite in the error messages. (facultative)

### Exercise 2.3

Display all **even** numbers between 1 and 100.

Bonus: do two different versions. The first one should use `while` and make a loop that will execute 100 times. The second one should use `for` and make a loop that will execute 50 times.

### Exercise 2.4

Count from 1 to 100. For every even number display the result of their division by 2. For every odd number display the result of their multiplication by 3.

### Exercise 2.5

Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42).

### Exercise 2.6

Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)

### Exercise 2.7

Make a program that ask the user to enter a number named `n`. Then ask him `n` time to enter a new number. At the end display the sum of all the numbers collected this way.

Example: If the user enters `3` for `n` then `1`, `2` and `3`, the program should display `6`.

## Resources

* [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
* [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
* [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
