console.log("************** DELIVERABLE 01 *********************");
console.log("************** Array Operations *********************");

// 01. Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

let array = ["Harry", "Ronald", "Hermione"];

// Destructuring con arrays
const head = (array) => {
  const [first] = array; 
  return first;
}

// Destructuring en argumentos de funcion
const getHead = ([first]) => first;

console.log(head(array));
console.log(getHead(array));

// 02. Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([, ...second]) => second; // Implementation here.

console.log(tail(array));

// 02. Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (array) => array.slice(0, array.length - 1);
console.log(init(array)); 


// 03. Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (array) => array.pop();
console.log(last(array));