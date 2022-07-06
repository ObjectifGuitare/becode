const arr = [52, 123, 4, 8, 12, 130, 8]

// Some elegant ES6 solutions : 
const min = Math.min(...arr)
const max = Math.max(...arr)


// The old-fashioned way :
let minimum = arr[0]
let maximum = arr[0]

for(let element of arr){
  if(element < minimum){
    minimum = element
  }
  if(element > maximum){
    maximum = element
  }
}