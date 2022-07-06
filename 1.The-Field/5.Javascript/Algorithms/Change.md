# Change Calculator

You have to design a function that calculates the change for a given amount and returns the least possible coins.

Here is the function signature.
```js
function computeChange(price, moneyHanded){
  // your code here
}
```


... and some examples. Feel free to use those values to test your function.
```js
// An item costs 12,30€ 
// We hand a 50€ bill
const change1 = computeChange(12.3, 50)

// Should return 37,70€
// 1x20, 1x10, 1x5, 1x2, 1x0.5, 1x0.2
console.log(change1) // [20, 10, 5, 2, 0.5, 0.2]


const change2 = computeChange(17.41, 20)
console.log(change2) // [2, 0.5, 0.05, 0.02, 0.02]
```

## Expected behavior

- If `price` or `moneyHanded` are not numbers or not positive, the function should return an empty array
- If `moneyHanded` is lower than `price`, the function should return an empty array
- The function should return the exact change, no more, no less
- The function should return the least amount of bills and coins.

## Gentle reminder 

There are 7 euro banknotes and 8 euro coins. The bank note denominations are €5, 10, 20, 50, 100, 200 and 500, while the euro coin denominations are 1 cent, 2 cent, 5 cent, 10 cent, 20 cent, 50 cent, €1, and €2.