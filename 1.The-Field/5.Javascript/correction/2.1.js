const ageInput = Number(prompt('How old are you'))

if(ageInput >= 18){
  console.log("You are an adult")
}
else{
  console.log("You are not yet an adult")
}


// ------
// An other way to achieve this :

const anotherAgeInput = Number(prompt('How old are you'))
let notYet = ' '

if(anotherAgeInput < 18){
  notYet = ' not yet '
}
console.log(`You are${notYet}an adult`)