
console.log("************** ARRAY OPERATIONS *********************");

const arr = ["Desatame", "Pantera", "Sobreviviré"];
// Apartado A - Destructuring
const headEsnext = (array) => {
  let [first] = array;
  return first;
}; 
console.log(headEsnext(arr));

// Apartado B - rest operator 

const tailEsnext = ([,...rest]) => rest
console.log(tailEsnext(arr));

// Apartado C - todos menos el ultimo - Array.prototype (slice)

const initEsnext = (array) => array.slice(0, array.length - 1);
console.log(initEsnext(arr));

// Apartado D - ultimo elemento (pop())

const lastEsnext = (array) => array.pop();
console.log(lastEsnext(arr));