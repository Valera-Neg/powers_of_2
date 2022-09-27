function powersOfTwo(n){ 

  return Array.from({length: n + 1}, (v, k) => 2 ** k); 
}

console.log(powersOfTwo(0)) //> [1]
console.log(powersOfTwo(1)) //> [1, 2]
console.log(powersOfTwo(2)) //> [1, 2, 4]
console.log(powersOfTwo(4)) //> [1, 2, 4, 8, 16]