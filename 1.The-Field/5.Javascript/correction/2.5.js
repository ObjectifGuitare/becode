let favoriteNumber = Number(prompt('What is your favorite number?'))

while(favoriteNumber !== 42){
  alert('Are you sure?')
  favoriteNumber = Number(prompt('What is your favorite number?'))
}