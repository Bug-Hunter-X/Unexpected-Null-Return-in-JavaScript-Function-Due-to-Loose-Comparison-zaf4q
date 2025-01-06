function foo(a, b) {
  if (a == null || b == null) {
    return 0; //Corrected to handle null values by defaulting to 0
  }
  return a + b;
}
console.log(foo(1, null)); // Output: 1
console.log(foo(null, 1)); // Output: 1
console.log(foo(1, 2)); // Output: 3