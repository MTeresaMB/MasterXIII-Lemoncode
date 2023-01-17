const eso20 = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};
console.log("****** EXCERCISE 4 - Clone Merge ******");
//Apartado A 
function clone (source: {}){
  const cloneSource = {...source};
  return cloneSource;
}
console.log(clone(eso20));

//Apartado B 
function merge(source: {}, target: {}) {
  const cloneMerge = {...target, ...source};
  return cloneMerge;
}

// Por ejemplo, dados estos 2 objetos:
var objeto_a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var objeto_b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
console.log(merge(objeto_a, objeto_b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

