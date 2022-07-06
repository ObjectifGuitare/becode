function pickN(inputArray, n){
  if(n >= inputArray.length)
    return inputArray
  
  const inputCopy = [...inputArray]
  const selectedElements = []

  for(let i=0; i<n; i++){
    const randomIndex = Math.floor(Math.random() * inputCopy.length)

    selectedElements.push(inputCopy[randomIndex])
    inputCopy.splice(randomIndex, 1)
  }

  return selectedElements
}

const learners = [
  'Emre',      'Gilles',
  'Jamie',     'Jason',
  'Jeremy',    'Martin',
  'Rayane',    'Rayhan',
  'Ricardo',   'Sebastien',
  'Steffanie', 'Tanguy',
  'Thibaud',   'Zakaria',
  'Eric'
]

console.log( pickN(learners, 5) )
