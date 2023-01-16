console.log("************** DELIVERABLE 02 *********************");
console.log("************** Concat *********************");

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
const array1 = [1, 2, 3];
const array2 = [6, 7, 8];

const concat = (a: (string | number)[], b: (string | number)[]) => [...a, ...b];
console.log(concat(array1, array2));

// Challenge 

const concatChallenge = (a: (string | number)[], b: (string | number)[], ...args: (string | number)[]) => a.concat(b, ...args);

console.log(concatChallenge(array1, array2, "hola"));
