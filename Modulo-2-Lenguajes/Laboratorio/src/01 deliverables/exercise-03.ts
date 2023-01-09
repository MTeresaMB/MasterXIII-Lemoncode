console.log("************** DELIVERABLE 03 *********************");
console.log("************** Clone Merge *********************");

// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source

function cloneB(source : {}) {
  const cloneSource = {...source}
  return cloneSource;
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log(cloneB(a));
console.log(cloneB(b));

// Merge 
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, 
// y en caso de propiedades con el mismo nombre, source sobreescribe a target.

function mergeB(source : {}, target : {}){
  const mergeSourceMerge = {...target, ...source};
  return mergeSourceMerge;
}

console.log(mergeB(a, b));