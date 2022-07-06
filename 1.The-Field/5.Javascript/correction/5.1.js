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

console.log( askTvSerie() )