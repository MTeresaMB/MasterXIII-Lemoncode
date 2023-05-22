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