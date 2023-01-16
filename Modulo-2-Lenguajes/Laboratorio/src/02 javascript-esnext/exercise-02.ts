console.log("************** ARRAY OPERATIONS *********************");

const arr = ["Desatame", "Pantera", "Sobreviviré"];
// Apartado A - Destructuring
const headEsnext = (array: string[]) => {
  let [first]: string[] = array;
  return first;
}; 
console.log(headEsnext(arr));

// Apartado B - rest operator 

const tailEsnext = ([,...rest]: string[]) => rest
console.log(tailEsnext(arr));

// Apartado C - todos menos el ultimo - Array.prototype (slice)

const initEsnext = (array: string[]) => array.slice(0, array.length - 1);
console.log(initEsnext(arr));

// Apartado D - ultimo elemento (pop())

const lastEsnext = (array: string[]) => array.pop();
console.log(lastEsnext(arr));
