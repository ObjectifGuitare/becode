const originalArray = ['Aramis', 'Athos', 'Porthos']

// The modern, effective way
const copy1 = [... originalArray]

// Some other methods :
const copy2 = Array.from(originalArray)
const copy3 = originalArray.slice()


// The ugly way
const copy4 = []
for(let element of originalArray){
  copy4.push(element)
}