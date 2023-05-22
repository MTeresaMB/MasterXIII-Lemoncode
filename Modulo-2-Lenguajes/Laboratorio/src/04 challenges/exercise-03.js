console.log("************** FLATTEN ARRAY *********************");

// Apartado A
const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const flat = (array) => {
  return array.flat(Infinity);
}

console.log(flat(sample));

// Apartado B

const flatArray = (array) => {
  return array.flat(Infinity);
}

console.log(flat(sample));