function foo(a, b) {
  // Explicitly handle null and undefined values
  a = a === null || a === undefined ? 0 : a;
  b = b === null || b === undefined ? 0 : b;

  // Check if the inputs are numbers
  if(typeof a !== 'number' || typeof b !== 'number'){
    return NaN; // Or throw an error: throw new Error('Inputs must be numbers');
  }

  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo('a', 2)); // Output: NaN
console.log(foo(1, 'b')); // Output: NaN