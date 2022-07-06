function askTvSerie(){
  const tvSerie = {
    name: prompt('What is the name of the serie?'),
    productionYear: prompt('Which year was it produced?'),
    cast: []
  }

  let askCast = prompt('Enter a cast member', 'end')
  while(askCast !== 'end'){
    tvSerie.cast.push(askCast)
    askCast = prompt('Enter a cast member (or write "end" to stop)', 'end')
  }

  return tvSerie
}

function randomizeCast(tvSerie){
  // Copy the original tv serie cast
  const newCast = [...tvSerie.cast]


  // We return a copy of the original tvSerie object
  // with a "shuffled version" of the cast
  return {
    ...tvSerie,
    cast: newCast.sort(() => Math.random() - 0.5)
  }
}

const originalTvSeries = askTvSerie()
const shuffledSeries = randomizeCast(originalTvSeries)

console.log( originalTvSeries )
console.log( shuffledSeries )
