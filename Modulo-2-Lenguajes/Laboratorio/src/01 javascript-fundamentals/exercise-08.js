console.log("****** EXCERCISE 8 - Includes ******");

function includes(array, value) {
  return array.includes(value);
}

// Ejemplo:
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

// Challenge

function includes2(array, value) {
  return array.indexOf(value) !== -1;
}

// Ejemplo:
console.log(includes2([1, 2, 3], 3)); // true
console.log(includes2([1, 2, 3], 0)); // false