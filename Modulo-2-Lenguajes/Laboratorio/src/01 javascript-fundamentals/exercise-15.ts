console.log("****** EXCERCISE 15 - Zip ******");


function zipObject(keys: string[], values: unknown[]) {
  let objAux = {};
  keys.forEach ((key, index) => {
    objAux[key] = values[index];
  });
  return objAux;
}

function zipObjectChallenge(keys: unknown[], values: unknown[]) {
  let objAux = {};
  values.forEach((value, index) => {
    objAux[keys[index]] = values;
  });
  return objAux;
}
// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}
console.log(zipObjectChallenge(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}

