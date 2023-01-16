console.log("****** EXCERCISES JAVASCRIPT FUNDAMENTALS ******");
console.log("****** EXCERCISE 01 - biggestWord ******");

function biggestWord(phrase: string){
  const splitWords = phrase.split(" ");
  let resultWord = "";
  
  for (let i = 0; i < splitWords.length; i++) {
    if(splitWords[i].length > resultWord.length){
      resultWord = splitWords[i];
    }
  }
  return resultWord;
}

console.log(biggestWord("Esta frase puede contener muchas palabras")); //contener
console.log(biggestWord("This sentence may contain many words")); //sentence
console.log(biggestWord("Ejercicios básicos de JavaScript")); // Ejercicios
console.log(biggestWord("Basic JavaScript exercises")); // JavaScript
console.log(biggestWord("You can add new files as long as they are imported from index.ts")); // imported


console.log("****** EXCERCISE 02 - Califications ******");
const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

const lengthOfObject = (object: {}) => Object.keys(object).length;

function media (eso2o: {}, lengthOfObject: (object:{}) => number) {
  var media = 0;
  for(var key in eso2o){
    media += eso2o[key];
  }
  let totalMedia = media / lengthOfObject(eso2o);
  return totalMedia;
}
function mediaClasificacion (media: number) {
  var result = "";
  if(media == 10) result = "Matricula de Honor";
  else if(media < 10 && media >9) result = "Sobresaliente";
  else if(media < 9 && media >7) result =  "Notable";
  else if(media < 7 && media >6) result =  "Bien";
  else if(media < 6 && media >5) result = "Suficiente";
  else if(media < 5 && media >4) result = "Insuficiente";
  else if(media < 4) result = "Por debajo de 4";
  else if(media == null || media == undefined) result = "No se ha podido calcular la nota media";
  else result = "No se ha podido calcular la nota media, intentelo de nuevo.";
  return console.log(result)
};

console.log(media(eso2o, lengthOfObject));
mediaClasificacion(media(eso2o, lengthOfObject));

console.log("****** EXCERCISE 3 - Check Arguments ******");

const checkResults = (input: unknown) => input === undefined ? "Unknown" : input === null ? "" : input;

console.log(checkResults("hola"));
console.log(checkResults(undefined));
console.log(checkResults(null));

console.log("****** EXCERCISE 4 - Clone Merge ******");
//Apartado A 
function clone (source: {}){
  const cloneSource = {...source};
  return cloneSource;
}
console.log(clone(eso2o));

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


console.log("****** EXCERCISE 5 - Deep Equal ******");
//Apartado A

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser); // false

function isEqual(a: {}, b: {}) {
  //primera solucion
  // return JSON.stringify(a) === JSON.stringify(b);

  //segunda solucion : comprueba tanto keys como values para devolver true
  // const objA_key = Object.keys(a);
  // const objB_key = Object.keys(b);
  // if (objA_key.length !== objB_key.length) return false;
  // for(let i of objA_key){
  //   if(a[i] !== b[i]){
  //     return false;
  //   }
  // }
  // return true;

  //tercera solucion : solo comprueba las keys para devolver true
  if(a.hasOwnProperty("name") === b.hasOwnProperty("name") 
    && a.hasOwnProperty("age") === b.hasOwnProperty("age")) {
      return true;
  }else{
    return false;
  }
}

console.log(isEqual(user, clonedUser)); // true


