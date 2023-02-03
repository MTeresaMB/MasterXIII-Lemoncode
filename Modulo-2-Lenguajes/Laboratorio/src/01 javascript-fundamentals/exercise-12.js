console.log("****** EXCERCISE 12 - Subsets ******");

function subsets(word) {
  let arr = [];
  for(let i = 0; i < word.length - 1; i++) {
    arr.push(word.substring(i + 1));
  }
  return arr;
}

console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

// Challange 

function subsetsChallenge(word) {
  const words = word.split("").slice(1);
  return words.map((letters, index) => words.join("").slice(index));
}

console.log(subsetsChallenge("message"));