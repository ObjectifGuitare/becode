const calcDistance = (x0, y0, x1, y1) => Math.sqrt((x1-x0)**2 + (y1-y0)**2)

console.log( calcDistance(1, 1, 2, 2) )
console.log( calcDistance(1, 1, 3, 1) )
console.log( calcDistance(4, 1, 1, 1) )
console.log( calcDistance(-2, 2, 2, -2) )