// console.log("****** EXCERCISE 6 - Dices ******");
const buttonRollDice = document.querySelector('#rollDice');
buttonRollDice?.addEventListener('click', () => {
  console.log("****** EXCERCISE 6 - Dices ******");
  const min = 1;
  const max = 6;
  let dice_1: number | null;
  let dice_2: number | null;;

  function resetDice_1 () {
    dice_1 = null;
    return dice_1;
  }
  function resetDice_2 () {
    dice_2 = null;
    return dice_2;
  }

  function getRandom(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function rollDice_1(){
    dice_1 = getRandom(min, max);
    console.log("The result of dice 1 is: " + dice_1);
    return dice_1;
  }

  function rollDice_2(){
    dice_2 = getRandom(min, max);
    console.log("The result of dice 2 is: " + dice_2);
    return dice_2;
  }

  function prizeDoubleSix(){
    if(dice_1 === 6 && dice_2 === 6) {
      console.log("You have won a prize");
    }
  }

  rollDice_1();
  rollDice_2();
  prizeDoubleSix();
  resetDice_1();
  resetDice_2();
})

console.log("****** EXCERCISE 7 - Values ******");

// Apartado A

// function f() {
//   console.log(a); // Undefined
//   console.log(g()); // Undefined

//   var a = "good job!";
//   function g() {
//     return a;
//   }
//   console.log(a); // Good Job!
// }

// f();

// Los dos Undefined son porque se estan llamando a la variable a y a la funcion g
// antes de ser declaradas

// El good job! porque ya ha sido declarada e inicializada la variable a

// Apartado B

// var a = 1;

// (function() {
//   console.log(a); // Undefined
//   var a = 2;
//   b = 4;
//   var c = 3;
// })();

// console.log(a); // 1
// console.log(b); // 4 
// console.log(c); // Error c is not defined

// Undefined porque se esta llamando a una variable que no esta definida dentro 
// de la funcion autoejecutable y aunque sea una variable var solo tienen ambito
// en la funcion

// El segundo console.log(a) -> con valor 1 es porque esta tomando la inicializacion de la variable
// anterior a la funcion 

// En el tercer console.log(b) -> con valor 4 es porque es una varible de ambito global, por lo que se tendra
// utilizar fuera de la funcion

// En el ultimo console.log(c) -> lanza un error de que la variable no esta definida, porque solo esta declarada e inicializada
// en el ambito de la funcion, por lo que no se podria utilizar fuera de ella.

// Apartada C 

// f();
// var a = 1;

// function f() {
//   console.log(a); // Undefined
//   b = 4;
//   var c = 3;
// }

// console.log(a); // 1
// console.log(b); // 4
// console.log(c); // Error c is not defined

// Los resultados son los mismos que en el apartado B, aunque se usa el hoisting, los resultados
// no cambian 

console.log("****** EXCERCISE 8 - Includes ******");

function includes(array: number[], value: number) {
  return array.includes(value);
}

// Ejemplo:
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

// Challenge

function includes2(array: number[], value: number) {
  return array.indexOf(value) !== -1;
}

// Ejemplo:
console.log(includes2([1, 2, 3], 3)); // true
console.log(includes2([1, 2, 3], 0)); // false


console.log("****** EXCERCISE 9 - Primes ******");

function isPrime(number: number){
  if(number <= 1) return false;
  for(let i = 2; i <= number - 1; i++){
    if(number % i == 0) return false;
  }
  return true;
}

function showPrimes(from: number, to: number){
  for(let i = from; i <= to; i++){
    console.log(i + (isPrime(i) ? " is prime number " : " is not a prime number"));
  }
}

showPrimes(1,100);

// Challange
function isPrimeSqrt(number: number){
  if(number <= 1) return false;
  for(let i = 2; i <= Math.sqrt(number); i++){
    if(number % i == 0) return false;
  }
  return true;
}
showPrimes(1,100);

console.log("****** EXCERCISE 10 - Read Book ******");

function isBookRead(books: Books[], titleToSearch: string) {
  let findByTitle = books.find(book => book.title === titleToSearch);

  return Boolean(findByTitle) && findByTitle.isRead;
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

console.log("****** EXCERCISE 11 - Reverse Text ******");

function reverseText(text: string) {
  return text.split(" ").reverse().join(" ");
}

console.log(reverseText("Se hace en 1 sola línea"));

console.log("****** EXCERCISE 12 - Subsets ******");

function subsets(word : string) {
  let arr = [];
  for(let i = 0; i < word.length - 1; i++) {
    arr.push(word.substring(i + 1));
  }
  return arr;
}

console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

// Challange 

function subsetsChallenge(word: string) {
  const words = word.split("").slice(1);
  return words.map((letters, index) => words.join("").slice(index));
}

console.log(subsetsChallenge("message"));


console.log("****** EXCERCISE 13 - This ******");

// var surname = "Pérez";
// var person = {
//   name: "Juan",
//   surname: "González",
//   wife: {
//     name: "Ana",
//     surname: "Jiménez",
//     getSurname: function() {
//       return this.surname;
//     },
//   },
// };

// console.log(person.wife.getSurname()); // Jimenez
// var surnameFunction = person.wife.getSurname;
// console.log(surnameFunction()); // Pérez
// console.log(surnameFunction.call(person)); // González

console.log("****** EXCERCISE 14 - Values ******");

// Basic
const serieTv = {
  name: 'X-files',
  year: 1994,
  seasons: 11
};

const showValues = (serieTv: {}) => Object.values(serieTv);

console.log(showValues(serieTv));


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

console.log("****** EXCERCISE 16 - ZZCrypt ******");

// Descifra el siguiente secreto:
var secret = "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret: string) {
  return secret.split("").map(decryptChar).join("");
}

function decryptChar(char: string){
  return (char === " ") ? " " : plain[cipher.indexOf(char)];
}
console.log(decrypt(secret));