const testArray1 = [1, 2, 3, 4, 5]
const testArray2 = [100, 101, 102]

let testSum1 = 0
let testSum2 = 0

for(let element of testArray1){
  testSum1 += element / testArray1.length
}
console.log(testSum1 === 3) // should output true

for(let element of testArray2){
  testSum2 += element / testArray2.length
}
console.log(testSum2 === 101)
