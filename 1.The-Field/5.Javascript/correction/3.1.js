const testArray1 = [1, 2, 3, 4, 5]
const testArray2 = [100, 101, 102]

let testSum1 = 0
let testSum2 = 0

for(let element of testArray1){
  testSum1 += element
}
console.log(testSum1 === 15) // should output true

for(let element of testArray2){
  testSum2 += element
}
console.log(testSum2 === 303)
