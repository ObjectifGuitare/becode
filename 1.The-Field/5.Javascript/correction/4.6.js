function factorial(n){
  if(n === 0)
    return 1
  
  return n * factorial(n - 1)
}


// The champion ES6 one-liner
const fac = n => n === 0 ? 1 : n * fac(n - 1)