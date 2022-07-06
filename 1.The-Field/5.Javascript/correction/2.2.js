const min = Number(prompt('Enter a minimum number'))
const max = Number(prompt('Enter a maximum number'))
const current = Number(prompt('Enter your current number'))

if(min > max){
  if(min < current && max > current){
    console.log('Current is between max & min')
  }
  else{
    console.log('Current is not between min & max')
  }
}
else{
  console.log('Are you kdding me?!')
}