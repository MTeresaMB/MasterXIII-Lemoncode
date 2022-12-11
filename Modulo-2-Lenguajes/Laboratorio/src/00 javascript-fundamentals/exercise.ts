console.log("****** EXCERCISES JAVASCRIPT FUNDAMENTALS ******");
console.log("****** EXCERCISE 01 - biggestWord ******");

function biggestWord(phrase){
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

const lengthOfObject = object => Object.keys(object).length;

function media (eso2o, lengthOfObject){
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

const checkResults = (input : any) => input === undefined ? "Unknown" : input === null ? "" : input;

console.log(checkResults("hola"));
console.log(checkResults(undefined));
console.log(checkResults(null));

console.log("****** EXCERCISE 4 - Clone Merge ******");
//Apartado A 
function clone (source){
  const cloneSource = {...source};
  return cloneSource;
}
console.log(clone(eso2o));

//Apartado B 
function merge(source, target) {
  const cloneMerge = {...target, ...source};
  return cloneMerge;
}

// Por ejemplo, dados estos 2 objetos:
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}


console.log("****** EXCERCISE 5 - Deep Equal ******");
//Apartado A

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser); // false

function isEqual(a, b) {
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
console.log("****** EXCERCISE 14 - Values ******");

// Basic
const serieTv = {
  name: 'X-files',
  year: 1994,
  seasons: 11
};

const showValues = (serieTv) => Object.values(serieTv);

console.log(showValues(serieTv));

//Challenge
function SerieTv(name, year, season){
  this.name = name;
  this.year = year;
  this.seasons = season;
}

SerieTv.prototype.getValues = function(){
  console.log("Name of Series TV: " + this.name 
  + " Year: " + this.year 
  + " Seasons: " + this.seasons);
};

let serie1 = new SerieTv("Game of Thrones", 2011, 8);
let serie2 = new SerieTv("Brooklyn 99", 2013, 8);

serie1.getValues();
serie2.getValues();
console.log(serie1);
console.log(serie2);
// console.log(showValues(serie1));
// console.log(showValues(serie2));
