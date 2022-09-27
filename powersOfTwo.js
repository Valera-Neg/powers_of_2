
function powersOfTwo(n){ 
  let res = [];
  for (let i = 0; i <= n; i++) {
  res.push(Math.pow(2, i))
  }
  return res; 
}

console.log(powersOfTwo(0)) //> [1]
console.log(powersOfTwo(1)) //> [1, 2]
console.log(powersOfTwo(2)) //> [1, 2, 4]
console.log(powersOfTwo(4)) //> [1, 2, 4, 8, 16]