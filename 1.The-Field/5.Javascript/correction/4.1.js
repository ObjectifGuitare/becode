
/**
 * Compute the surface of a rectangle, with a given height and width
 * @param  {number} length
 * @param  {number} width
 * @returns {number} The surface of the given rectangle
 */
function calcSurface(length, width){
  return length * width;
}


// Alternative syntax
// (Arrow function)
const calcSurfaceArrow = (length, width) => length * width


const x = Number(prompt('length ?'))
const y = Number(prompt('width ?'))
console.log( calcSurface(x, y) )
