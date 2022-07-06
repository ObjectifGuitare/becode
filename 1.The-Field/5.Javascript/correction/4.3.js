function rand10(){
  return 1 + Math.floor(Math.random() * 10)
}

function multiRand(n){
  const randArray = []

  for(let i=0; i<n; i++){
    randArray.push(rand10())
  }

  return randArray
}

console.log( multiRand(5) )