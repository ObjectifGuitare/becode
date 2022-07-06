const n = Number(prompt('Enter a number of operations'))
let finalSum = 0

for(let i=0; i<n; i++){
  const current = Number(prompt('Enter a number to add to the sum'))
  finalSum += current
}

console.log(finalSum)